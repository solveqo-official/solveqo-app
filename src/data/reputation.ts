export const REPUTATION_EARNINGS = [
  { action: 'Completing a job', points: '+50–120', note: 'Based on quality score' },
  { action: 'Positive review (4–5★)', points: '+80', note: 'Quality over quantity' },
  { action: 'Portfolio photo upload', points: '+15', note: 'Max 5/month' },
  { action: 'Complete profile', points: '+100', note: 'One-time bonus' },
  { action: 'Reliable response rate', points: '+30', note: 'Weekly bonus' },
  { action: 'Repeat customer', points: '+60', note: 'Per returning client' },
] as const;
