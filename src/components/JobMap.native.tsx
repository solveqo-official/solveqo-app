import { useEffect, useMemo, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { JobMapProps } from '@/components/JobMap.types';
import { useUserLocation } from '@/hooks/useUserLocation';
import { jobsNearLocation } from '@/utils/jobsNearLocation';
import { colors, radius, spacing, typography } from '@/theme';

const WORLD_REGION: Region = {
  latitude: 20,
  longitude: 0,
  latitudeDelta: 120,
  longitudeDelta: 120,
};

export function JobMap({ jobs, onMarkerPress, selectedJobId }: JobMapProps) {
  const mapRef = useRef<MapView>(null);
  const { location, loading } = useUserLocation();
  const nearbyJobs = useMemo(() => jobsNearLocation(jobs, location), [jobs, location]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (loading || hasAnimated.current) return;

    hasAnimated.current = true;
    const target: Region = {
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    };

    setTimeout(() => {
      mapRef.current?.animateToRegion(target, 1500);
    }, 400);
  }, [loading, location]);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Detecting your location…</Text>
        </View>
      ) : null}

      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={WORLD_REGION}
        showsUserLocation
        showsMyLocationButton
        zoomEnabled
        scrollEnabled
        pitchEnabled
        rotateEnabled
      >
        {nearbyJobs.map((job) => {
          const isSelected = job.id === selectedJobId;
          return (
            <Marker
              key={job.id}
              coordinate={{ latitude: job.latitude, longitude: job.longitude }}
              onPress={() => onMarkerPress(job)}
            >
              <View style={[styles.marker, isSelected && styles.markerSelected]}>
                <Text style={styles.markerEmoji}>{job.photos[0] ?? '📍'}</Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15,23,42,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  overlayText: {
    ...typography.body,
    fontWeight: '600',
    color: colors.textInverse,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  marker: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerSelected: {
    backgroundColor: colors.primary,
    transform: [{ scale: 1.12 }],
  },
  markerEmoji: {
    fontSize: 16,
  },
});
