# SOLVEQO Privacy Policy

**Last updated:** 23 August 2026  
**Effective for:** SOLVEQO mobile app (iOS and Android) and related web properties at solveqo.com

---

## 1. Who we are

SOLVEQO is operated by:

- **Legal entity:** `[LEGAL_ENTITY_NAME]`
- **Registered address:** `[REGISTERED_ADDRESS]`
- **VAT / company ID:** `[VAT_OR_COMPANY_ID]`
- **Contact:** [support@solveqo.com](mailto:support@solveqo.com)

This policy explains how we collect, use, store, and share personal data when you use SOLVEQO.

---

## 2. What SOLVEQO does

SOLVEQO is a local services marketplace. Customers can post job requests; professionals can browse requests, send offers, chat, complete work, and receive reviews. **SOLVEQO does not process in-app payments** — any price agreed between users is arranged directly between them outside the app.

---

## 3. Data we collect

### 3.1 Account and profile data

When you register or edit your profile, we may collect:

- Email address and password (stored securely via Supabase Auth)
- Name, username, bio, phone number
- Country and city
- Profile photo and portfolio photos
- Service categories (if you enable professional mode)
- Languages and experience text you choose to add
- Professional age confirmation (boolean and timestamp — **we do not store your date of birth**)

### 3.2 Job and marketplace data

- Job titles, descriptions, categories, location (country, city, map coordinates)
- Job photos you upload
- Offers (price, message, status)
- Chat messages and message read status
- Job completion and review data (ratings, comments)
- Reputation / ranking points derived from completed activity

### 3.3 Device and permission data

With your consent via OS permissions:

- **Location (when in use):** to show nearby jobs and center the map
- **Photos / camera library:** to choose profile, portfolio, and job photos
- **Notifications:** to deliver push alerts for chat, offers, jobs, and reviews

You can review or change these permissions in **Settings → Privacy** inside the app, which opens your device system settings.

### 3.4 Push notification data

- Expo push token, device platform, and active/inactive status
- In-app notification records (type, title, body, metadata)

### 3.5 Notification preferences

Stored in your account:

- Chat, job offers, reviews, marketing, and email notification toggles

### 3.6 Technical and local data

- Session tokens (Supabase Auth, stored on device)
- App appearance and language preferences (stored locally on device)
- Registration progress (stored locally until account creation)

We do **not** use Firebase Analytics, Sentry, or Facebook login in the current app.

---

## 4. How we use data

We use your data to:

- Create and manage your account
- Show relevant jobs and profiles on the map and in lists
- Enable offers, chat, completion flows, and reviews
- Calculate reputation and leaderboard rankings
- Send transactional emails (verification, password reset, email change) via **Supabase Auth SMTP**
- Send push notifications you have not disabled
- Operate, secure, and improve the service
- Respond to support requests

We do **not** sell your personal data.

---

## 5. Legal bases (EEA / UK users)

Where applicable, we rely on:

- **Contract** — providing the marketplace service you signed up for
- **Consent** — location, photos, notifications, and optional marketing notifications
- **Legitimate interests** — security, fraud prevention, and service improvement

---

## 6. Where data is stored

Primary backend infrastructure:

| Provider | Purpose | Region |
|----------|---------|--------|
| **Supabase** | Database, authentication, file storage, edge functions | `[SUPABASE_REGION]` |
| **Expo / EAS** | App builds, push notification relay | United States (Expo) |
| **Apple (APNs)** | iOS push delivery | Per Apple infrastructure |
| **Google (FCM)** | Android push delivery | Per Google infrastructure |
| **Resend** | Transactional email (SMTP configured in Supabase Auth dashboard) | Per Resend / Supabase config |

Uploaded files (avatars, portfolio, job photos) are stored in Supabase Storage buckets: `avatars`, `portfolio`, and `job-photos`.

Maps and location features use device location APIs and map components (Apple Maps / Google Maps via react-native-maps on native platforms).

---

## 7. Email

Account-related emails (signup confirmation, password reset, email change) are sent through **Supabase Auth** using SMTP configured with **Resend**, from **no-reply@solveqo.com**. These emails are transactional and tied to account security.

---

## 8. Sharing data

We share data only as needed to operate the service:

- **Other SOLVEQO users** — public profile fields, job listings, offers, chat between matched parties, and reviews
- **Infrastructure providers** listed above, under data processing terms

We do not share data with payment processors (in-app payments are not implemented).

---

## 9. Retention

- Account data is kept while your account is active.
- When you delete your account, we delete your auth user and associated database records (cascade). Our delete-account process also removes your files from Supabase Storage (`avatars`, `portfolio`, `job-photos`) where paths belong to your user ID.
- Local app preferences are cleared when you sign out or delete your account from the device.

---

## 10. Your rights

Depending on your location, you may have the right to access, correct, delete, restrict, or export your data, and to withdraw consent for optional processing.

To exercise these rights, contact [support@solveqo.com](mailto:support@solveqo.com). You can also delete your account in **Settings → Delete account**.

---

## 11. Age

- Customers may use SOLVEQO under 18 with parental/guardian permission where required by local law.
- **Professionals must be 18 or older.** Enabling “I provide services” requires confirming you are at least 18. We store confirmation status, not your birth date.

---

## 12. Security

- Row Level Security (RLS) on Supabase tables limits data access to authorized users.
- Service role keys and SMTP credentials are server-side only — not embedded in the mobile app.
- Passwords are handled by Supabase Auth (hashed; not stored in plain text by SOLVEQO).

---

## 13. International transfers

Data may be processed in `[SUPABASE_REGION]` and other regions where our subprocessors operate. Where required, we use appropriate safeguards for cross-border transfers.

---

## 14. Changes

We may update this policy. Material changes will be posted at `https://solveqo.com/privacy` with an updated date.

---

## 15. Contact & supervisory authority

**Privacy contact:** [support@solveqo.com](mailto:support@solveqo.com)  
**Supervisory authority (if applicable):** `[SUPERVISORY_AUTHORITY]`
