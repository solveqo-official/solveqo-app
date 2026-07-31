import L from 'leaflet';
import { useEffect, useMemo, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { JobMapProps } from '@/components/JobMap.types';
import { useUserLocation } from '@/hooks/useUserLocation';
import { jobsNearLocation } from '@/utils/jobsNearLocation';
import { colors, radius, spacing, typography } from '@/theme';
import 'leaflet/dist/leaflet.css';

function createJobIcon(emoji: string, selected: boolean) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:36px;height:36px;border-radius:9999px;display:flex;align-items:center;justify-content:center;
      background:${selected ? colors.primary : colors.surface};
      border:2px solid ${colors.primary};
      font-size:16px;box-shadow:0 2px 8px rgba(0,0,0,0.15);
    ">${emoji}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
}

export function JobMap({ jobs, onMarkerPress, selectedJobId }: JobMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const userMarkerRef = useRef<L.CircleMarker | null>(null);
  const { location, loading } = useUserLocation();
  const nearbyJobs = useMemo(() => jobsNearLocation(jobs, location), [jobs, location]);
  const hasFlown = useRef(false);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      zoomControl: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      dragging: true,
      touchZoom: true,
    }).setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = [];
      userMarkerRef.current = null;
      hasFlown.current = false;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || loading) return;

    if (userMarkerRef.current) {
      userMarkerRef.current.remove();
    }

    userMarkerRef.current = L.circleMarker([location.latitude, location.longitude], {
      radius: 9,
      color: colors.primary,
      fillColor: colors.primary,
      fillOpacity: 1,
      weight: 3,
    }).addTo(map);

    userMarkerRef.current.bindTooltip('You', { permanent: false, direction: 'top' });

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = nearbyJobs.map((job) => {
      const marker = L.marker([job.latitude, job.longitude], {
        icon: createJobIcon(job.photos[0] ?? '📍', job.id === selectedJobId),
      }).addTo(map);

      marker.on('click', () => onMarkerPress(job));
      return marker;
    });

    if (!hasFlown.current) {
      hasFlown.current = true;
      map.flyTo([location.latitude, location.longitude], 14, { duration: 1.5 });
    }
  }, [loading, location, nearbyJobs, onMarkerPress, selectedJobId]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || loading) return;

    markersRef.current.forEach((marker, index) => {
      const job = nearbyJobs[index];
      if (!job) return;
      marker.setIcon(createJobIcon(job.photos[0] ?? '📍', job.id === selectedJobId));
    });
  }, [selectedJobId, nearbyJobs, loading]);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Detecting your location…</Text>
        </View>
      ) : null}
      <div ref={containerRef} style={styles.mapDiv} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    position: 'relative',
  },
  mapDiv: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15,23,42,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
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
});
