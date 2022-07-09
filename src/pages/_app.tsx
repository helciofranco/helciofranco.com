import type { AppProps } from 'next/app';

import '@libs/stitches/font-faces.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
