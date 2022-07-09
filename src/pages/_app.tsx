import type { AppProps } from 'next/app';

import Base from '@layouts/Base';

import '@libs/stitches/font-faces.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Base>
      <Component {...pageProps} />
    </Base>
  );
}

export default MyApp;
