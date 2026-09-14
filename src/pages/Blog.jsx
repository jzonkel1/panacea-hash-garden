import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Eyebrow from '@/components/Eyebrow';
import { posts } from '@/data/blog';

const fmtDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function Blog() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center lg:text-left"
          >
            <Eyebrow className="mb-3">The Journal</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-wide mb-5">
              Notes from the <span className="text-primary">Garden</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto lg:mx-0">
              Guides to the shop, the glass and the plants — written for people who would
              rather understand what they are looking at than guess.
            </p>
          </motion.div>

          {/* Posts */}
          <div className="space-y-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 * i }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-[260px_1fr] gap-7 rounded-2xl border border-white/8 bg-white/[0.02] p-5 md:p-6 transition-all duration-300 hover:border-primary/25 hover:bg-white/[0.04]"
                >
                  <div className="overflow-hidden rounded-xl aspect-[4/3] md:aspect-[4/3]">
                    <img
                      src={`${import.meta.env.BASE_URL}${post.image}`}
                      alt={post.imageAlt}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      width="520"
                      height="390"
                      className="h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                      style={{ height: 'auto' }}
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8a8a80]">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-primary/80">{tag}</span>
                      ))}
                      <span aria-hidden="true">·</span>
                      <time dateTime={post.published}>{fmtDate(post.published)}</time>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {post.readMinutes} min
                      </span>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-3 transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-4">{post.subtitle}</p>

                    <span className="inline-flex items-center gap-2 text-primary text-[11px] tracking-[0.25em] uppercase">
                      Read
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
