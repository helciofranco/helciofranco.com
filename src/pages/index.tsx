import type { NextPage } from 'next';
import Head from 'next/head';

import Feed from '@blog/screens/Feed';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hélcio Franco</title>
      </Head>

      <Feed />
    </>
  );
};

export default Home;
