import { Job, MOCK_USER_LOCATION } from '@/types';
import { MapLocation } from '@/components/JobMap.types';

export function jobsNearLocation(jobs: Job[], userLocation: MapLocation): Job[] {
  const latOffset = userLocation.latitude - MOCK_USER_LOCATION.latitude;
  const lngOffset = userLocation.longitude - MOCK_USER_LOCATION.longitude;

  return jobs.map((job) => ({
    ...job,
    latitude: job.latitude + latOffset,
    longitude: job.longitude + lngOffset,
  }));
}
