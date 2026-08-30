import type { SiteCopy } from './types';

const copy: SiteCopy = {
  locale: 'en',
  langLabel: 'English',
  menu: 'Menu',
  downloadAppCta: 'Download app',
  footerTagline: 'Local services marketplace connecting customers and professionals.',
  footerRights: 'All rights reserved.',
  nav: [
    { route: 'privacy', label: 'Privacy' },
    { route: 'terms', label: 'Terms' },
    { route: 'support', label: 'Support' },
    { route: 'deleteAccount', label: 'Delete account' },
    { route: 'communityGuidelines', label: 'Community guidelines' },
  ],
  home: {
    meta: {
      title: 'SOLVEQO — FROM PROBLEM TO SOLUTION.',
      description:
        'SOLVEQO connects people who need help with professionals who can solve the job. Post requests, receive offers, chat, and complete work locally.',
    },
    eyebrow: 'Local services marketplace',
    tagline: 'FROM PROBLEM TO SOLUTION.',
    lead1:
      'SOLVEQO connects people who need help with professionals who can solve the job. Customers post local requests, professionals respond with offers, and both sides coordinate through chat until the work is done.',
    lead2:
      'The SOLVEQO mobile app is available on iOS and Android. This website provides support, legal information, and account guidance.',
    heroCardTitle: 'How it works',
    heroCardBody:
      'Customers describe a job and location. Professionals browse nearby opportunities, send offers, and communicate in-app. Reviews and reputation help build trust in the community.',
    heroCardAria: 'About SOLVEQO',
    featuresAria: 'Platform highlights',
    feature1Title: 'Post & discover jobs',
    feature1Body:
      'Customers publish local requests. Professionals find work that matches their skills and area.',
    feature2Title: 'Offers & chat',
    feature2Body:
      'Compare offers, accept the right professional, and coordinate details through in-app messaging.',
    feature3Title: 'Trust & safety tools',
    feature3Body:
      'Reporting, blocking, and community guidelines help keep the marketplace respectful and useful.',
    ctaTitle: 'Need help with your account?',
    ctaBodyHtml:
      'Visit our <a href="/en/support">Support center</a>, read the <a href="/en/community-guidelines">Community guidelines</a>, or email <a href="mailto:support@solveqo.com">support@solveqo.com</a>.',
    downloadTitle: 'Download SOLVEQO',
    downloadBody:
      'The SOLVEQO mobile app will be available for iOS and Android. Store download links will appear here when the app launches.',
    downloadStoreAppStore: 'App Store — coming soon',
    downloadStoreGooglePlay: 'Google Play — coming soon',
  },
  support: {
    meta: {
      title: 'Support — SOLVEQO',
      description:
        'Get help with your SOLVEQO account, safety tools, subscriptions, and account deletion. Contact support@solveqo.com.',
      heading: 'Support',
      intro:
        'We are here to help with account access, marketplace issues, safety tools, and subscriptions. We aim to respond within 2–3 business days.',
    },
    contactTitle: 'Contact',
    contactBodyHtml:
      'Email <a href="mailto:support@solveqo.com">support@solveqo.com</a> with your account email address and a clear description of the issue.',
    accountTitle: 'Account help',
    accountItems: [
      'Email verification and password reset',
      'Profile and professional mode settings',
      'Jobs, offers, chat, reviews, and notifications',
      'Signing out of all devices',
    ],
    accountNoteHtml:
      'Most account settings are available in the app under <strong>Profile → Settings</strong>.',
    safetyTitle: 'Safety, reporting & blocking',
    safetyBody1:
      'If you encounter harassment, scams, spam, or other harmful behavior, use in-app reporting and blocking tools where available. You can also email us with details so we can review the issue.',
    safetyBody2Html:
      'Read our <a href="/en/community-guidelines">Community guidelines</a> for expected behavior on SOLVEQO.',
    subscriptionTitle: 'Subscription help (SOLVEQO Pro)',
    subscriptionBody1Html:
      'SOLVEQO Pro subscriptions are managed through the Apple App Store or Google Play. Use <strong>Manage subscription</strong> in the app settings, or manage billing directly in your Apple or Google account.',
    subscriptionBody2Html:
      'Deleting your SOLVEQO account does not automatically cancel a store-managed subscription. See <a href="/en/delete-account">Delete your account</a> for details.',
    deletionTitle: 'Account deletion',
    deletionBodyHtml:
      'You can delete your account in the app under <strong>Settings → Delete account</strong>, or follow the steps on our dedicated page if you need guidance or cannot access the app.',
    deletionLink: 'Delete your account',
    legalTitle: 'Legal & policies',
    legalPrivacy: 'Privacy Policy',
    legalTerms: 'Terms of Service',
    legalGuidelines: 'Community guidelines',
  },
  deleteAccount: {
    meta: {
      title: 'Delete your account — SOLVEQO',
      description:
        'How to delete your SOLVEQO account in the app or by contacting support@solveqo.com. Store subscriptions must be cancelled separately in Apple or Google settings.',
      heading: 'Delete your SOLVEQO account',
      intro:
        'You can permanently delete your SOLVEQO account and associated account data. Read this page carefully before proceeding, especially if you have an active SOLVEQO Pro subscription.',
    },
    inAppTitle: 'Delete in the SOLVEQO app',
    inAppIntro: 'The fastest way to delete your account is inside the mobile app:',
    inAppSteps: [
      'Open SOLVEQO and sign in.',
      'Go to Profile → Settings.',
      'Tap Delete account and follow the confirmation steps.',
    ],
    inAppNoteHtml:
      'Account deletion is permanent. It removes your SOLVEQO account and associated account data as described in our <a href="/en/privacy">Privacy Policy</a>.',
    subscriptionTitle: 'Important: App Store & Google Play subscriptions',
    subscriptionWarningHtml:
      '<strong>Deleting your SOLVEQO account does not automatically cancel an active SOLVEQO Pro subscription managed by Apple App Store or Google Play.</strong>',
    subscriptionBody:
      'SOLVEQO cannot directly cancel a subscription billed by Apple or Google on your behalf. If you have SOLVEQO Pro, you must manage or cancel the subscription separately through your Apple or Google account settings to avoid future charges.',
    subscriptionApple: 'Apple: Settings → Apple ID → Subscriptions → SOLVEQO Pro',
    subscriptionGoogle:
      'Google Play: Google Play Store → Payments & subscriptions → Subscriptions → SOLVEQO Pro',
    subscriptionManageHtml:
      'You can also use <strong>Manage subscription</strong> in the SOLVEQO app (Settings) before deleting your account if you still have access.',
    noAccessTitle: 'Cannot access the app?',
    noAccessBody1Html:
      'If you cannot sign in or no longer have the app installed, contact us at <a href="mailto:support@solveqo.com">support@solveqo.com</a>.',
    noAccessBody2:
      'Please email us from the address associated with your SOLVEQO account so we can verify your request. We may ask for additional information to protect your account.',
    afterTitle: 'What happens after deletion',
    afterItems: [
      'Your SOLVEQO login is removed and you will be signed out.',
      'Profile, jobs, messages, and other account data linked to your user are deleted according to our Privacy Policy.',
      'Uploaded files associated with your account (such as profile, portfolio, and job photos) are removed as part of the deletion process.',
      'Any active App Store or Google Play subscription may continue until you cancel it with Apple or Google.',
    ],
    relatedTitle: 'Related information',
    relatedPrivacy: 'Privacy Policy',
    relatedTerms: 'Terms of Service',
    relatedSupport: 'Support center',
  },
  communityGuidelines: {
    meta: {
      title: 'Community Guidelines — SOLVEQO',
      description:
        'Community guidelines for respectful, safe use of SOLVEQO. Learn about reporting, blocking, and enforcement on our marketplace.',
      heading: 'Community Guidelines',
      intro:
        'Expected conduct on the SOLVEQO marketplace, including safety, reporting, blocking, and enforcement.',
    },
  },
  privacy: {
    meta: {
      title: 'Privacy Policy — SOLVEQO',
      description:
        'Learn how SOLVEQO handles personal data in the mobile app and on solveqo.com. Contact support@solveqo.com with privacy questions.',
      heading: 'Privacy Policy',
      intro:
        'How SOLVEQO collects, uses, and protects personal data when you use our mobile app and related services.',
    },
  },
  terms: {
    meta: {
      title: 'Terms of Service — SOLVEQO',
      description:
        'Terms governing use of the SOLVEQO mobile app and related services. Contact support@solveqo.com with questions.',
      heading: 'Terms of Service',
      intro: 'Rules and expectations for using the SOLVEQO marketplace and related services.',
    },
  },
};

export default copy;
