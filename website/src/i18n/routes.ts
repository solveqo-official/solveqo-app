import type { Locale, RouteKey } from './types';

export const LOCALES: Locale[] = ['sk', 'en'];
export const DEFAULT_LOCALE: Locale = 'sk';

const ROUTE_PATHS: Record<RouteKey, { sk: string; en: string }> = {
  home: { sk: '/', en: '/en/' },
  privacy: { sk: '/privacy', en: '/en/privacy' },
  terms: { sk: '/terms', en: '/en/terms' },
  support: { sk: '/support', en: '/en/support' },
  deleteAccount: { sk: '/delete-account', en: '/en/delete-account' },
  communityGuidelines: { sk: '/community-guidelines', en: '/en/community-guidelines' },
};

export function localePath(locale: Locale, route: RouteKey): string {
  return ROUTE_PATHS[route][locale];
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'sk' ? 'en' : 'sk';
}

export function routeFromPath(pathname: string): RouteKey {
  const normalized = pathname.replace(/\/$/, '') || '/';

  if (normalized === '/' || normalized === '/en') {
    return 'home';
  }

  const slug = normalized.replace(/^\/en\/?/, '').replace(/^\//, '');

  switch (slug) {
    case 'privacy':
      return 'privacy';
    case 'terms':
      return 'terms';
    case 'support':
      return 'support';
    case 'delete-account':
      return 'deleteAccount';
    case 'community-guidelines':
      return 'communityGuidelines';
    default:
      return 'home';
  }
}

export function detectLocaleFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'sk';
}

export function canonicalForRoute(siteUrl: string, locale: Locale, route: RouteKey): string {
  const path = ROUTE_PATHS[route][locale];
  if (path === '/') {
    return siteUrl;
  }
  return `${siteUrl}${path.replace(/\/$/, '')}/`;
}

export function hreflangLinks(siteUrl: string, route: RouteKey) {
  return {
    sk: canonicalForRoute(siteUrl, 'sk', route),
    en: canonicalForRoute(siteUrl, 'en', route),
    xDefault: canonicalForRoute(siteUrl, 'sk', route),
  };
}
