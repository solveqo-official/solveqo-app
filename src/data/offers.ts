import { Offer } from '@/types';

export const mockOffers: Offer[] = [
  {
    id: 'offer-1',
    jobId: '1',
    requestId: 'req-1',
    professional: {
      id: 'pro-1',
      name: 'Carlos Mendez',
      avatar: 'C',
      rating: 4.9,
      completedJobs: 47,
      phone: '+34 667 111 222',
      professions: ['Plumber', 'Universal Handyman'],
    },
    laborPrice: 65,
    message:
      'I can come today before 6pm. I have experience with kitchen sink leaks and can bring standard replacement parts.',
    status: 'pending',
  },
  {
    id: 'offer-2',
    jobId: '1',
    requestId: 'req-1',
    professional: {
      id: 'pro-2',
      name: 'Anna Kowalski',
      avatar: 'A',
      rating: 4.7,
      completedJobs: 31,
      phone: '+34 678 222 333',
      professions: ['Plumber'],
    },
    laborPrice: 55,
    message:
      'Available tomorrow morning. Happy to inspect first and give a final quote on site if needed.',
    status: 'pending',
  },
  {
    id: 'offer-3',
    jobId: '1',
    requestId: 'req-1',
    professional: {
      id: 'pro-3',
      name: 'David Torres',
      avatar: 'D',
      rating: 4.8,
      completedJobs: 62,
      phone: '+34 689 333 444',
      professions: ['Plumber', 'HVAC'],
    },
    laborPrice: 75,
    message:
      'Same-day service available. Includes diagnosis and repair of the leak. Parts billed separately if needed.',
    status: 'pending',
  },
];

export function getOffersForRequest(requestId: string): Offer[] {
  return mockOffers.filter((offer) => offer.requestId === requestId);
}
