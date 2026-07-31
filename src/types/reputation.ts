export type ReputationBadgeId =
  | 'newcomer'
  | 'reliable'
  | 'skilled'
  | 'top_professional'
  | 'aveliq_elite';

export type ReputationBadge = {
  id: ReputationBadgeId;
  label: string;
  minPoints: number;
  color: string;
};

export const REPUTATION_BADGES: ReputationBadge[] = [
  { id: 'newcomer', label: 'Newcomer', minPoints: 0, color: '#6B7280' },
  { id: 'reliable', label: 'Reliable', minPoints: 200, color: '#2563EB' },
  { id: 'skilled', label: 'Skilled', minPoints: 500, color: '#7C3AED' },
  { id: 'top_professional', label: 'Top Professional', minPoints: 1000, color: '#F59E0B' },
  { id: 'aveliq_elite', label: 'SOLVEQO Elite', minPoints: 2000, color: '#111827' },
];

export type PublicUser = {
  id: string;
  name: string;
  avatar: string;
  region: string;
  professions: string[];
  rating: number;
  completedJobs: number;
  reputationPoints: number;
  reviewCount: number;
  portfolioCount: number;
  about: string;
  regionalRank: number;
  globalRank: number;
};

export function getBadgeForPoints(points: number): ReputationBadge {
  const sorted = [...REPUTATION_BADGES].sort((a, b) => b.minPoints - a.minPoints);
  return sorted.find((badge) => points >= badge.minPoints) ?? REPUTATION_BADGES[0];
}

export function getNextBadge(points: number): ReputationBadge | null {
  return REPUTATION_BADGES.find((badge) => points < badge.minPoints) ?? null;
}

export function getBadgeProgress(points: number): number {
  const current = getBadgeForPoints(points);
  const next = getNextBadge(points);
  if (!next) return 1;
  const range = next.minPoints - current.minPoints;
  const progress = points - current.minPoints;
  return Math.min(progress / range, 1);
}
