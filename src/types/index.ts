export type JobStatus = 'open' | 'accepted';

export type JobOwner = {
  id: string;
  name: string;
  rating: number;
  phone: string;
  avatar: string;
  professions: string[];
  completedJobs: number;
};

export type Job = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  distance: string;
  city: string;
  region: string;
  timePosted: string;
  latitude: number;
  longitude: number;
  photos: string[];
  owner: JobOwner;
  status: JobStatus;
  requestId?: string;
};

export type Offer = {
  id: string;
  jobId: string;
  requestId: string;
  professional: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    completedJobs: number;
    phone: string;
    professions: string[];
  };
  laborPrice: number;
  message: string;
  status: 'pending' | 'accepted' | 'declined';
};

export type ChatMessage = {
  id: string;
  text: string;
  senderId: string;
  timestamp: string;
  isMine: boolean;
};

export const MOCK_USER_LOCATION = {
  latitude: 41.3874,
  longitude: 2.1686,
  city: 'Barcelona',
  region: 'Catalonia',
};
