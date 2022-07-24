import Text from '@components/Text';

import AboutMe from '@blog/components/AboutMe';
import Post from '@blog/components/Feed/Post';

import { Props } from './types';

const Feed = ({ posts }: Props) => {
  return (
    <>
      <AboutMe />

      <Text
        variant="h3"
        css={{ marginTop: '$space15', marginBottom: '$space5' }}
      >
        Latest posts
      </Text>

      {posts.map((post) => (
        <Post
          key={post.slug}
          slug={post.slug}
          title={post.title}
          authorName={post.authorName}
          authorImageSrc={post.authorImageSrc}
          createdAt={post.createdAt}
          readtime={post.readtime}
        />
      ))}
    </>
  );
};

export default Feed;
