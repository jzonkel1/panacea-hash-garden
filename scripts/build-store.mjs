// Builds src/data/store-products.json from the Printful storefront (grouped by category).
// Product images are hotlinked from the store's own public CDN (the same store the cards
// link to) — Printful 403s scripted downloads but serves <img> requests to any origin.
// Re-run to refresh when the store changes.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const CDN = 'https://cdn.printful.me/t/quick-stores/products/w339/';

// Raw scrape: [slug, name, price, imageSegment]
const raw = [
  ['golf-rope-cap-69a0823c59dfc', 'Golf rope cap', 'From $27.94', '15449753-807-69a0823bf323b'],
  ['flip-straw-water-bottle', 'Flip straw water bottle', 'From $28.00', '15449753-848-68a4c48ec35c8'],
  ['columbia-soft-shell-jacket', 'Columbia soft shell jacket', 'From $103.50', '15449753-790-6818e7976a924'],
  ['under-armour-backpack-680a4b0b4d49a', 'Under Armour® Backpack', 'From $80.00', '15449753-847-680a4b0ae2234'],
  ['bubble-free-stickers-68069455e3038', 'Bubble-free stickers', 'From $4.00', '15449753-358-6806945596a0b'],
  ['under-armour-backpack', 'Under Armour® Backpack', 'From $80.00', '15449753-847-67fe81143c714'],
  ['latte-mug', 'Latte mug', 'From $15.00', '15449753-837-67f446d9ebfc6'],
  ['golf-rope-cap-67f041c710224', 'Golf rope cap', 'From $30.00', '15449753-807-67f041c6b155f'],
  ['golf-rope-cap-67f040a9c66c0', 'Golf rope cap', 'From $28.50', '15449753-807-67f040a9787d3'],
  ['unisex-champion-hoodie-67eeb57c6b216', 'Unisex Champion hoodie', 'From $45.00', '15449753-842-67eeb57c11acc'],
  ['unisex-champion-hoodie', 'Unisex Champion hoodie', 'From $45.00', '15449753-842-67eeb3bc8020e'],
  ['adidas-performance-cap', 'adidas performance cap', 'From $40.00', '15449753-762-67e30d2532645'],
  ['travel-mug-with-a-handle-67e3099968620', 'Travel mug with a handle', 'From $22.00', '15449753-663-67e3099915d5c'],
  ['stainless-steel-water-bottle-with-a-straw-lid-67e2f696e7c6a', 'Stainless steel water bottle', 'From $25.00', '15449753-788-67e2f69696936'],
  ['fanny-pack-67dadd9a90e88', 'Fanny pack', 'From $30.00', '15449753-350-67dadd9a4121e'],
  ['fanny-pack', 'Fanny pack', 'From $30.00', '15449753-350-67dadd7e4784f'],
  ['stainless-steel-water-bottle-with-a-straw-lid', 'Stainless steel water bottle', 'From $25.00', '15449753-788-67d9bbeda61ab'],
  ['camouflage-trucker-hat', 'Camouflage trucker hat', 'From $20.00', '15449753-680-67d9935f5a294'],
  ['fisherman-beanie', 'Fisherman beanie', 'From $20.00', '15449753-809-67d992512d9a1'],
  ['stainless-steel-water-bottle-with-a-straw-lid-67d442638d6b8', 'Stainless steel water bottle', 'From $25.00', '15449753-788-67d442634a315'],
  ['trucker-cap-67c9f809ded39', 'Trucker cap', 'From $18.00', '15449753-100-67c9f80980f7c'],
  ['trucker-cap', 'Trucker cap', 'From $18.00', '15449753-100-67c9f6682e4d0'],
  ['golf-rope-cap-67c73baaba1c4', 'Golf rope cap', 'From $28.50', '15449753-807-67c73baa65040'],
  ['under-armour-athletic-t-shirt-67c2062d22840', 'Under Armour® athletic t-shirt', 'From $32.00', '15449753-773-67c2062cbd430'],
  ['under-armour-athletic-t-shirt', 'Under Armour® athletic t-shirt', 'From $32.00', '15449753-773-67c202a21bb43'],
  ['embroidered-beanie', 'Embroidered beanie', 'From $20.00', '15449753-81-67b501b52f286'],
  ['white-glossy-mug', 'White glossy mug', 'From $7.00', '15449753-19-67ae5ffcbd7f0'],
  ['travel-mug-with-a-handle', 'Travel mug with a handle', 'From $22.00', '15449753-663-67ae593f676b0'],
  ['columbia-booney-hat', 'Columbia booney hat', 'From $40.00', '15449753-772-67ae5750a4f14'],
  ['unisex-classic-tee', 'Unisex classic tee', 'From $15.00', '15449753-438-67ae536432a45'],
  ['bubble-free-stickers-67acdf65b65da', 'Bubble-free stickers', 'From $4.00', '15449753-358-67acdf655d19a'],
  ['bubble-free-stickers-panacea-purple', 'Bubble-free stickers — Panacea Purple', 'From $4.00', '15449753-358-67aa781d54dcf'],
  ['bubble-free-stickers', 'Bubble-free stickers', 'From $4.00', '15449753-358-67aa76b82d892'],
  ['bubble-free-stickers-dulce-dosi-candy-12', 'Bubble-free stickers — Dulce Dosi', 'From $4.00', '15449753-358-67aa72ad9da1c'],
  ['unisex-t-shirt-dulce-dosi-candy-12', 'Unisex t-shirt — Dulce Dosi', 'From $30.00', '15449753-71-67aa66e7c8f24'],
  ['unisex-t-shirt', 'Unisex t-shirt', 'From $15.00', '15449753-71-67aa4b30b80e4'],
  ['34-sleeve-raglan-shirt', '3/4 sleeve raglan shirt', 'From $25.00', '15449753-233-67aa44b68dc07'],
  ['under-armour-dad-hat', 'Under Armour® dad hat', 'From $34.50', '15449753-755-67a644d4f1ed4'],
  ['embroidered-champion-packable-jacket-copy-copy', 'Embroidered Champion packable jacket', 'From $50.00', '15449753-399-67a2aac747e96'],
  ['embroidered-champion-packable-jacket-copy', 'Embroidered Champion packable jacket', 'From $50.00', '15449753-399-67a2aa7d42adc'],
  ['embroidered-champion-packable-jacket', 'Embroidered Champion packable jacket', 'From $50.00', '15449753-399-67a2aa4221af9'],
  ['mug-with-color-inside', 'Mug with color inside', 'From $15.00', '15449753-403-67a2800808d39'],
  ['dad-hat', 'Dad hat', 'From $25.00', '15449753-206-67a258301c99f'],
  ['jigsaw-puzzle', 'Jigsaw puzzle', 'From $25.00', '15449753-534-67a1bd363a31e'],
  ['mens-slides', 'Men’s slides', 'From $35.00', '15449753-597-67a1b5d3e4824'],
  ['premium-eco-hoodie', 'Premium eco hoodie', 'From $57.00', '15449753-522-67a19a0755341'],
  ['unisex-oversized-hoodie-67a1918b7f8c2', 'Unisex oversized hoodie', 'From $55.00', '15449753-734-67a1918b36b7d'],
  ['mens-premium-heavyweight-tee', 'Men’s premium heavyweight tee', 'From $28.00', '15449753-508-67a19121b0b6a'],
  ['womens-crop-top', 'Women’s crop top', 'From $25.00', '15449753-636-67a188fdb4888'],
  ['five-panel-cap', 'Five panel cap', 'From $35.00', '15449753-92-67a1821dc7eba'],
  ['golf-rope-cap-67a17cd0f0c91', 'Golf rope cap', 'From $28.50', '15449753-807-67a17cd0a59f1'],
  ['golf-rope-cap', 'Golf rope cap', 'From $28.50', '15449753-807-67a17bcd5d0f5'],
];

