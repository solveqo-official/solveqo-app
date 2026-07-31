import { StyleSheet, Text, View } from 'react-native';
import { ChatMessage } from '@/types';
import { colors, radius, spacing, typography } from '@/theme';

type ChatBubbleProps = {
  message: ChatMessage;
};

export function ChatBubble({ message }: ChatBubbleProps) {
  return (
    <View style={[styles.row, message.isMine && styles.rowMine]}>
      <View style={[styles.bubble, message.isMine ? styles.bubbleMine : styles.bubbleOther]}>
        <Text style={[styles.text, message.isMine && styles.textMine]}>{message.text}</Text>
        <Text style={[styles.time, message.isMine && styles.timeMine]}>{message.timestamp}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  rowMine: {
    justifyContent: 'flex-end',
  },
  bubble: {
    maxWidth: '80%',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.lg,
    gap: spacing.xs,
  },
  bubbleMine: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: radius.sm,
  },
  bubbleOther: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderBottomLeftRadius: radius.sm,
  },
  text: {
    ...typography.body,
    color: colors.textPrimary,
    lineHeight: 22,
  },
  textMine: {
    color: colors.textInverse,
  },
  time: {
    ...typography.caption,
    color: colors.textSecondary,
    alignSelf: 'flex-end',
  },
  timeMine: {
    color: 'rgba(255,255,255,0.7)',
  },
});
