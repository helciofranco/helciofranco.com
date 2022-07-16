import Link from 'next/link';

import Box from '@components/Box';
import Separator from '@components/Separator';
import Text from '@components/Text';

import AboutMe from '@blog/components/AboutMe';
import PostContainer from '@blog/components/PostContainer';
import PostInfo from '@blog/components/PostInfo';

const Feed = () => {
  return (
    <>
      <AboutMe />

      <Separator space="regular" />

      <PostContainer marginBottom="sm">
        <Link href="/testing">
          <a>
            <Text variant="h2" as="h3">
              Title example
            </Text>
          </a>
        </Link>
        <PostInfo />
        <Text color="secondary">A small description...</Text>
      </PostContainer>

      <PostContainer marginBottom="sm">
        <Link href="/testing">
          <a>
            <Text variant="h2" as="h3">
              Title example
            </Text>
          </a>
        </Link>
        <PostInfo />
        <Text color="secondary">A small description...</Text>
      </PostContainer>
    </>
  );
};

export default Feed;
