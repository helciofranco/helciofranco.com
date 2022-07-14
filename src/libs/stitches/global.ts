import { globalCss } from '.';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    // Change from `box-sizing: content-box` so that `width`
    // is not affected by `padding` or `border`.
    boxSizing: 'border-box',
  },
  html: {
    WebkitFontSmoothing: 'antialiased',
    WebkitTextSizeAdjust: '100%',
    boxSizing: 'border-box',
  },
  body: {
    margin: '0', // Remove the margin in all browsers.
    fontFamily: '$sans',
    fontSize: '1rem',
    backgroundColor: '$backgroundPrimary',
  },
  code: {
    fontFamily: '$serif',
  },
  ul: {
    padding: 0,
    listStyle: 'none',
  },
  a: {
    textDecoration: 'inherit',
  },
});

globalStyles();
