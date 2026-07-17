// One-time: download all media.base44.com images referenced in src/ into public/b44/
// and rewrite every reference to a local, base-URL-aware path. Removes the last Base44 dependency.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = join(process.cwd());
const outDir = join(root, 'public', 'b44');
mkdirSync(outDir, { recursive: true });

const URL_RE = /https:\/\/media\.base44\.com\/images\/public\/[^"'\s)]+/g;

function walk(dir) {
  let files = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) files = files.concat(walk(p));
    else if (/\.(jsx?|tsx?)$/.test(name)) files.push(p);
  }
  return files;
}

const files = walk(join(root, 'src'));

// Collect unique URLs
const urls = new Set();
for (const f of files) {
  const txt = readFileSync(f, 'utf8');
  const m = txt.match(URL_RE);
  if (m) m.forEach((u) => urls.add(u));
}
console.log(`Found ${urls.size} unique images`);

// filename = hash prefix (before first _ in last segment) + extension
function fileFor(url) {
  const seg = url.split('/').pop();
  const ext = extname(seg) || '.jpg';
  const prefix = seg.split('_')[0].slice(0, 16).replace(/[^a-zA-Z0-9]/g, '');
  return `${prefix}${ext}`;
}

const map = new Map();
for (const url of urls) map.set(url, fileFor(url));

// Guard against prefix collisions
const seen = new Map();
for (const [url, file] of map) {
  if (seen.has(file) && seen.get(file) !== url) {
    const alt = file.replace(/(\.[^.]+)$/, `_${seen.size}$1`);
    map.set(url, alt);
    seen.set(alt, url);
  } else {
    seen.set(file, url);
  }
}

// Download
let ok = 0, fail = 0;
for (const [url, file] of map) {
  const dest = join(outDir, file);
  if (existsSync(dest) && statSync(dest).size > 0) { ok++; continue; }
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', Referer: 'https://media.base44.com/' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(dest, buf);
    ok++;
    console.log(`  ✓ ${file} (${(buf.length / 1024).toFixed(0)}kb)`);
  } catch (e) {
    fail++;
    console.log(`  ✗ ${url.slice(-40)} — ${e.message}`);
  }
}
console.log(`Downloaded ${ok}, failed ${fail}`);

if (fail > 0) { console.error('Aborting rewrite — some downloads failed.'); process.exit(1); }

// Rewrite references
for (const f of files) {
  let txt = readFileSync(f, 'utf8');
  let changed = false;
  for (const [url, file] of map) {
    if (!txt.includes(url)) continue;
    const tl = '`${import.meta.env.BASE_URL}b44/' + file + '`';
    const before = txt;
    txt = txt.split('="' + url + '"').join('={' + tl + '}');
    txt = txt.split("='" + url + "'").join('={' + tl + '}');
    txt = txt.split('"' + url + '"').join(tl);
    txt = txt.split("'" + url + "'").join(tl);
    if (txt !== before) changed = true;
  }
  if (changed) { writeFileSync(f, txt); console.log(`  rewrote ${f.replace(root, '')}`); }
}
console.log('Done.');
