# Aveliq — Task Checklist (MVP)

Check off tasks as they are completed. Tasks are ordered by dependency.

---

## Phase 0 — Documentation

- [x] Create PRODUCT.md
- [x] Create ROADMAP.md
- [x] Create DESIGN.md
- [x] Create TASKS.md
- [ ] Founder review and approval of all documents

---

## Phase 1 — Project Setup

- [ ] Initialize Expo project with TypeScript template
- [ ] Install Expo Router
- [ ] Create folder structure:
  - `app/` — Expo Router screens
  - `src/components/ui/` — Button, Card, Input, Screen, Avatar, Badge
  - `src/theme/` — colors, typography, spacing, index
  - `src/data/` — mock jobs, offers, professionals, messages, reviews
  - `src/hooks/` — shared hooks (if needed)
  - `src/stores/` — Zustand stores (if needed)
- [ ] Implement theme tokens (`colors.ts`, `typography.ts`, `spacing.ts`)
- [ ] Build UI primitives:
  - [ ] `Screen` — safe area wrapper with header and bottom action slot
  - [ ] `Button` — primary, secondary, text variants
  - [ ] `Card` — standard and list-item variants
  - [ ] `Input` — text, multiline, with label and error
  - [ ] `Avatar` — image with initials fallback
  - [ ] `Badge` — status pill
- [ ] Create mock data files
- [ ] Verify app launches on simulator/emulator

---

## Phase 2 — Role Selection Screen

- [ ] Create `app/index.tsx` — role selection screen
- [ ] "What would you like to do?" heading
- [ ] Option 1 card: "I need help" + "Get help" button
- [ ] Option 2 card: "I'm a professional" + "Find jobs" button
- [ ] Store selected role (Zustand or context)
- [ ] Navigate to customer flow on "Get help"
- [ ] Navigate to professional flow on "Find jobs"

---

## Phase 3 — Customer: Describe Problem Screen

- [ ] Create `app/(customer)/describe-problem.tsx`
- [ ] Form fields: title, category (picker), description (multiline)
- [ ] Validation with React Hook Form + Zod
- [ ] "Continue" button (disabled until valid)
- [ ] Navigate to add photos screen

---

## Phase 4 — Customer: Add Photos Screen

- [ ] Create `app/(customer)/add-photos.tsx`
- [ ] Mock photo picker (placeholder thumbnails)
- [ ] Show up to 3 photo slots
- [ ] "Continue" and "Skip" buttons
- [ ] Navigate to add location screen

---

## Phase 5 — Customer: Add Location Screen

- [ ] Create `app/(customer)/add-location.tsx`
- [ ] Mock address text input
- [ ] Map placeholder component
- [ ] "Continue" button
- [ ] Navigate to publish screen

---

## Phase 6 — Customer: Publish Request Screen

- [ ] Create `app/(customer)/publish-request.tsx`
- [ ] Summary of title, description, photos, location
- [ ] "Publish request" button
- [ ] Success state / confirmation
- [ ] Navigate to view offers screen

---

## Phase 7 — Customer: View Offers Screen

- [ ] Create `app/(customer)/offers.tsx`
- [ ] List offers from mock data (pro name, price, message, rating)
- [ ] Tap offer → professional profile screen
- [ ] "Accept" action on profile screen
- [ ] Navigate to chat after acceptance

---

## Phase 8 — Customer: Professional Profile Screen

- [ ] Create `app/(customer)/pro-profile/[id].tsx`
- [ ] Avatar, name, rating, review count
- [ ] Services list
- [ ] Reviews section
- [ ] "Accept offer" button

---

## Phase 9 — Customer: Chat Screen

- [ ] Create `app/(customer)/chat/[id].tsx`
- [ ] Mock message thread (bubbles, timestamps)
- [ ] Text input + send button (mock send)
- [ ] "Mark as complete" action
- [ ] Navigate to review screen

---

## Phase 10 — Customer: Complete & Review Screen

- [ ] Create `app/(customer)/review.tsx`
- [ ] Star rating selector (1–5)
- [ ] Optional comment input
- [ ] "Submit review" button
- [ ] Thank-you / success state

---

## Phase 11 — Professional: Nearby Jobs Screen

- [ ] Create `app/(pro)/nearby-jobs.tsx`
- [ ] Map placeholder at top
- [ ] Scrollable job list from mock data
- [ ] Job list item: title, category, distance, thumbnail
- [ ] Tap job → job details screen

---

## Phase 12 — Professional: Job Details Screen

- [ ] Create `app/(pro)/job/[id].tsx`
- [ ] Full description, photos, location, customer info
- [ ] "Send offer" button
- [ ] Navigate to send offer screen

---

## Phase 13 — Professional: Send Offer Screen

- [ ] Create `app/(pro)/send-offer/[id].tsx`
- [ ] Form fields: price, estimated duration, message
- [ ] Validation with React Hook Form + Zod
- [ ] "Submit offer" button
- [ ] Success state
- [ ] Navigate to my offers screen

---

## Phase 14 — Professional: My Offers Screen

- [ ] Create `app/(pro)/my-offers.tsx`
- [ ] List submitted offers with status badges (pending, accepted, declined)
- [ ] Tap accepted offer → chat screen

---

## Phase 15 — Professional: Chat Screen

- [ ] Create `app/(pro)/chat/[id].tsx`
- [ ] Mock message thread (same component as customer chat)
- [ ] "Mark as completed" action

---

## Phase 16 — Professional: Profile Screen

- [ ] Create `app/(pro)/profile.tsx`
- [ ] Avatar, name, bio, services
- [ ] Completed jobs list
- [ ] Reviews section
- [ ] "Switch role" link back to role selection

---

## Phase 17 — Polish

- [ ] Consistent spacing and typography across all screens
- [ ] Empty states for lists (no offers, no jobs)
- [ ] Back navigation on all screens
- [ ] Role-switch shortcut accessible from both flows
- [ ] Test full customer flow end-to-end
- [ ] Test full professional flow end-to-end
- [ ] Test on both iOS and Android

---

## Phase 18 — Supabase Integration (Post-MVP)

- [ ] Create Supabase project
- [ ] Define database schema (users, jobs, offers, messages, reviews)
- [ ] Implement auth (sign up, sign in, session)
- [ ] Replace mock data with Supabase queries
- [ ] Image upload to Supabase Storage
- [ ] Real-time chat via Supabase Realtime
- [ ] Row Level Security policies

---

## Phase 19 — Launch Prep (Post-MVP)

- [ ] Push notifications
- [ ] Error tracking (Sentry)
- [ ] App Store / Play Store assets
- [ ] Privacy policy and terms
- [ ] Beta test with real users
