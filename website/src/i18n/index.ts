import type { Locale, SiteCopy } from './types';
import en from './en';
import sk from './sk';

const TRANSLATIONS: Record<Locale, SiteCopy> = {
  en,
  sk,
};

export function getTranslations(locale: Locale): SiteCopy {
  return TRANSLATIONS[locale];
}

export type { Locale, RouteKey, SiteCopy } from './types';
export {
  alternateLocale,
  canonicalForRoute,
  detectLocaleFromPath,
  hreflangLinks,
  localePath,
  routeFromPath,
} from './routes';
