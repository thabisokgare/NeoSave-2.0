
export const colors = {
    // Base surfaces
    background: "#F8FAFC",
    foreground: "#0B1220",
    card: "#FFFFFF",
    muted: "#F1F5F9",
    mutedForeground: "#64748B",

    // Brand
    primary: "#0B1220",
    accent: "#10B981",
    brandDark: "#064E3B",
    brandLight: "#D1FAE5",
    brandSoft: "#ECFDF5",

    // Borders and states
    border: "#E2E8F0",
    success: "#059669",
    destructive: "#DC2626",
    warning: "#F59E0B",
    info: "#2563EB",

    // Financial indicators
    income: "#059669",
    expense: "#DC2626",
    subscription: "#D1FAE5",

    // Charts and analytics
    chartBlue: "#3B82F6",
    chartPurple: "#8B5CF6",
} as const;

export const spacing = {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    14: 56,
    16: 64,
    18: 72,
    20: 80,
    24: 96,
    30: 120,
} as const;

export const components = {
    tabBar: {
        height: spacing[18],
        horizontalInset: spacing[5],
        radius: spacing[8],
        iconFrame: spacing[12],
        itemPaddingVertical: spacing[2],
    },
} as const;

export const theme = {
    colors,
    spacing,
    components,
} as const;

export type Theme = typeof theme;
export type ThemeColors = typeof colors;
export type ThemeSpacing = typeof spacing;
