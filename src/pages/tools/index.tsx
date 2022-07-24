import type { Layout } from 'next/app';
import Head from 'next/head';

import Main from '@tools/screens/Main';

const Tools: Layout = () => {
  return (
    <>
      <Head>
        <title>Tools - Hélcio Franco</title>
      </Head>
      <Main />
    </>
  );
};

export default Tools;
