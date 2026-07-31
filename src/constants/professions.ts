export const PROFESSIONS = [
  'Plumber',
  'Electrician',
  'Painter',
  'Carpenter',
  'Mechanic',
  'Cleaner',
  'Gardener',
  'HVAC',
  'Universal Handyman',
  'Other',
] as const;

export type Profession = (typeof PROFESSIONS)[number];
