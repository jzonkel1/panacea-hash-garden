// Post-build prerender.
//
// Writes dist/<route>/index.html for every route with (a) route-specific
// title/description/canonical/og, (b) JSON-LD, and (c) the REAL rendered body
// baked into #root.
//
// (c) is the important part. This script used to bake meta only and leave
// `<div id="root"></div>` empty, which meant every crawler that does not run
// JavaScript — GPTBot, PerplexityBot, ClaudeBot among them — saw a blank page.
// Chrome renders each route here so the markup ships in the HTML.
//
// The snapshot is deliberately taken WITHOUT clearing the age gate: the gate is
// an opaque overlay with the site mounted underneath it, so the baked HTML
// contains both. A crawler reads the content; a visitor sees the gate with no
// flash of what is behind it.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync, statSync, createReadStream } from 'node:fs';
import http from 'node:http';
import puppeteer from 'puppeteer';

import { posts } from '../src/data/blog.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE_URL = (process.env.URL || 'https://panaceastx.com').replace(/\/$/, '');
const BASE = process.env.NETLIFY ? '/' : '/panacea-hash-garden/';
const PORT = 4330;

const meta = JSON.parse(readFileSync(join(root, 'src', 'seo', 'meta.json'), 'utf8'));

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  '@id': `${SITE_URL}/#business`,
  name: 'PANACEA Hash Garden',
  description:
    'Premium 21+ smoke shop and botanical apothecary in Corpus Christi, TX. House-grown flower, concentrates, hemp-derived THC seltzers, house-made edibles, artisan glass, branded merch, and live events including comedy and music nights.',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og.jpg`,
  telephone: '+1-361-752-4168',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4914 Everhart Rd',
    addressLocality: 'Corpus Christi',
    addressRegion: 'TX',
    postalCode: '78411',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '22:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/rene.pena.39',
    'https://www.instagram.com/rene.pena.39/',
    'https://panaceahg.printful.me/',
  ],
  hasMap: 'https://maps.google.com/?q=4914+Everhart+Rd,+Corpus+Christi,+TX+78411',
  priceRange: '$$',
  keywords:
    'smoke shop, hash garden, flower, concentrates, live resin, THC drinks, THC seltzers, edibles, artisan glass, hemp, Corpus Christi',
};

// Flatten a post's blocks to plain text for articleBody.
const postText = (post) =>
  post.blocks
    .flatMap((b) => {
      if (b.type === 'faq') return b.items.flatMap((i) => [i.q, i.a]);
      if (b.items) return b.items;
      return b.text ? [b.text] : [];
    })
    .join(' ')
    .replace(/\*\*/g, '');

const postSchema = (post) => {
  const url = `${SITE_URL}/blog/${post.slug}/`;
  const graph = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: post.title,
      description: post.description,
      image: `${SITE_URL}/${post.image}`,
      datePublished: post.published,
      dateModified: post.updated,
      inLanguage: 'en-US',
      wordCount: postText(post).split(/\s+/).length,
      articleBody: postText(post),
      keywords: post.tags.join(', '),
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: { '@type': 'Organization', name: 'PANACEA Hash Garden', url: `${SITE_URL}/about/` },
      publisher: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'The Journal', item: `${SITE_URL}/blog/` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ];

  const faq = post.blocks.find((b) => b.type === 'faq');
  if (faq) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faq.items.map((i) => ({
        '@type': 'Question',
        name: i.q,
        acceptedAnswer: { '@type': 'Answer', text: i.a },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
};

// ---- routes -------------------------------------------------------------
const routes = [
  ...Object.entries(meta).map(([route, m]) => ({ route, ...m, schema: [localBusiness] })),
  ...posts.map((post) => ({
    route: `/blog/${post.slug}`,
    title: `${post.title} | PANACEA Hash Garden`,
    description: post.description,
    schema: [localBusiness, postSchema(post)],
  })),
];

// ---- static server so Chrome can load the built assets -------------------
const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.mp4': 'video/mp4',
  '.txt': 'text/plain', '.xml': 'application/xml',
};

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (BASE !== '/' && p.startsWith(BASE)) p = `/${p.slice(BASE.length)}`;
  let f = join(dist, p);
  if (!existsSync(f) || statSync(f).isDirectory()) f = join(dist, 'index.html');
  res.writeHead(200, { 'Content-Type': TYPES[extname(f)] || 'application/octet-stream' });
  createReadStream(f).pipe(res);
});
await new Promise((r) => server.listen(PORT, r));

const html = readFileSync(join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 1600 });

let failures = 0;

for (const r of routes) {
  const url = SITE_URL + (r.route === '/' ? '/' : `${r.route}/`);

  await page.goto(`http://localhost:${PORT}${BASE}${r.route.replace(/^\//, '')}`, {
    waitUntil: 'networkidle2',
    timeout: 45000,
  });
  // let entry animations settle so nothing is captured mid-transition
  await new Promise((res) => setTimeout(res, 1200));

  const body = await page.evaluate(() => {
    // Framer Motion leaves inline opacity/transform on elements that have not
    // animated in yet. Normalise them so the baked markup is not full of
    // opacity:0 — the live page re-renders client-side regardless.
    document.querySelectorAll('[style]').forEach((el) => {
      const s = el.style;
      if (s.opacity !== '' && parseFloat(s.opacity) < 1) s.opacity = '1';
      if (s.transform && s.transform !== 'none') s.transform = 'none';
      if (s.visibility === 'hidden') s.visibility = 'visible';
    });
    // The site sits under the gate wrapped in `inert` + aria-hidden so it stays
    // out of the tab order for a visitor who has not passed the gate. Neither
    // belongs in the baked HTML: aria-hidden on the entire body is a "this is
    // hidden" signal to a crawler. React re-applies both on mount.
    document.querySelectorAll('[inert],[aria-hidden]').forEach((el) => {
      el.removeAttribute('inert');
      el.removeAttribute('aria-hidden');
    });
    return document.getElementById('root').innerHTML;
  });

  const textLen = await page.evaluate(() => document.body.innerText.trim().length);
  if (textLen < 800) {
    console.error(`  !! ${r.route} rendered only ${textLen} chars of text`);
    failures++;
  }

  let out = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(r.description)}$2`);

  const ld = r.schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('');
  out = out.replace('</head>', `${ld}</head>`);
  out = out.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  if (r.route === '/') {
    writeFileSync(join(dist, 'index.html'), out);
  } else {
    const dir = join(dist, r.route.slice(1));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), out);
  }
  console.log(`prerendered ${r.route.padEnd(48)} ${textLen} chars`);
}

await browser.close();
server.close();

// 404.html must stay an empty SPA shell: it is the GitHub Pages fallback for
// every unknown URL, so baking the homepage body into it would serve homepage
// content under arbitrary paths.
writeFileSync(join(dist, '404.html'), html);
console.log('wrote 404.html fallback (empty shell)');

if (failures) {
  console.error(`\nPrerender failed: ${failures} route(s) came back essentially empty.`);
  process.exit(1);
}
console.log(`\nPrerendered ${routes.length} routes with real body content.`);
