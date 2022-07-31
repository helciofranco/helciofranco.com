import Card from '@components/Card';
import Code from '@components/Code';
import Link from '@components/Link';
import Text from '@components/Text';

import Ul from '@components/List/Ul';
import Li from '@components/List/Li';

import { MDXRemote } from 'next-mdx-remote';
import { MDXComponents } from 'mdx/types';

import PostContainer from '@blog/components/Details/PostContainer';
import PostInfo from '@blog/components/Details/PostInfo';

import { Props } from './types';
import Snippet from '@components/Snippet';

const components: MDXComponents = {
  h1: ({ children }) => (
    <Text variant="h1" as="h1">
      {children}
    </Text>
  ),
  h2: ({ children }) => (
    <Text variant="h2" as="h2">
      {children}
    </Text>
  ),
  h3: ({ children }) => (
    <Text variant="h3" as="h3">
      {children}
    </Text>
  ),
  p: ({ children }) => <Text>{children}</Text>,
  code: ({ children }) => <Code>{children}</Code>,
  ul: ({ children }) => <Ul variant="primary">{children}</Ul>,
  li: ({ children }) => <Li>{children}</Li>,
  a: ({ children, href }) => <Link href={href ?? ``}>{children}</Link>,
  Card,
  Snippet,
};

const Post = ({
  title,
  compiledSource,
  authorName,
  authorImageSrc,
  readtime,
  createdAt,
}: Props) => {
  return (
    <PostContainer>
      <Text variant="h1" as="h1">
        {title}
      </Text>

      <PostInfo
        showAuthor
        authorName={authorName}
        authorImageSrc={authorImageSrc}
        readtime={readtime}
        createdAt={createdAt}
      />

      <MDXRemote compiledSource={compiledSource} components={components} />
    </PostContainer>
  );
};

export default Post;
