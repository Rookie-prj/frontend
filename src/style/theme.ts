export const typography = {
  // Display styles (가장 큰 텍스트)
  display: {
    display6: {
      fontSize: '1.75rem', // 28px
      fontWeight: 700,
      lineHeight: '2.5625rem', // 41px (1.4642857142857142em)
      letterSpacing: '-0.01em', // -1%
    },
    display5: {
      fontSize: '1.75rem', // 28px
      fontWeight: 500,
      lineHeight: '2.5625rem', // 41px (1.4642857142857142em)
      letterSpacing: '-0.01em', // -1%
    },
    display4: {
      fontSize: '1.5rem', // 24px
      fontWeight: 700,
      lineHeight: '2.25rem', // 36px (1.5em)
      letterSpacing: '-0.01em', // -1%
    },
    display3: {
      fontSize: '1.5rem', // 24px
      fontWeight: 400,
      lineHeight: '2.25rem', // 36px (1.5em)
      letterSpacing: '-0.01em', // -1%
    },
    display2: {
      fontSize: '1.375rem', // 22px
      fontWeight: 700,
      lineHeight: '2rem', // 32px (1.4545454545454546em)
      letterSpacing: '-0.01em', // -1%
    },
    display1: {
      fontSize: '1.375rem', // 22px
      fontWeight: 500,
      lineHeight: '2rem', // 32px (1.4545454545454546em)
      letterSpacing: '-0.01em', // -1%
    },
  },

  // Headline styles
  headline: {
    headline4: {
      fontSize: '1.25rem', // 20px
      fontWeight: 700,
      lineHeight: '2rem', // 32px (1.6em)
      letterSpacing: '-0.01em', // -1%
    },
    headline3: {
      fontSize: '1.25rem', // 20px
      fontWeight: 500,
      lineHeight: '1.875rem', // 30px (1.5em)
      letterSpacing: '-0.01em', // -1%
    },
    headline2: {
      fontSize: '1.125rem', // 18px
      fontWeight: 700,
      lineHeight: '1.625rem', // 26px (1.4444444444444444em)
      letterSpacing: '-0.02em', // -2%
    },
    headline1: {
      fontSize: '1.125rem', // 18px
      fontWeight: 400,
      lineHeight: '1.625rem', // 26px (1.4444444444444444em)
      letterSpacing: '-0.01em', // -1%
    },
  },

  // Subhead styles
  subhead: {
    subhead5: {
      fontSize: '1rem', // 16px
      fontWeight: 700,
      lineHeight: '1.375rem', // 22px (1.375em)
      letterSpacing: '-0.01em', // -1%
    },
    subhead4: {
      fontSize: '1rem', // 16px
      fontWeight: 500,
      lineHeight: '1.375rem', // 22px (1.375em)
      letterSpacing: '-0.01em', // -1%
    },
    subhead3: {
      fontSize: '0.875rem', // 14px
      fontWeight: 700,
      lineHeight: '1.25rem', // 20px (1.4285714285714286em)
      letterSpacing: '0em',
    },
    subhead2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 600,
      lineHeight: '1.25rem', // 20px (1.4285714285714286em)
      letterSpacing: '-0.01em', // -1%
    },
    subhead1: {
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
      lineHeight: '1.25rem', // 20px (1.4285714285714286em)
      letterSpacing: '-0.01em', // -1%
    },
  },

  // Caption styles
  caption: {
    caption5: {
      fontSize: '0.75rem', // 12px
      fontWeight: 700,
      lineHeight: '1.125rem', // 18px (1.5em)
      letterSpacing: '-0.01em', // -1%
    },
    caption4: {
      fontSize: '0.75rem', // 12px
      fontWeight: 600,
      lineHeight: '1.125rem', // 18px (1.5em)
      letterSpacing: '-0.01em', // -1%
    },
    caption3: {
      fontSize: '0.75rem', // 12px
      fontWeight: 500,
      lineHeight: '1.125rem', // 18px (1.5em)
      letterSpacing: '-0.01em', // -1%
    },
    caption2: {
      fontSize: '0.625rem', // 10px
      fontWeight: 700,
      lineHeight: '0.75rem', // 12px (1.2em)
      letterSpacing: '-0.01em', // -1%
    },
    caption1: {
      fontSize: '0.625rem', // 10px
      fontWeight: 500,
      lineHeight: '0.75rem', // 12px (1.2em)
      letterSpacing: '-0.01em', // -1%
    },
  },
} as const;

// Font family definitions
export const fontFamily = {
  primary: [
    'Pretendard',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'sans-serif',
  ],
  mono: ['Fira Code', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
} as const;

// Font weight definitions
export const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

// Line height definitions
export const lineHeight = {
  tight: 1.25,
  normal: 1.5,
  relaxed: 1.75,
  loose: 2,
} as const;

// Letter spacing definitions
export const letterSpacing = {
  tighter: '-0.02em',
  tight: '-0.01em',
  normal: '0em',
  wide: '0.01em',
  wider: '0.02em',
  widest: '0.1em',
} as const;

// Complete theme object
export const theme = {
  typography,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
} as const;

// Type definitions for each typography category
export type DisplayStyles = keyof typeof typography.display;
export type HeadlineStyles = keyof typeof typography.headline;
export type SubheadStyles = keyof typeof typography.subhead;
export type CaptionStyles = keyof typeof typography.caption;

export type Typography = typeof typography;
export type FontFamily = typeof fontFamily;
export type FontWeight = typeof fontWeight;
export type LineHeight = typeof lineHeight;
export type LetterSpacing = typeof letterSpacing;
export type Theme = typeof theme;

export default theme;