// Drop the two junk "copy" duplicates of the Champion jacket (keep the canonical one)
const filtered = raw.filter(([slug]) => slug !== 'embroidered-champion-packable-jacket-copy' && slug !== 'embroidered-champion-packable-jacket-copy-copy');

const STORE = 'https://panaceahg.printful.me/product/';

function categoryOf(name) {
  const n = name.toLowerCase();
  if (/(hoodie|jacket|tee|t-shirt|shirt|crop top|raglan)/.test(n)) return 'Apparel';
  if (/(cap|hat|beanie)/.test(n)) return 'Headwear';
  if (/(mug|bottle)/.test(n)) return 'Drinkware';
  if (/(backpack|fanny)/.test(n)) return 'Bags';
  if (/(slides)/.test(n)) return 'Footwear';
  return 'Accessories';
}

// Order categories intentionally
const CAT_ORDER = ['Apparel', 'Headwear', 'Footwear', 'Bags', 'Drinkware', 'Accessories'];

const products = filtered.map(([slug, name, price, seg]) => ({
  slug,
  url: STORE + slug,
  name,
  price,
  category: categoryOf(name),
  img: `${CDN}${seg}__825`,
}));

// Sort by category order, then keep listing order within category
products.sort((a, b) => CAT_ORDER.indexOf(a.category) - CAT_ORDER.indexOf(b.category));
writeFileSync(join(root, 'src', 'data', 'store-products.json'), JSON.stringify(products, null, 2));
console.log(`Wrote src/data/store-products.json (${products.length} products)`);
