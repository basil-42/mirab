import type { Lang } from './nav';
import { nav, featureItems, legalNav } from './nav';
import { pathFor } from './paths';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

const featureSlugs = new Set(featureItems.ar.map((f) => f.slug));

// Top-level pages that sit directly under Home (not under the Features hub).
// Labels are pulled from the same nav/legalNav strings the header and footer
// already use, so the breadcrumb trail never introduces new wording.
function topLevelLabel(lang: Lang, slug: string): string | undefined {
  const n = nav[lang];
  const map: Record<string, string> = {
    about: n.about,
    pricing: n.pricing,
    comparison: n.comparison,
    migration: n.migrationGuide,
    why: n.why,
    faq: n.faq,
    contact: n.contact,
    privacy: legalNav[lang].privacy,
    terms: legalNav[lang].terms,
  };
  return map[slug];
}

/**
 * Builds the breadcrumb trail for a page, mirroring the site's real
 * navigation hierarchy (Home > Features > <feature> for the six feature
 * sub-pages, Home > <page> for everything else). Returns null for the
 * homepage and any slug that isn't recognized — no breadcrumb is safer
 * than a guessed one.
 */
export function getBreadcrumb(lang: Lang, slug: string, site: string): BreadcrumbItem[] | null {
  if (!slug) return null; // homepage — no breadcrumb needed

  const home: BreadcrumbItem = { name: nav[lang].home, url: new URL(pathFor(lang, ''), site).toString() };
  const featuresHub: BreadcrumbItem = { name: nav[lang].features, url: new URL(pathFor(lang, 'features'), site).toString() };

  if (slug === 'features') {
    return [home, featuresHub];
  }

  if (featureSlugs.has(slug)) {
    const item = featureItems[lang].find((f) => f.slug === slug);
    if (!item) return null;
    return [home, featuresHub, { name: item.label, url: new URL(pathFor(lang, slug), site).toString() }];
  }

  const label = topLevelLabel(lang, slug);
  if (!label) return null;

  return [home, { name: label, url: new URL(pathFor(lang, slug), site).toString() }];
}
