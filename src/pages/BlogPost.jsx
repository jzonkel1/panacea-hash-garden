import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, MapPin, Phone } from 'lucide-react';
import BlockRenderer from '@/components/blog/BlockRenderer';
import { getPost, posts, BLOG_AUTHOR } from '@/data/blog';
import { SITE } from '@/lib/site';

const fmtDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <article className="px-6">
        <div className="max-w-3xl mx-auto">

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#8a8a80] hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            The Journal
          </Link>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5 text-[11px] uppercase tracking-[0.2em] text-[#8a8a80]">
              {post.tags.map((tag) => (
                <span key={tag} className="text-primary/80">{tag}</span>
              ))}
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3 w-3" aria-hidden="true" />
                {post.readMinutes} min read
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-wide leading-[1.15] mb-5">
              {post.title}
            </h1>

            <p className="text-muted-foreground leading-relaxed text-lg mb-6">{post.subtitle}</p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#8a8a80] border-t border-white/8 pt-5">
              <span>
                By <Link to={BLOG_AUTHOR.url} className="text-foreground/80 hover:text-primary transition-colors">{BLOG_AUTHOR.name}</Link>
              </span>
              <span aria-hidden="true">·</span>
              <span>
                Published <time dateTime={post.published}>{fmtDate(post.published)}</time>
              </span>
              {post.updated !== post.published && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    Updated <time dateTime={post.updated}>{fmtDate(post.updated)}</time>
                  </span>
                </>
              )}
            </div>
          </motion.header>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-12 overflow-hidden rounded-2xl"
          >
            <img
              src={`${import.meta.env.BASE_URL}${post.image}`}
              alt={post.imageAlt}
              width="1200"
              height="675"
              className="w-full object-cover opacity-90"
              style={{ height: 'auto' }}
            />
          </motion.div>

          {/* Body */}
          <div className="blog-body">
            <BlockRenderer blocks={post.blocks} />
          </div>

          {/* Visit card */}
          <aside className="mt-16 rounded-2xl border border-primary/20 bg-primary/[0.06] p-7">
            <p className="text-primary text-[11px] tracking-[0.3em] uppercase font-medium mb-3">
              Come see it in person
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-wide mb-4">
              {SITE.name}
            </h2>
            <div className="space-y-2.5 text-muted-foreground mb-6">
              <p className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" aria-hidden="true" />
                <span>
                  {SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.zip}
                  <br />
                  <span className="text-[#8a8a80] text-sm">{SITE.hours} · {SITE.hoursSunday} · 21+</span>
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <a href={SITE.phoneHref} className="hover:text-primary transition-colors">
                  {SITE.phone}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/products"
                className="rounded-full bg-primary px-6 py-3 text-[11px] tracking-[0.25em] uppercase text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                See the products
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/15 px-6 py-3 text-[11px] tracking-[0.25em] uppercase text-foreground/90 hover:border-primary/40 hover:text-primary transition-colors"
              >
                Find us
              </Link>
            </div>
          </aside>

          {/* More reading */}
          {more.length > 0 && (
            <section className="mt-16">
              <h2 className="font-display text-xl font-semibold tracking-wide mb-6">Keep reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {more.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="group rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-all duration-300 hover:border-primary/25 hover:bg-white/[0.04]"
                  >
                    <p className="text-primary/80 text-[11px] tracking-[0.2em] uppercase mb-2">
                      {p.tags[0]}
                    </p>
                    <h3 className="font-display text-lg font-semibold tracking-wide transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </article>
    </div>
  );
}
