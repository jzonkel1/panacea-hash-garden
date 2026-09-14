import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import meta from '@/seo/meta.json';
import { getPost } from '@/data/blog';
import { SITE } from '@/lib/site';

// Keeps title/description/canonical/og in sync on client-side navigation.
// Crawlers hitting a route directly get the same tags baked in by
// scripts/prerender-meta.mjs, which reads the same two sources.
export function metaForPath(pathname) {
  const key = pathname.replace(/\/+$/, '') || '/';

  const blogMatch = key.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const post = getPost(blogMatch[1]);
    if (post) {
      return {
        title: `${post.title} | ${SITE.name}`,
        description: post.description,
      };
    }
  }

  return meta[key] ?? meta['/'];
}

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const key = pathname.replace(/\/+$/, '') || '/';
    const m = metaForPath(pathname);
    document.title = m.title;

    const setMeta = (selector, value) => {
      const el = document.head.querySelector(selector);
      if (el) el.setAttribute('content', value);
    };
    setMeta('meta[name="description"]', m.description);
    setMeta('meta[property="og:title"]', m.title);
    setMeta('meta[property="og:description"]', m.description);
    setMeta('meta[name="twitter:title"]', m.title);
    setMeta('meta[name="twitter:description"]', m.description);

    const url = SITE.url + (key === '/' ? '/' : `${key}/`);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [pathname]);

  return null;
}
