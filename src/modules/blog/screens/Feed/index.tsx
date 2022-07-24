import Text from '@components/Text';

import AboutMe from '@blog/components/AboutMe';

import Post from '@blog/components/Feed/Post';

const Feed = () => {
  return (
    <>
      <AboutMe />

      <Text
        variant="h3"
        css={{ marginTop: '$space15', marginBottom: '$space5' }}
      >
        Latest posts
      </Text>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Feed;
