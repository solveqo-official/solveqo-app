import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { MapLocation } from '@/components/JobMap.types';
import { MOCK_USER_LOCATION } from '@/types';

const LOCATION_TIMEOUT_MS = 5000;

type UserLocationState = {
  location: MapLocation;
  loading: boolean;
  permissionDenied: boolean;
};

export function useUserLocation(): UserLocationState {
  const [location, setLocation] = useState<MapLocation>(MOCK_USER_LOCATION);
  const [loading, setLoading] = useState(true);
  const [permissionDenied, setPermissionDenied] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const finish = (loc: MapLocation, denied = false) => {
      if (cancelled) return;
      setLocation(loc);
      setPermissionDenied(denied);
      setLoading(false);
    };

    const timeoutId = setTimeout(() => finish(MOCK_USER_LOCATION), LOCATION_TIMEOUT_MS);

    async function detectLocation() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (cancelled) return;

        if (status !== 'granted') {
          clearTimeout(timeoutId);
          finish(MOCK_USER_LOCATION, true);
          return;
        }

        const position = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });
        if (cancelled) return;

        clearTimeout(timeoutId);
        finish({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      } catch {
        if (!cancelled) {
          clearTimeout(timeoutId);
          finish(MOCK_USER_LOCATION);
        }
      }
    }

    detectLocation();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  return { location, loading, permissionDenied };
}
