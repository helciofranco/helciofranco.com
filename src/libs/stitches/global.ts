import { globalCss } from '.';

export const globalStyles = globalCss({
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
    background: '$background',
  },
  '@font-face': [
    {
      fontFamily: 'Biotif',
      src: `url("/fonts/Biotif-Bold.woff2") format("woff2"),
        url("/fonts/Biotif-Bold.woff") format("woff")`,
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/fonts/Biotif-Book.woff2") format("woff2"),
        url("/fonts/Biotif-Book.woff") format("woff")`,
      fontWeight: 500,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/fonts/Biotif-Regular.woff2") format("woff2"),
        url("/fonts/Biotif-Regular.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/fonts/Biotif-RegularItalic.woff2") format("woff2"),
        url("/fonts/Biotif-RegularItalic.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  ],
});

globalStyles();
