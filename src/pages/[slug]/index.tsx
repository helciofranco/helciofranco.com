import { promises as fs } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ReactElement } from 'react';
import Head from 'next/head';
import type { Layout } from 'next/app';
import type { GetStaticPaths, GetStaticProps } from 'next';

import Post from '@blog/screens/Post';
import ScrollIndicator from '@layouts/ScrollIndicator';

type Paths = {
  slug: string;
};

type Params = {
  seo: {
    title: string;
  };
  title: string;
  compiledSource: string;
};

const Slug: Layout<Params> = ({ seo, title, compiledSource }) => {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
      </Head>
      <Post title={title} compiledSource={compiledSource} />
    </>
  );
};

Slug.getLayout = (page: ReactElement) => {
  return <ScrollIndicator>{page}</ScrollIndicator>;
};

const postsDirectory = path.join(process.cwd(), 'posts');

export const getStaticProps: GetStaticProps<Params> = async ({ params }) => {
  const filePath = path.join(postsDirectory, `${params?.slug as string}.mdx`);
  const fileContents = await fs.readFile(filePath, 'utf8');

  const { compiledSource, frontmatter } = await serialize(fileContents, {
    parseFrontmatter: true,
  });

  const postTitle = frontmatter?.title ?? '';

  return {
    props: {
      seo: {
        title: `${postTitle} - Hélcio Franco`,
      },
      title: postTitle,
      compiledSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Paths> = async () => {
  const filenames = await fs.readdir(postsDirectory);

  const paths = filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace('.mdx', ''),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Slug;
