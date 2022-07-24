import Link from 'next/link';

import Text from '@components/Text';

import PostInfo from '@blog/components/PostInfo';

import { Highlight, PostContainer } from './styles';
import { useState } from 'react';

const Post = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Link href="/testing" passHref>
      <PostContainer
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <article>
          <Text variant="h2" as="h3" color="inherit">
            Title example
          </Text>
          <PostInfo />
          <Text color="secondary">A small description...</Text>
        </article>

        {hovered && (
          <Highlight
            layoutId="feedHighlight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </PostContainer>
    </Link>
  );
};

export default Post;
