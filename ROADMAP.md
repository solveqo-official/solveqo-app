# Aveliq — Development Roadmap (MVP)

Small, shippable milestones for a solo founder. Each milestone produces something demoable.

---

## Milestone 0 — Documentation & Planning

**Goal:** Align on product, design, and tasks before writing code.

- [x] PRODUCT.md — product definition and user flows
- [x] ROADMAP.md — this file
- [x] DESIGN.md — visual direction and component specs
- [x] TASKS.md — actionable checklist

**Deliverable:** Approved documentation. No code yet.

---

## Milestone 1 — Project Setup

**Goal:** Runnable Expo app with navigation skeleton and theme.

- Initialize Expo project (TypeScript, Expo Router)
- Configure folder structure (`app/`, `src/components/`, `src/theme/`, `src/data/`)
- Implement theme system (colors, typography, spacing)
- Create reusable UI primitives (Button, Card, Input, Screen wrapper)
- Set up mock data modules
- Verify app launches on iOS simulator and/or Android emulator

**Deliverable:** Blank app with theme and components, ready for screens.

---

## Milestone 2 — Role Selection

**Goal:** First screen — user picks customer or professional mode.

- Build role selection screen ("What would you like to do?")
- Two option cards with labels and action buttons
- Navigate to customer home or professional home on selection
- Store selected role in local state (Zustand or React context)

**Deliverable:** App opens to role selection; tapping a button navigates to the correct flow.

---

## Milestone 3 — Customer: Create Request

**Goal:** Customer can describe a problem and publish a mock request.

- Describe problem screen (title, category picker, description) with form validation
- Add photos screen (mock image picker, preview thumbnails)
- Add location screen (mock address input or map placeholder)
- Publish request screen (summary + confirm)
- Success state after publish

**Deliverable:** Customer flow from role selection through published request.

---

## Milestone 4 — Customer: Offers & Acceptance

**Goal:** Customer sees offers and accepts one.

- View received offers screen (list from mock data)
- Professional profile screen (avatar, rating, reviews, services)
- Accept offer confirmation
- Navigate to chat after acceptance

**Deliverable:** Customer can browse offers, inspect a pro, and accept.

---

## Milestone 5 — Customer: Chat, Complete & Review

**Goal:** Customer finishes the job lifecycle.

- Chat screen (mock message thread, text input)
- Complete job confirmation
- Leave review screen (star rating + comment)
- Thank-you / success state

**Deliverable:** Full customer flow end-to-end with mock data.

---

## Milestone 6 — Professional: Browse Jobs

**Goal:** Professional sees nearby jobs on a map and list.

- Nearby jobs screen with map placeholder and job list
- Job list item component (title, category, distance, photo)
- Tap job → job details screen (description, photos, location, customer info)

**Deliverable:** Professional can browse and inspect job requests.

---

## Milestone 7 — Professional: Send Offer & Track

**Goal:** Professional submits and tracks offers.

- Send offer screen (price, duration, message) with form validation
- My offers screen (list with status: pending, accepted, declined)
- Navigate to chat when an offer is accepted

**Deliverable:** Professional can send an offer and see its status.

---

## Milestone 8 — Professional: Complete & Profile

**Goal:** Professional closes out jobs and views their profile.

- Mark job completed confirmation
- Professional profile screen (bio, services, completed jobs, reviews)
- Completed jobs list

**Deliverable:** Full professional flow end-to-end with mock data.

---

## Milestone 9 — Polish & Consistency Pass

**Goal:** App feels premium and cohesive.

- Consistent spacing, typography, and colors across all screens
- Loading and empty states for lists
- Back navigation and role-switch shortcut
- Basic error handling on forms
- Test both flows on iOS and Android

**Deliverable:** Demo-ready prototype.

---

## Milestone 10 — Supabase Integration (Post-MVP)

**Goal:** Replace mock data with real backend.

- Supabase project setup (auth, database, storage, real-time)
- Auth flow (sign up, sign in, session persistence)
- Database schema (users, jobs, offers, messages, reviews)
- Image upload to Supabase Storage
- Real-time chat via Supabase Realtime
- Replace mock data imports with Supabase queries

**Deliverable:** Working app backed by Supabase.

---

## Milestone 11 — Launch Prep (Post-MVP)

**Goal:** Prepare for real users.

- Push notifications (Expo Notifications)
- Error tracking (Sentry)
- App Store / Play Store assets and submission
- Privacy policy and terms of service
- Beta testing with 5–10 users

**Deliverable:** App submitted to stores or distributed via TestFlight / internal testing.

---

## Timeline Estimate (Solo Founder)

| Milestone | Estimated effort |
|-----------|-----------------|
| 0 — Documentation | 1 day |
| 1 — Project setup | 1–2 days |
| 2 — Role selection | 0.5 day |
| 3 — Customer: create request | 2–3 days |
| 4 — Customer: offers | 1–2 days |
| 5 — Customer: chat & review | 1–2 days |
| 6 — Professional: browse jobs | 2 days |
| 7 — Professional: send offer | 1–2 days |
| 8 — Professional: complete & profile | 1–2 days |
| 9 — Polish | 2–3 days |
| **MVP prototype total** | **~2–3 weeks** |
| 10 — Supabase | 1–2 weeks |
| 11 — Launch prep | 1 week |
