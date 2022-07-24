import Separator from '@components/Separator';

import AboutMe from '@blog/components/AboutMe';

import Post from '@blog/components/Feed/Post';

const Feed = () => {
  return (
    <>
      <AboutMe />

      <Separator space="regular" />

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
