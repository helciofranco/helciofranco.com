import type { AppProps } from 'next/app';

import Default from '@layouts/Default';

import '@libs/stitches/font-faces.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  );
}

export default MyApp;
