import { PublicUser } from '@/types/reputation';
import { allMockUsers, mockCurrentUser } from '@/data/user';

export type FriendUser = PublicUser & {
  isFollowing: boolean;
  mutualFriends: number;
};

export const mockFriends: FriendUser[] = [
  {
    ...allMockUsers.find((u) => u.id === 'u1')!,
    isFollowing: true,
    mutualFriends: 3,
  },
  {
    ...allMockUsers.find((u) => u.id === 'u2')!,
    isFollowing: true,
    mutualFriends: 2,
  },
  {
    ...allMockUsers.find((u) => u.id === 'u4')!,
    isFollowing: false,
    mutualFriends: 1,
  },
  {
    id: 'u11',
    name: 'Priya Sharma',
    avatar: 'P',
    region: 'Barcelona, Spain',
    professions: ['Cleaner'],
    rating: 4.8,
    completedJobs: 22,
    reputationPoints: 720,
    reviewCount: 26,
    portfolioCount: 4,
    about: 'Professional home cleaning with eco-friendly products.',
    regionalRank: 8,
    globalRank: 112,
    isFollowing: true,
    mutualFriends: 2,
  },
];

export function getRegionalLeaderboard(region = mockCurrentUser.region): PublicUser[] {
  return allMockUsers
    .filter((user) => user.region === region)
    .sort((a, b) => b.reputationPoints - a.reputationPoints)
    .map((user, index) => ({ ...user, regionalRank: index + 1 }));
}

export function getGlobalLeaderboard(): PublicUser[] {
  return [...allMockUsers]
    .sort((a, b) => b.reputationPoints - a.reputationPoints)
    .map((user, index) => ({ ...user, globalRank: index + 1 }));
}
