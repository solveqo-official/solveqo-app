export type Locale = 'sk' | 'en';

export type RouteKey =
  | 'home'
  | 'privacy'
  | 'terms'
  | 'support'
  | 'deleteAccount'
  | 'communityGuidelines';

export type NavLink = {
  route: RouteKey;
  label: string;
};

export type PageCopy = {
  title: string;
  description: string;
  heading: string;
  intro: string;
};

export type HomeCopy = {
  meta: { title: string; description: string };
  eyebrow: string;
  tagline: string;
  lead1: string;
  lead2: string;
  heroCardTitle: string;
  heroCardBody: string;
  heroCardAria: string;
  featuresAria: string;
  feature1Title: string;
  feature1Body: string;
  feature2Title: string;
  feature2Body: string;
  feature3Title: string;
  feature3Body: string;
  ctaTitle: string;
  ctaBodyHtml: string;
  downloadTitle: string;
  downloadBody: string;
  downloadStoreAppStore: string;
  downloadStoreGooglePlay: string;
};

export type SupportCopy = {
  meta: PageCopy;
  contactTitle: string;
  contactBodyHtml: string;
  accountTitle: string;
  accountItems: string[];
  accountNoteHtml: string;
  safetyTitle: string;
  safetyBody1: string;
  safetyBody2Html: string;
  subscriptionTitle: string;
  subscriptionBody1Html: string;
  subscriptionBody2Html: string;
  deletionTitle: string;
  deletionBodyHtml: string;
  deletionLink: string;
  legalTitle: string;
  legalPrivacy: string;
  legalTerms: string;
  legalGuidelines: string;
};

export type DeleteAccountCopy = {
  meta: PageCopy;
  inAppTitle: string;
  inAppIntro: string;
  inAppSteps: string[];
  inAppNoteHtml: string;
  subscriptionTitle: string;
  subscriptionWarningHtml: string;
  subscriptionBody: string;
  subscriptionApple: string;
  subscriptionGoogle: string;
  subscriptionManageHtml: string;
  noAccessTitle: string;
  noAccessBody1Html: string;
  noAccessBody2: string;
  afterTitle: string;
  afterItems: string[];
  relatedTitle: string;
  relatedPrivacy: string;
  relatedTerms: string;
  relatedSupport: string;
};

export type GuidelineSection = {
  title: string;
  bodyHtml: string;
};

export type CommunityGuidelinesCopy = {
  meta: PageCopy;
  sections: GuidelineSection[];
};

export type PrivacyCopy = {
  meta: PageCopy;
};

export type TermsCopy = {
  meta: PageCopy;
  reviewNotice: string;
};

export type SiteCopy = {
  locale: Locale;
  langLabel: string;
  menu: string;
  downloadAppCta: string;
  footerTagline: string;
  footerRights: string;
  nav: NavLink[];
  home: HomeCopy;
  support: SupportCopy;
  deleteAccount: DeleteAccountCopy;
  communityGuidelines: CommunityGuidelinesCopy;
  privacy: PrivacyCopy;
  terms: TermsCopy;
};
