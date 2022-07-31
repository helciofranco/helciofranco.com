import { globalCss } from '.';

const globalStyles = globalCss({
  '*': {
    margin: '$none',
  },
  '*, *::before, *::after': {
    // Change from `box-sizing: content-box` so that `width`
    // is not affected by `padding` or `border`.
    boxSizing: 'border-box',
  },

  // Global wrappers
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
  '#__next': {
    maxWidth: '800px',
    paddingRight: '$space8',
    paddingLeft: '$space8',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  // Blocks of content
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

  // Scrollbar
  '::-webkit-scrollbar': {
    width: 10,
    backgroundColor: '$backgroundSecondary',
  },
  '::-webkit-scrollbar-track': {
    borderRadius: '$xs',
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: '$md',
    backgroundColor: 'rgba(100, 116, 139, 0.5)', // slate-500/0.5
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '$backgroundSecondary',
  },
});

globalStyles();
