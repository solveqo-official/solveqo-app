import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { JobListCard } from '@/components/JobListCard';
import { JobMap } from '@/components/JobMap';
import { JobPreviewCard } from '@/components/JobPreviewCard';
import { SegmentedControl } from '@/components/ui';
import { mockJobs } from '@/data/jobs';
import { Job } from '@/types';
import { colors, spacing } from '@/theme';

export default function JobsScreen() {
  const router = useRouter();
  const [mode, setMode] = useState<'Map' | 'List'>('Map');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.segmentWrap}>
        <SegmentedControl
          options={['Map', 'List']}
          selected={mode}
          onChange={(value) => {
            setMode(value as 'Map' | 'List');
            setSelectedJob(null);
          }}
        />
      </View>

      {mode === 'Map' ? (
        <View style={styles.mapContainer}>
          <JobMap
            jobs={mockJobs}
            selectedJobId={selectedJob?.id}
            onMarkerPress={setSelectedJob}
          />
          {selectedJob ? (
            <View style={styles.previewWrap}>
              <JobPreviewCard
                job={selectedJob}
                onView={() => router.push(`/job/${selectedJob.id}`)}
                onDismiss={() => setSelectedJob(null)}
              />
            </View>
          ) : null}
        </View>
      ) : (
        <FlatList
          data={mockJobs}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <JobListCard job={item} onPress={() => router.push(`/job/${item.id}`)} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  segmentWrap: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
    backgroundColor: colors.background,
    zIndex: 2,
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  previewWrap: {
    position: 'absolute',
    bottom: spacing.lg,
    left: spacing.lg,
    right: spacing.lg,
  },
  listContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
    gap: spacing.md,
  },
});
