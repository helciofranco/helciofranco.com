import { ReactElement } from 'react';
import Head from 'next/head';
import type { Layout } from 'next/app';
import type { GetStaticPaths, GetStaticProps } from 'next';

import Post from '@blog/screens/Post';
import ScrollIndicator from '@layouts/ScrollIndicator';

type Params = {
  title: string;
  slug: string;
};

const Slug: Layout<Params> = ({ title, slug }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Post slug={slug} />
    </>
  );
};

Slug.getLayout = (page: ReactElement) => {
  return <ScrollIndicator>{page}</ScrollIndicator>;
};

export const getStaticProps: GetStaticProps<Params> = async ({ params }) => {
  // const data = await getPost(params.slug)
  const { title, slug } = {
    title: 'result here',
    slug: 'result here',
  };

  return {
    props: {
      title,
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  // const allPosts = await getPosts();
  // https://nextjs.org/docs/api-reference/data-fetching/get-static-props#reading-files-use-processcwd

  return {
    paths: [
      { params: { title: 'Testing', slug: 'testing' } },
      { params: { title: 'Testing 2', slug: 'testing-2' } },
      { params: { title: 'Testing 3', slug: 'testing-3' } },
    ], // @TODO: Generate from posts.
    fallback: false,
  };
};

export default Slug;
