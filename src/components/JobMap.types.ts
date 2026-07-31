import { Job } from '@/types';

export type JobMapProps = {
  jobs: Job[];
  onMarkerPress: (job: Job) => void;
  selectedJobId?: string;
};

export type MapLocation = {
  latitude: number;
  longitude: number;
};
