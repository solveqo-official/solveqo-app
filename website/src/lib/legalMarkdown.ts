import { marked } from 'marked';
import privacyPolicy from '../data/legal/privacy-policy.md?raw';
import termsOfService from '../data/legal/terms-of-service.md?raw';

const LEGAL_SOURCES = {
  'privacy-policy.md': privacyPolicy,
  'terms-of-service.md': termsOfService,
} as const;

export type LegalMarkdownFile = keyof typeof LEGAL_SOURCES;

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

export function loadLegalMarkdown(filename: LegalMarkdownFile): string {
  const raw = LEGAL_SOURCES[filename];
  return sanitizeLegalMarkdown(raw);
}

export function renderLegalMarkdown(markdown: string): string {
  return marked.parse(markdown, { async: false }) as string;
}
