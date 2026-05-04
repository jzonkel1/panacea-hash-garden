import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    name: 'Jason M.',
    text: 'I only bought a gram of THCa flower but it was excellent. Smelled good, looked good and was sticky. The bud was fresh and has a 10/10 high. Next time I\'m in the area I\'m buying an ounce. I went to 3 or 4 other places and their stuff was not the same quality as this place.',
  },
  {
    name: 'Dina T.',
    text: 'Comedy show… does CC have a secret gem? Yes!!!! Great products. Cool people. And if they put on another event, I want to come back. They had cool vendors too with food and drinks available for the event.',
  },
  {
    name: 'DatTexasBoi',
    text: 'Solid flower. I had low expectations from the outside but was actually a super dope spot.',
  },
  {
    name: 'Angie F.',
    text: 'Soon as we walked in the door, both gentlemen were so welcoming and helpful on recommending what method was best for our needs. Super funny and inviting. Will definitely come again every time coming through this town!',
  },
  {
    name: 'Bray W.',
    text: 'Loved this place and the products. Been recommending my friends go get something/anything from here!',
  },
  {
    name: 'Clarissa R.',
    text: 'Really comfortable and inviting place, employees are friendly and funny! I love it here! Highly recommended!',
  },
  {
    name: 'Cady H.',
    text: 'I\'m so glad I finally checked this place out!! I left knowing more than I did going in. That\'s how you know someone is passionate about what they are selling you!',
  },
  {
    name: 'Anthony W.',
    text: 'Wonderful and friendly environment, and great customer service. Recommend highly.',
  },
  {
    name: 'Scott W.',
    text: 'Sometimes they even host entertaining events like comedy shows. Whenever I leave here, it\'s floating on a cloud.',
  },
  {
    name: 'Thirdcoast Hemp',
    text: 'Best in cannabis products! Find stuff we grow here!',
  },
  {
    name: 'Fernando E.',
    text: 'Best products.',
  },
];

const FEATURED_COUNT = 6;

function StarRating({ hover = false }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 fill-current transition-colors duration-300 ${
            hover ? 'text-[#9AC221]' : 'text-[#9AC221]/70'
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 6) * 0.08, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-6 flex flex-col gap-3 cursor-default transition-all duration-400"
      style={{
        background: 'rgba(20, 22, 18, 0.85)',
        backdropFilter: 'blur(14px)',
        border: hovered ? '1px solid rgba(154, 194, 33, 0.45)' : '1px solid rgba(255,255,255,0.07)',
        boxShadow: hovered
          ? '0 8px 40px rgba(154, 194, 33, 0.12), 0 2px 16px rgba(0,0,0,0.4)'
          : '0 2px 16px rgba(0,0,0,0.3)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Green accent top line */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full transition-all duration-300"
        style={{
          background: hovered
            ? 'linear-gradient(90deg, transparent, rgba(154,194,33,0.8), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(154,194,33,0.25), transparent)',
        }}
      />

      <StarRating hover={hovered} />

      <p className="text-sm text-white/80 leading-relaxed flex-1 font-light">
        "{review.text}"
      </p>

      <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/5">
        <span className="text-sm font-medium text-white/90 tracking-wide">{review.name}</span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-[#9AC221]/60 font-medium">
          Local Customer
        </span>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, FEATURED_COUNT);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.18 }}
      >
        <source src="https://media.base44.com/videos/public/69f7b435c4e1fadd6b3c10d5/04ecf4c6b_9694807-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a0b09]/80" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#9AC221]/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[#9AC221]/4 blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9AC221]/25 bg-[#9AC221]/5 mb-5">
            <MapPin className="w-3 h-3 text-[#9AC221]" />
            <span className="text-[#9AC221] text-[11px] tracking-[0.3em] uppercase font-medium">
              Highly rated by local customers
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wide text-white mb-4 leading-tight">
            Corpus Christi's Hidden Gem<br className="hidden md:block" />
            <span className="text-[#9AC221]"> for Quality Hemp</span>
          </h2>

          <p className="text-white/50 max-w-xl mx-auto text-base font-light leading-relaxed">
            Real words from customers who came in for the products, the people, and the experience.
          </p>
        </motion.div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          <AnimatePresence>
            {visibleReviews.map((review, i) => (
              <ReviewCard key={review.name} review={review} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Toggle */}
        {reviews.length > FEATURED_COUNT && (
          <div className="flex justify-center mb-14">
            <button
              onClick={() => setShowAll(v => !v)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-[#9AC221]/40 transition-all duration-300 text-sm tracking-wide"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Show More Reviews <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-white/45 text-sm tracking-wide mb-6">
            Come see why locals keep coming back.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#9AC221] text-[#0a0b09] font-semibold tracking-wide hover:bg-[#b0d828] transition-all hover:shadow-lg hover:shadow-[#9AC221]/25 text-sm"
          >
            Visit Panacea
          </Link>
        </motion.div>
      </div>
    </section>
  );
}