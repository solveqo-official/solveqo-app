export const colors = {
  primary: '#2563EB',
  primaryDark: '#1D4ED8',
  primaryLight: '#EFF6FF',

  background: '#FAFAFA',
  surface: '#FFFFFF',
  border: '#E5E7EB',

  textPrimary: '#111827',
  textSecondary: '#6B7280',
  textInverse: '#FFFFFF',

  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
} as const;

export type Colors = typeof colors;
