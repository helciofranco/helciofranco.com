import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      backgroundPrimary: '#08070b',
    },
    space: {
      none: 0,
      sm: '2px',
      md: '4px',
      lg: '8px',
      xl: '12px',
    },
    fonts: {
      body: 'Biotif, sans-serif',
    },
    fontSizes: {
      sm: '12px',
      md: '14px',
      lg: '16px',
    },
    fontWeights: {
      normal: 'normal',
      medium: 500,
      bold: 'bold',
    },
  },
  media: {
    sm: '(min-width: 480px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1200px)',
  },
});
