import { ReactElement } from 'react';
import type { Layout } from 'next/app';
import type { GetStaticPaths, GetStaticProps } from 'next';

import Post from '@blog/screens/Post';
import ScrollIndicator from '@layouts/ScrollIndicator';

type Params = {
  slug: string;
};

const Slug: Layout<Params> = ({ slug }) => {
  return <Post slug={slug} />;
};

Slug.getLayout = (page: ReactElement) => {
  return <ScrollIndicator>{page}</ScrollIndicator>;
};

export const getStaticProps: GetStaticProps<Params> = async ({ params }) => {
  // const data = await getPost(params.slug)
  const { slug } = {
    slug: 'result here',
  };

  return {
    props: {
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  // const allPosts = await getPosts();
  // https://nextjs.org/docs/api-reference/data-fetching/get-static-props#reading-files-use-processcwd

  return {
    paths: [
      { params: { slug: 'testing' } },
      { params: { slug: 'testing-2' } },
      { params: { slug: 'testing-3' } },
    ], // @TODO: Generate from posts.
    fallback: false,
  };
};

export default Slug;
