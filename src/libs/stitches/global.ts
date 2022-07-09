import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    fontFamily: '$body',
  },
  'html, body': {
    margin: '0',
    padding: '0',
    WebkitFontSmoothing: 'antialiased',
    background: '$background',
  },
  // '@font-face': [
  //   {
  //     fontFamily: 'Neuzeit Grotesk Bold',
  //     src: `url("/static/font/NeuzeitGrotesk-Bold.woff2") format("woff2"),
  //       url("/static/font/NeuzeitGrotesk-Bold.woff") format("woff")`,
  //     fontWeight: 'normal',
  //     fontStyle: 'normal',
  //   },
  //   {
  //     fontFamily: 'Fira Code',
  //     src: `url("/static/font/FiraCode-Regular.woff2") format("woff2"),
  //       url("/static/font/FiraCode-Regular.woff") format("woff")`,
  //     fontWeight: 'normal',
  //     fontStyle: 'normal',
  //   },
  //   {
  //     fontFamily: 'Biotif',
  //     src: `url("/static/font/Biotif-Bold.woff2") format("woff2"),
  //       url("/static/font/Biotif-Bold.woff") format("woff")`,
  //     fontWeight: 'bold',
  //     fontStyle: 'normal',
  //   },
  //   {
  //     fontFamily: 'Biotif',
  //     src: `url("/static/font/Biotif-Book.woff2") format("woff2"),
  //       url("/static/font/Biotif-Book.woff") format("woff")`,
  //     fontWeight: 500,
  //     fontStyle: 'normal',
  //   },
  //   {
  //     fontFamily: 'Biotif',
  //     src: `url("/static/font/Biotif-Regular.woff2") format("woff2"),
  //       url("/static/font/Biotif-Regular.woff") format("woff")`,
  //     fontWeight: 'normal',
  //     fontStyle: 'normal',
  //   },
  //   {
  //     fontFamily: 'Biotif',
  //     src: `url("/static/font/Biotif-RegularItalic.woff2") format("woff2"),
  //       url("/static/font/Biotif-RegularItalic.woff") format("woff")`,
  //     fontWeight: 'normal',
  //     fontStyle: 'italic',
  //   },
  // ],
});

globalStyles();
