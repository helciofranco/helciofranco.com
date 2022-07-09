import { globalCss } from '.';

const globalStyles = globalCss({
  '*': {
    fontFamily: '$body',
    // Change from `box-sizing: content-box` so that `width`
    // is not affected by `padding` or `border`.
    boxSizing: 'border-box',
  },
  'html, body': {
    margin: '0', // Remove the margin in all browsers.
    padding: '0', // Remove the padding in all browsers.
    WebkitFontSmoothing: 'antialiased',
    backgroundColor: '$backgroundPrimary',
  },
});

globalStyles();
