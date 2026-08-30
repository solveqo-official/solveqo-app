export const SITE = {
  name: 'SOLVEQO',
  tagline: 'FROM PROBLEM TO SOLUTION.',
  url: 'https://solveqo.com',
  supportEmail: 'support@solveqo.com',
  brandColor: '#0149DB',
  langStorageKey: 'solveqo-lang',
} as const;

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};
