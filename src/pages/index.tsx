import { promises as fs } from 'fs';
import path from 'path';
import readingTime from 'reading-time';
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

  const postsToParse = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = await fs.readFile(filePath, 'utf8');

    const { frontmatter } = await serialize(fileContents, {
      parseFrontmatter: true,
    });
    const { text: readtime } = readingTime(fileContents);

    return {
      slug: filename.replace('.mdx', ''),
      title: frontmatter?.title ?? '',
      authorName: frontmatter?.authorName ?? '',
      authorImageSrc: frontmatter?.authorImageSrc ?? '',
      readtime,
      createdAt: parseInt(frontmatter?.createdAt ?? '0', 10),
    };
  });

  const posts = await Promise.all(postsToParse);

  return {
    props: {
      posts: posts.sort((post1, post2) =>
        post1.createdAt > post2.createdAt ? -1 : 1
      ),
    },
  };
};

export default Home;
