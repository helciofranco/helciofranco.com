import type { Layout } from 'next/app';
import Head from 'next/head';

import Main from '@setup/screens/Main';

const Setup: Layout = () => {
  return (
    <>
      <Head>
        <title>Setup - Hélcio Franco</title>
      </Head>
      <Main />
    </>
  );
};

export default Setup;
