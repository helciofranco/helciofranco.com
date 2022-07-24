import 'remixicon/fonts/remixicon.css';

import type { AppPropsWithLayout } from 'next/app';

import Base from '@layouts/Base';
import { ReactElement } from 'react';

const defaultLayout = (page: ReactElement) => <Base>{page}</Base>;

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || defaultLayout;

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
