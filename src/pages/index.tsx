import { promises as fs } from 'fs';
import path from 'path';
import type { Layout } from 'next/app';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';

import { postsDirectory } from '@configs';

import Feed from '@blog/screens/Feed';
import { Props } from '@blog/screens/Feed/types';

const Home: Layout<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Latest posts - Hélcio Franco</title>
      </Head>
      <Feed posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filenames = await fs.readdir(postsDirectory);

  const posts = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = await fs.readFile(filePath, 'utf8');

    const { frontmatter } = await serialize(fileContents, {
      parseFrontmatter: true,
    });

    return {
      slug: filename.replace('.mdx', ''),
      title: frontmatter?.title ?? '',
      authorName: frontmatter?.authorName ?? '',
      authorImageSrc: frontmatter?.authorImageSrc ?? '',
      readTime: parseInt(frontmatter?.readTime ?? '0', 10),
      createdAt: parseInt(frontmatter?.createdAt ?? '0', 10),
    };
  });

  return {
    props: {
      posts: await Promise.all(posts),
    },
  };
};

export default Home;
