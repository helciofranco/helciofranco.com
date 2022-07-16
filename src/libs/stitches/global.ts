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
  'ol, ul': {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  a: {
    textDecoration: 'inherit',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    fontStyle: 'inherit',
  },
  '#__next': {
    maxWidth: '800px',
    paddingRight: '$space8',
    paddingLeft: '$space8',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

globalStyles();
