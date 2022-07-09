import type { NextPage } from 'next';
import Head from 'next/head';

import Main from '@home/index';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hélcio Franco</title>
      </Head>

      <Main />
    </>
  );
};

export default Home;
