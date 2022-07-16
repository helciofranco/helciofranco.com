import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';

import Post from '@blog/screens/Post';

type Params = {
  slug: string;
};

const Slug = ({ slug }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>

      <Post />
    </>
  );
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
