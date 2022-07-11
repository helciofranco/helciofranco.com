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
      // backgrounds
      backgroundPrimary: '#1f2028',

      // text
      textPrimary: '#fff',
      textSecondary: '#a9adc1',
      textHighlight: '#36a3ff',
    },
    space: {
      none: 0,
      sm: '2px',
      md: '4px',
      lg: '8px',
      xl: '12px',
    },
    fonts: {
      sans: '"Inter", -apple-system, ui-sans-serif, system-ui, "Helvetica Neue", Arial, sans-serif', // main font
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif', // for blog posts
      mono: '"Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', // font code snippets
    },
    fontSizes: {
      h1: '6rem',
      h2: '3.75rem',
      h3: '3rem',
      h4: '2.125rem',
      h5: '1.5rem',
      h6: '1.25rem',
      body: '1rem',
    },
    fontWeights: {
      bold: 700,
      medium: 500,
      regular: 400,
      light: 300,
    },
    lineHeights: {
      h1: '1.167',
      h2: '1.2',
      h3: '1.167',
      h4: '1.235',
      h5: '1.334',
      h6: '1.6',
      body: '1.5',
    },
  },
  media: {
    sm: '(min-width: 480px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1200px)',
  },
});
