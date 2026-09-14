// Blog posts. Each post is structured content (not HTML strings) so the page
// renderer and the JSON-LD generator read from one source.
//
// Content rules for this site — keep them when adding posts:
//   - No potency, THC-percentage, extraction-yield or "strength" claims.
//   - No health, medical, therapeutic or wellness-benefit claims.
//   - No statements about what Texas law does or does not permit.
//   - No invented specifics about cultivation, curing or process.
// Blocks: p | h2 | ul | ol | key | note | faq
// Inline **bold** is supported inside p / ul / ol text.

export const BLOG_AUTHOR = {
  name: 'PANACEA Hash Garden',
  url: '/about',
};

export const posts = [
  {
    slug: 'what-is-a-botanical-apothecary',
    title: 'What Is a Botanical Apothecary?',
    subtitle:
      'The difference between a corner smoke shop and a curated botanical space — and what that looks like in Corpus Christi.',
    description:
      'A botanical apothecary is a curated retail space organized around plant-derived goods, staffed by people who can explain what they carry. Here is what that means in practice and how it differs from a traditional smoke shop.',
    published: '2026-09-14',
    updated: '2026-09-14',
    readMinutes: 5,
    tags: ['Guides', 'Corpus Christi'],
    image: 'b44/c7cf5b37c.jpg',
    imageAlt: 'A cannabis plant in flower',
    blocks: [
      {
        type: 'key',
        text:
          'A botanical apothecary is a retail space organized around plant-derived goods — flower, concentrates, botanical beverages and edibles — curated and explained rather than simply stocked. The word "apothecary" points to the counter: someone is there to answer questions about what you are looking at.',
      },
      { type: 'h2', text: 'What does "apothecary" actually mean here?' },
      {
        type: 'p',
        text:
          'Historically an apothecary was a shop where preparations were made and dispensed by someone who understood them, and where you asked questions before you bought. The word survives because it describes a relationship, not a product category. A botanical apothecary borrows that posture: a smaller, curated selection, organized by category, with staff who can walk you through it.',
      },
      {
        type: 'p',
        text:
          'That is the distinction from a conventional smoke shop. A smoke shop is defined by what is on the shelves. An apothecary is defined by how it is chosen and how it is explained.',
      },
      { type: 'h2', text: 'How is it different from a regular smoke shop?' },
      {
        type: 'ul',
        items: [
          '**Curation over volume.** A narrower range, selected deliberately, instead of every product a distributor offers.',
          '**Categories, not walls.** Flower, concentrates, glass, beverages and edibles are organized so you can compare within a category.',
          '**Explanation at the counter.** You can ask what something is, where it came from and how it differs from the thing next to it.',
          '**A room worth standing in.** The space is designed to be spent time in, not passed through.',
        ],
      },
      { type: 'h2', text: 'What do you find in one?' },
      {
        type: 'p',
        text:
          'The selection at PANACEA Hash Garden is organized into a handful of categories. Flower and concentrates sit at the center — PANACEA grows its own flower and makes its own concentrates and edibles. Around them are artisan glass, hemp-derived THC beverages, and accessories. Branded apparel and original work from Corpus Christi artists round out the room.',
      },
      {
        type: 'note',
        text:
          'Botanicals are available in-store only. Branded merch is the one category that ships nationwide, through the PANACEA online store.',
      },
      { type: 'h2', text: 'Why does the format matter?' },
      {
        type: 'p',
        text:
          'Because most of the questions people have in this category are comparison questions: what is the difference between these two things, and which one suits what I am after. Those questions are hard to answer from a shelf tag and easy to answer across a counter. The apothecary format exists to make that conversation the default rather than the exception.',
      },
      {
        type: 'faq',
        items: [
          {
            q: 'Is a botanical apothecary the same as a dispensary?',
            a: 'No. The terms describe different things. A botanical apothecary is a curated retail space for plant-derived goods. PANACEA Hash Garden is a 21+ retail shop in Corpus Christi, not a dispensary, and sells hemp-derived products to adults 21 and over.',
          },
          {
            q: 'Do I need to know what I am looking for before I go in?',
            a: 'No. The format is built around the opposite assumption. Staff can walk you through the categories and explain how items differ, which is the point of a counter-service shop rather than a self-serve one.',
          },
          {
            q: 'Where is PANACEA Hash Garden located?',
            a: 'PANACEA Hash Garden is at 4914 Everhart Rd, Corpus Christi, TX 78411. The shop is open Monday through Saturday, 10 AM to 10 PM, and closed Sunday. It is 21+ only.',
          },
        ],
      },
    ],
  },

  {
    slug: 'visiting-a-21-plus-smoke-shop-corpus-christi',
    title: 'Visiting a 21+ Smoke Shop in Corpus Christi: What to Know Before You Go',
    subtitle: 'ID rules, hours, what is in the room, and what you can and cannot buy online.',
    description:
      'A practical guide to visiting a 21+ smoke shop in Corpus Christi: what identification to bring, what hours to expect, what the categories are, and which items are in-store only.',
    published: '2026-09-14',
    updated: '2026-09-14',
    readMinutes: 4,
    tags: ['Guides', 'Corpus Christi'],
    image: 'b44/9e3168c89.jpg',
    imageAlt: 'The PANACEA Hash Garden sign and storefront on Everhart Rd in Corpus Christi',
    blocks: [
      {
        type: 'key',
        text:
          'Bring a valid government-issued photo ID — everyone entering must be 21 or older, regardless of what they intend to buy. PANACEA Hash Garden is open Monday through Saturday, 10 AM to 10 PM, and closed Sunday, at 4914 Everhart Rd in Corpus Christi.',
      },
      { type: 'h2', text: 'What ID do I need?' },
      {
        type: 'p',
        text:
          'A valid, unexpired government-issued photo ID. The age requirement is for entry, not just for purchase, so bring it even if you are coming in with someone else or just looking. If your ID is expired or you left it at home, expect to be turned away — this is not a judgment call staff get to make.',
      },
      { type: 'h2', text: 'What are the hours?' },
      {
        type: 'ul',
        items: [
          '**Monday through Saturday:** 10 AM to 10 PM',
          '**Sunday:** Closed',
        ],
      },
      {
        type: 'p',
        text:
          'Parking is in back — the sign out on Everhart says so, but it is easy to miss on the first pass. If you are making a trip across town, calling ahead at (361) 752-4168 is worth the thirty seconds; event nights and holidays can shift things.',
      },
      { type: 'h2', text: 'What is actually in the shop?' },
      {
        type: 'p',
        text:
          'The floor is organized by category rather than by brand, which makes it easier to compare like against like:',
      },
      {
        type: 'ul',
        items: [
          '**Flower and concentrates** — grown and made in-house.',
          '**Artisan glass** — pieces selected as objects, not just equipment.',
          '**Hemp-derived THC beverages** — seltzers and drinks.',
          '**House-made edibles.**',
          '**Accessories and branded merch.**',
          '**Original art** from local Corpus Christi artists.',
        ],
      },
      { type: 'h2', text: 'Can I order online?' },
      {
        type: 'p',
        text:
          'Only merch. Branded apparel — hoodies, caps, jackets, tees and bags — ships nationwide through the PANACEA online store. Botanicals, glass, beverages and edibles are in-store purchases only. There is no online checkout for them and no delivery.',
      },
      { type: 'h2', text: 'Is there anything on besides shopping?' },
      {
        type: 'p',
        text:
          'Often, yes. PANACEA runs backyard comedy nights, live music, and local art and vendor markets. If you would rather visit on a quiet afternoon than a busy event night — or the reverse — check the events page before you come.',
      },
      {
        type: 'faq',
        items: [
          {
            q: 'How old do you have to be to enter PANACEA Hash Garden?',
            a: 'You must be 21 or older to enter, with a valid government-issued photo ID. The age requirement applies to entry, not only to purchases.',
          },
          {
            q: 'What are PANACEA Hash Garden hours?',
            a: 'Monday through Saturday, 10 AM to 10 PM. Closed Sunday. The shop is at 4914 Everhart Rd, Corpus Christi, TX 78411, and the phone number is (361) 752-4168.',
          },
          {
            q: 'Can I buy flower or edibles online for delivery?',
            a: 'No. Botanicals, glass, beverages and edibles are available in-store only. Branded merch is the sole category that can be ordered online, and it ships nationwide.',
          },
          {
            q: 'Do I need an appointment?',
            a: 'No. PANACEA is walk-in during regular hours.',
          },
        ],
      },
    ],
  },

  {
    slug: 'how-to-choose-artisan-glass',
    title: 'How to Choose Artisan Glass: A Beginner’s Guide',
    subtitle:
      'Borosilicate, joint sizes, thickness and care — what actually separates a good piece from a cheap one.',
    description:
      'What to look for when buying artisan glass: borosilicate versus soft glass, joint sizes and fit, wall thickness, hand-worked detail, and how to clean and store a piece so it lasts.',
    published: '2026-09-14',
    updated: '2026-09-14',
    readMinutes: 6,
    tags: ['Guides', 'Glass'],
    image: 'b44/a50809387.JPG',
    imageAlt: 'A hand-worked glass piece from the artisan glass selection at PANACEA Hash Garden',
    blocks: [
      {
        type: 'key',
        text:
          'Four things separate a good piece of glass from a cheap one: the material (borosilicate, not soft glass), the joint size and fit, the wall thickness, and whether the detail is hand-worked or molded. Everything else is preference.',
      },
      { type: 'h2', text: 'What is borosilicate glass?' },
      {
        type: 'p',
        text:
          'Borosilicate is a glass formulation that contains boron trioxide, which gives it a very low coefficient of thermal expansion. In plain terms: it handles sudden temperature changes far better than ordinary soda-lime glass, which is why it is the standard for laboratory glassware and for quality pipes. Soft glass is cheaper and more prone to cracking under thermal stress.',
      },
      {
        type: 'p',
        text: 'If a piece does not say borosilicate, it is reasonable to assume it is not. Ask.',
      },
      { type: 'h2', text: 'What do joint sizes mean?' },
      {
        type: 'p',
        text:
          'Joints are the ground-glass connections between components. They are described by a diameter and an angle — 14mm and 18mm are the common diameters, at either a 45-degree or 90-degree angle. The two numbers have to match your other components, and a joint is either male or female. A 14mm male bowl will not fit an 18mm female joint.',
      },
      {
        type: 'ul',
        items: [
          '**Measure or ask before you buy an accessory** — the joint is the single most common sizing mistake.',
          '**Match the angle, not just the diameter.** A 45-degree joint and a 90-degree joint are not interchangeable.',
          '**Bring the piece in if you are unsure.** Comparing in person takes a minute and removes the guesswork.',
        ],
      },
      { type: 'h2', text: 'Does thickness matter?' },
      {
        type: 'p',
        text:
          'Wall thickness is usually given in millimetres, and it is a durability signal more than a quality one. Thicker walls — 5mm and up — take knocks better and feel more substantial in the hand. Thinner glass is lighter and often lets finer detail show. Neither is strictly better; a thick tube is more forgiving, a thin one is more refined.',
      },
      { type: 'h2', text: 'How do you tell hand-worked from molded?' },
      {
        type: 'p',
        text:
          'Look for the seam. Molded and mass-produced glass usually shows a faint vertical line where the mould halves met, and repeated pieces will be identical. Hand-worked glass has small asymmetries — a joint set slightly by eye, colour that moves differently across each piece, a signature or maker’s mark near the base. Those variations are the point, not a defect.',
      },
      { type: 'h2', text: 'How should you clean and store it?' },
      {
        type: 'ol',
        items: [
          'Empty and rinse with warm — not hot — water. Sudden temperature swings are what crack glass, even borosilicate.',
          'Use a dedicated cleaning solution, or isopropyl alcohol with coarse salt as an agitator.',
          'Plug the openings, agitate gently, then let it sit rather than shaking hard.',
          'Rinse thoroughly with warm water until there is no solution smell left.',
          'Air dry fully before storing.',
        ],
      },
      {
        type: 'p',
        text:
          'Store it standing on a stable surface away from edges, ideally padded. Most glass is not broken in use; it is broken by being knocked off a table.',
      },
      {
        type: 'note',
        text:
          'PANACEA carries artisan glass in-store at 4914 Everhart Rd. Pieces change as they come in, so the selection on the floor is the current selection — it is worth asking what is new.',
      },
      {
        type: 'faq',
        items: [
          {
            q: 'What is the difference between borosilicate and regular glass?',
            a: 'Borosilicate contains boron trioxide, giving it a much lower rate of thermal expansion than ordinary soda-lime glass. It tolerates sudden temperature changes far better, which is why it is used for laboratory glassware and quality pipes.',
          },
          {
            q: 'What joint size do I need?',
            a: 'Match the diameter, the angle and the gender of your existing piece. Common diameters are 14mm and 18mm, at 45 or 90 degrees. A 14mm male accessory will not fit an 18mm female joint, so measure or bring the piece with you.',
          },
          {
            q: 'Is thicker glass always better?',
            a: 'No. Thicker walls are more durable and feel more substantial; thinner glass is lighter and often shows finer detail. It is a trade-off between resilience and refinement, not a quality ranking.',
          },
          {
            q: 'How do I clean artisan glass without damaging it?',
            a: 'Rinse with warm water rather than hot, use a dedicated cleaner or isopropyl alcohol with coarse salt, agitate gently and let it soak instead of shaking hard, then rinse thoroughly and air dry completely before storing.',
          },
        ],
      },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
