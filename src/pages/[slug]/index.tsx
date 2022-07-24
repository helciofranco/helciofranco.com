import { promises as fs } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { ReactElement } from 'react';
import Head from 'next/head';
import type { Layout } from 'next/app';
import type { GetStaticPaths, GetStaticProps } from 'next';

import { postsDirectory } from '@configs';

import Post from '@blog/screens/Post';
import ScrollIndicator from '@layouts/ScrollIndicator';

type Paths = {
  slug: string;
};

type Params = {
  seo: {
    title: string;
  };
  post: {
    title: string;
    authorName: string;
    authorImageSrc: string;
    readTime: number;
    createdAt: number;
  };
  compiledSource: string;
};

const Slug: Layout<Params> = ({ seo, post, compiledSource }) => {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
      </Head>
      <Post
        title={post.title}
        compiledSource={compiledSource}
        authorName={post.authorName}
        authorImageSrc={post.authorImageSrc}
        readTime={post.readTime}
        createdAt={post.createdAt}
      />
    </>
  );
};

Slug.getLayout = (page: ReactElement) => {
  return <ScrollIndicator>{page}</ScrollIndicator>;
};

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
      post: {
        title: postTitle,
        authorName: frontmatter?.authorName ?? '',
        authorImageSrc: frontmatter?.authorImageSrc ?? '',
        readTime: parseInt(frontmatter?.readTime ?? '0', 10),
        createdAt: parseInt(frontmatter?.createdAt ?? '0', 10),
      },
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
