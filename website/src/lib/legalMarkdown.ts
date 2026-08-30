import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '../../..');

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

export function loadLegalMarkdown(relativePath: string): string {
  const absolutePath = join(repoRoot, relativePath);
  const raw = readFileSync(absolutePath, 'utf8');
  return sanitizeLegalMarkdown(raw);
}

export function renderLegalMarkdown(markdown: string): string {
  return marked.parse(markdown, { async: false }) as string;
}
