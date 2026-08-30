export const SITE = {
  name: 'SOLVEQO',
  tagline: 'FROM PROBLEM TO SOLUTION.',
  url: 'https://solveqo.com',
  supportEmail: 'support@solveqo.com',
  brandColor: '#0149DB',
} as const;

export const NAV_LINKS = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/support', label: 'Support' },
  { href: '/delete-account', label: 'Delete account' },
  { href: '/community-guidelines', label: 'Community guidelines' },
] as const;

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function canonicalUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') {
    return SITE.url;
  }
  return `${SITE.url}${normalized.replace(/\/$/, '')}/`;
}
