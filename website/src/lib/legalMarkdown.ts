import { marked } from 'marked';
import type { Locale } from '../i18n/types';
import communityGuidelinesEn from '../data/legal/community-guidelines.md?raw';
import communityGuidelinesSk from '../data/legal/community-guidelines.sk.md?raw';
import privacyPolicyEn from '../data/legal/privacy-policy.md?raw';
import privacyPolicySk from '../data/legal/privacy-policy.sk.md?raw';
import termsOfServiceEn from '../data/legal/terms-of-service.md?raw';
import termsOfServiceSk from '../data/legal/terms-of-service.sk.md?raw';

export type LegalDocument =
  | 'privacy-policy.md'
  | 'terms-of-service.md'
  | 'community-guidelines.md';

const LEGAL_SOURCES: Record<Locale, Record<LegalDocument, string>> = {
  en: {
    'privacy-policy.md': privacyPolicyEn,
    'terms-of-service.md': termsOfServiceEn,
    'community-guidelines.md': communityGuidelinesEn,
  },
  sk: {
    'privacy-policy.md': privacyPolicySk,
    'terms-of-service.md': termsOfServiceSk,
    'community-guidelines.md': communityGuidelinesSk,
  },
};

/** Remove lines containing unresolved legal placeholders before public render. */
export function sanitizeLegalMarkdown(raw: string): string {
  const withoutPlaceholders = raw
    .split('\n')
    .filter((line) => !/\[[A-Z_]+\]/.test(line))
    .join('\n')
    .replace(/\*\*Operator:\*\*\s*,?\s*\n/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return withoutPlaceholders;
}

export function loadLegalMarkdown(filename: LegalDocument, locale: Locale): string {
  const raw = LEGAL_SOURCES[locale][filename];
  return sanitizeLegalMarkdown(raw);
}

export function renderLegalMarkdown(markdown: string): string {
  return marked.parse(markdown, { async: false }) as string;
}
