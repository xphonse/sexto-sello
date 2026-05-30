/**
 * Shared design tokens — single source of truth for the visual identity of
 * BOTH the website (packages/nestjs) and the mobile app (packages/react-native).
 *
 * Values are plain data (hex strings / numbers) so they are platform-agnostic:
 *   - Website consumes them through tailwind.config.ts (theme.extend.*)
 *   - Mobile consumes them directly in StyleSheet objects + useThemeColors
 *
 * Identity: refined monochrome. No chromatic accent; hierarchy comes from an
 * INVERTED high-contrast neutral (`accent` / `accentText`) plus surface/border
 * layering. Dark mode uses a softened near-black background, never pure #000.
 *
 * After editing this file, run `nx build data` so both apps pick up the change.
 */

export interface ThemeColors {
  /** Screen background. */
  bg: string
  /** Raised areas: list items, footer bar, cards. */
  surface: string
  /** Primary text. */
  text: string
  /** Secondary text: page numbers, captions. */
  textMuted: string
  /** Outlines and dividers. */
  border: string
  /** Inverted high-contrast fill for primary actions / active state. */
  accent: string
  /** Text/icon color rendered on top of `accent`. */
  accentText: string
}

export interface Palette {
  light: ThemeColors
  dark: ThemeColors
}

export const palette: Palette = {
  light: {
    bg: '#FAFAF9',
    surface: '#F1F1EF',
    text: '#1A1A1A',
    textMuted: '#5C5C5C',
    border: '#DADAD8',
    accent: '#111111',
    accentText: '#FFFFFF',
  },
  dark: {
    bg: '#15151A',
    surface: '#1F1F26',
    text: '#ECECEC',
    textMuted: '#9A9AA0',
    border: '#2C2C30',
    accent: '#FFFFFF',
    accentText: '#15151A',
  },
}

/** Type scale in px. Keys mirror Tailwind's naming for an easy web mapping. */
export const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 40,
} as const

/**
 * Mobile user-adjustable body size. `min`/`max` mirror the existing clamp in
 * store/slices/thunks.ts; `default` is the initial value for new users.
 */
export const fontSizeClamp = {
  min: 12,
  max: 36,
  default: 16,
} as const

export const lineHeights = {
  tight: 1.2,
  snug: 1.4,
  /** Long-form devotional reading (prayers & choirs). */
  body: 1.65,
} as const

/** String weights so RN (`fontWeight`) and CSS share one representation. */
export const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const

/** Spacing scale on a 4px base, in px. */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 48,
  '5xl': 64,
} as const

/** Border radii in px. `pill` keeps the existing rounded-full button look. */
export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const

/** Elevation provided in both web (CSS box-shadow) and native (RN) forms. */
export const elevation = {
  e1Web: '0 1px 3px rgba(0, 0, 0, 0.08)',
  e1Native: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
} as const

/** Convenience aggregate for consumers that prefer a single import. */
export const tokens = {
  palette,
  fontSizes,
  fontSizeClamp,
  lineHeights,
  fontWeights,
  spacing,
  radii,
  elevation,
} as const

export type Tokens = typeof tokens
