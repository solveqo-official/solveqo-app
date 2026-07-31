# Aveliq — Design System (MVP)

Premium, clean, and trustworthy. The app should feel calm and confident — not cluttered or cheap.

---

## Visual Direction

| Attribute | Direction |
|-----------|-----------|
| Mood | Premium, trustworthy, calm |
| Density | Spacious — generous padding, breathing room |
| Corners | Rounded (12–16px on cards, 8px on inputs) |
| Shadows | Subtle elevation on cards; no heavy drop shadows |
| Icons | Simple line icons (e.g. `@expo/vector-icons` / Ionicons) |
| Photography | Real-world job photos; rounded thumbnails |

Inspired by the clarity of **Stripe**, the warmth of **Airbnb**, and the minimal precision of **Linear** — clean surfaces, confident typography, and restrained color.

---

## Color Palette

### Primary

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#2563EB` | Main brand color — buttons, active states, links |
| `primaryDark` | `#1D4ED8` | Pressed states, emphasis |
| `primaryLight` | `#EFF6FF` | Highlight backgrounds, selected states, icon containers |

### Neutrals

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#FAFAFA` | Screen background |
| `surface` | `#FFFFFF` | Cards, modals, input backgrounds |
| `border` | `#E5E7EB` | Dividers, input borders |
| `textPrimary` | `#111827` | Headings, body text |
| `textSecondary` | `#6B7280` | Subtitles, placeholders, metadata |
| `textInverse` | `#FFFFFF` | Text on primary-colored backgrounds |

### Semantic

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#10B981` | Completed jobs, confirmations |
| `warning` | `#F59E0B` | Pending states |
| `error` | `#EF4444` | Validation errors, destructive actions |
| `info` | `#2563EB` | Informational badges (reuses primary) |

---

## Typography

System fonts for MVP (no custom font files to install).

| Token | Size | Weight | Line height | Usage |
|-------|------|--------|-------------|-------|
| `heading1` | 28 | 700 (bold) | 34 | Screen titles |
| `heading2` | 22 | 600 (semibold) | 28 | Section headers |
| `heading3` | 18 | 600 (semibold) | 24 | Card titles |
| `body` | 16 | 400 (regular) | 24 | Body text, descriptions |
| `bodySmall` | 14 | 400 (regular) | 20 | Metadata, timestamps |
| `caption` | 12 | 400 (regular) | 16 | Labels, badges |
| `button` | 16 | 600 (semibold) | 24 | Button labels |

Platform mapping:
- **iOS:** SF Pro (system default)
- **Android:** Roboto (system default)

---

## Spacing

Base unit: **4px**. All spacing uses multiples of 4.

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4 | Tight gaps (icon to label) |
| `sm` | 8 | Inner padding, small gaps |
| `md` | 16 | Standard padding, card inner spacing |
| `lg` | 24 | Section spacing, screen horizontal padding |
| `xl` | 32 | Large section gaps |
| `xxl` | 48 | Top/bottom screen padding |

Screen horizontal padding: **24px** (`lg`).

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 8 | Inputs, small chips |
| `md` | 12 | Buttons, thumbnails |
| `lg` | 16 | Cards, modals |
| `full` | 9999 | Avatars, pill badges |

---

## Buttons

### Primary

- Background: `primary` (`#2563EB`)
- Text: `textInverse` (`#FFFFFF`), `button` typography
- Border radius: `md` (12px)
- Height: 52px
- Full width by default
- Pressed state: `primaryDark` background

### Secondary

- Background: transparent
- Border: 1.5px solid `primary`
- Text: `primary`, `button` typography
- Same dimensions as primary

### Text / Ghost

- No background, no border
- Text: `primary`, `body` typography
- Used for "Skip", "Back", secondary actions

### Disabled

- Background: `border` (`#E5E7EB`)
- Text: `textSecondary`
- No interaction

---

## Cards

### Standard Card

- Background: `surface` (`#FFFFFF`)
- Border radius: `lg` (16px)
- Padding: `md` (16px)
- Shadow: `{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 2 }`
- Border: 1px solid `border` (optional, for flat variant)

### Job / Offer Card (list item)

- Standard card styling
- Layout: thumbnail (left, 64×64, radius `md`) + content (right)
- Title: `heading3`
- Subtitle: `bodySmall`, `textSecondary`
- Optional badge (status, distance) top-right

### Role Selection Card

- Standard card styling
- Icon container: 48px circle on `primaryLight` background
- Title: `heading2`
- Description: `body`, `textSecondary`
- Primary button at bottom of card
- Min height: 200px

---

## Inputs

- Background: `surface`
- Border: 1px solid `border`
- Border radius: `sm` (8px)
- Height: 48px (single line), auto (multiline)
- Padding horizontal: `md` (16px)
- Text: `body`, `textPrimary`
- Placeholder: `textSecondary`
- Focus border: `primary` (1.5px)
- Error border: `error`
- Error message: `caption`, `error`, below input

---

## Screen Layout

Every screen follows this structure:

```
┌─────────────────────────────┐
│  SafeAreaView               │
│  ┌───────────────────────┐  │
│  │ Header (optional back) │  │
│  │ Title (heading1)       │  │
│  │ Subtitle (body)        │  │
│  ├───────────────────────┤  │
│  │                        │  │
│  │  Content area          │  │
│  │  (scrollable)          │  │
│  │                        │  │
│  ├───────────────────────┤  │
│  │ Fixed bottom action    │  │
│  │ (primary button)       │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

- Background: `background`
- Horizontal padding: `lg` (24px)
- Bottom action button pinned above safe area inset
- Content scrolls; header and action bar stay fixed

---

## Icons

Use `@expo/vector-icons` (Ionicons) for MVP. No custom icon set.

| Context | Icon |
|---------|------|
| Customer / help | `help-circle-outline` |
| Professional / jobs | `briefcase-outline` |
| Location | `location-outline` |
| Photo | `camera-outline` |
| Chat | `chatbubble-outline` |
| Star (rating) | `star` (filled: `#F59E0B`, empty: `border`) |
| Back | `chevron-back` |
| Check / complete | `checkmark-circle` |

---

## Status Badges

Small pill badges for offer/job status.

| Status | Background | Text color |
|--------|-----------|------------|
| Pending | `#FEF3C7` | `#B45309` |
| Accepted | `#D1FAE5` | `success` |
| Declined | `#FEE2E2` | `error` |
| Completed | `#D1FAE5` | `success` |

- Border radius: `full`
- Padding: 4px horizontal 10px
- Typography: `caption`, semibold

---

## Avatar

- Shape: circle (`borderRadius: full`)
- Sizes: 40px (list), 64px (profile header), 96px (profile screen)
- Fallback: initials on `primaryLight` background, `primary` text
- Border: 2px solid `surface` when overlapping

---

## Map Placeholder (MVP)

Until Mapbox/Google Maps is integrated, use a styled placeholder:

- Background: `primaryLight` (`#EFF6FF`)
- Height: 200px (list screen), flex (full screen)
- Centered icon: `map-outline`, 48px, `textSecondary`
- Label: "Map preview" in `bodySmall`

---

## Accessibility (MVP baseline)

- Minimum touch target: 44×44px
- Color contrast: text on backgrounds meets WCAG AA
- Form labels associated with inputs
- Screen titles announced via React Native accessibility props
