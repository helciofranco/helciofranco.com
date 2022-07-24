import { useState } from 'react';
import Link from 'next/link';

import Text from '@components/Text';

import PostInfo from '@blog/components/PostInfo';

import { Highlight, PostContainer } from './styles';
import { Props } from './types';

const Post = ({ slug, title }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <article>
      <Link href={slug} passHref>
        <PostContainer
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <Text
            variant="body"
            as="h3"
            color="tertiary"
            css={{ fontWeight: '$bold', marginBottom: '$space3' }}
          >
            {title}
          </Text>
          <PostInfo />

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
    </article>
  );
};

export default Post;
