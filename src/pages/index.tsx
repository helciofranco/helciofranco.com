import type { Layout } from 'next/app';
import Head from 'next/head';

import Feed from '@blog/screens/Feed';

const Home: Layout = () => {
  return (
    <>
      <Head>
        <title>Latest posts - Hélcio Franco</title>
      </Head>
      <Feed />
    </>
  );
};

export default Home;
