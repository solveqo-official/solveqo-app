# Aveliq — Product Definition (MVP)

## Vision

Aveliq is a premium mobile marketplace that connects people who need help with trusted local professionals. The MVP validates the core loop: a customer posts a job, professionals respond with offers, the customer accepts one, and both parties complete the job through chat.

## Target Users

| Persona | Description |
|---------|-------------|
| **Customer** | Someone who needs a task done locally (home repair, cleaning, tutoring, etc.) |
| **Professional** | A skilled local worker looking for nearby job opportunities |

## MVP Principles

- **One app, two modes** — role switching at launch; no separate apps
- **Mock data first** — all screens navigable without backend
- **Supabase later** — auth, database, storage, and real-time chat wired in a future milestone
- **Solo-founder friendly** — minimal stack, no premature infrastructure

## Tech Stack (MVP)

| Layer | Choice |
|-------|--------|
| Framework | React Native + Expo |
| Language | TypeScript |
| Navigation | Expo Router |
| Backend (future) | Supabase (auth, PostgreSQL, storage, real-time) |
| Local state | Zustand (only when necessary) |
| Forms | React Hook Form + Zod |
| Styling | React Native StyleSheet + reusable theme tokens |

## Entry Point — Role Selection

The first screen asks:

> **What would you like to do?**

| Option | Label | Button |
|--------|-------|--------|
| 1 | I need help | **Get help** |
| 2 | I'm a professional | **Find jobs** |

The selected role determines which flow the user enters. Role can be switched by returning to this screen.

---

## Customer Flow (MVP)

```
Role selection
  → Describe a problem
  → Add photos
  → Add location
  → Publish request
  → View received offers
  → View professional profile
  → Accept an offer
  → Chat
  → Complete job
  → Leave review
```

### Step Details

| Step | Screen | Purpose |
|------|--------|---------|
| 1 | Role selection | Choose "I need help" |
| 2 | Describe problem | Title, category, description of the task |
| 3 | Add photos | Attach up to 3 photos of the problem (mock picker) |
| 4 | Add location | Set job location (mock map or address input) |
| 5 | Publish request | Confirm and submit; show success state |
| 6 | View offers | List of offers from professionals (mock data) |
| 7 | Pro profile | View professional details before accepting |
| 8 | Accept offer | Confirm selection; move to active job |
| 9 | Chat | Message the accepted professional (mock thread) |
| 10 | Complete job | Mark job as done |
| 11 | Leave review | Rate (1–5 stars) and optional comment |

---

## Professional Flow (MVP)

```
Role selection
  → View nearby job requests
  → View map and job list
  → Open job details
  → Send an offer
  → View my offers
  → Chat (after customer accepts)
  → Mark job completed
  → View profile, completed jobs and reviews
```

### Step Details

| Step | Screen | Purpose |
|------|--------|---------|
| 1 | Role selection | Choose "I'm a professional" |
| 2 | Nearby jobs | Map + scrollable list of open requests (mock data) |
| 3 | Job details | Full description, photos, location, customer info |
| 4 | Send offer | Price, estimated duration, message |
| 5 | My offers | List of submitted offers and their status |
| 6 | Chat | Message the customer after offer is accepted (mock thread) |
| 7 | Mark completed | Confirm job finished |
| 8 | Pro profile | View own profile, completed jobs, and reviews |

---

## MVP Scope

### In Scope

- Role selection screen
- Customer: describe problem, add photos, add location, publish, view offers, pro profile, accept offer, chat, complete, review
- Professional: nearby jobs (map + list), job details, send offer, my offers, chat, mark completed, profile
- Mock data for jobs, offers, professionals, messages, and reviews
- Local navigation between all screens
- Consistent theme (colors, typography, spacing, buttons, cards)
- Form validation with React Hook Form + Zod on input screens

### Out of Scope (MVP)

- Supabase integration (auth, database, storage, real-time)
- Real payments (Stripe)
- Push notifications
- Identity verification
- AI features
- Admin dashboard
- Multi-city or geo-search backend
- CI/CD pipelines
- App Store / Play Store submission

---

## Mock Data Strategy

Until Supabase is connected, the app uses static mock data defined in local modules:

- **Jobs** — 5–8 sample job requests with title, description, category, location, photos
- **Offers** — 2–3 offers per job from mock professionals
- **Professionals** — 4–6 profiles with name, avatar, rating, review count, services
- **Messages** — Pre-filled chat threads for active jobs
- **Reviews** — Sample reviews on professional profiles

Mock data lives in `src/data/` and is consumed by screens via simple hooks or direct imports. No API layer in the MVP prototype phase.

---

## Success Criteria (Prototype)

1. A user can launch the app and choose a role
2. A customer can walk through the full flow from problem description to review using mock data
3. A professional can walk through the full flow from browsing jobs to viewing their profile using mock data
4. Navigation is smooth and screens feel cohesive with the design system
5. Forms validate input before allowing the user to proceed
