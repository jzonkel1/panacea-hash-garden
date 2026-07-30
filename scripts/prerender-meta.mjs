// Post-build: write dist/<route>/index.html per route with route-specific
// title/description/canonical/og baked in + JSON-LD, and copy index.html to 404.html
// for SPA fallback on GitHub Pages. No headless browser — body still hydrates client-side.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
// Netlify sets URL to the site's primary address; fall back to the GitHub Pages URL.
const SITE_URL = (process.env.URL || 'https://panaceastx.com').replace(/\/$/, '');

const meta = JSON.parse(readFileSync(join(root, 'src', 'seo', 'meta.json'), 'utf8'));

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  '@id': `${SITE_URL}/#business`,
  name: 'PANACEA Hash Garden',
  description:
    'Premium 21+ smoke shop and botanical apothecary in Corpus Christi, TX. Hemp-derived THC seltzers, house-made edibles, artisan glass, branded merch, and live events including comedy and music nights.',
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
    'smoke shop, hash garden, THC drinks, THC seltzers, edibles, artisan glass, hemp, Corpus Christi',
};

const html = readFileSync(join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

for (const [route, m] of Object.entries(meta)) {
  const url = SITE_URL + (route === '/' ? '/' : `${route}/`);
  let out = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(m.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(m.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(m.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(m.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(m.title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(m.description)}$2`);

  out = out.replace(
    '</head>',
    `<script type="application/ld+json">${JSON.stringify(localBusiness)}</script></head>`
  );

  if (route === '/') {
    writeFileSync(join(dist, 'index.html'), out);
  } else {
    const dir = join(dist, route.slice(1));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), out);
  }
  console.log(`prerendered ${route}`);
}

copyFileSync(join(dist, 'index.html'), join(dist, '404.html'));
console.log('wrote 404.html fallback');
