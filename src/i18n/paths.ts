import type { Lang } from './nav';

/** Build a path for a given locale + slug ('' = home). AR is unprefixed, EN is under /en/. */
export function pathFor(lang: Lang, slug: string): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  if (lang === 'ar') {
    return clean ? `/${clean}/` : '/';
  }
  return clean ? `/en/${clean}/` : '/en/';
}

export function otherLang(lang: Lang): Lang {
  return lang === 'ar' ? 'en' : 'ar';
}
