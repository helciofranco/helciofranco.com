import Box from '@components/Box';
import Separator from '@components/Separator';
import Text from '@components/Text';

import AboutMe from '@blog/components/AboutMe';

const Feed = () => {
  return (
    <Box>
      <AboutMe />

      <Separator space="regular" />

      <Text>latest posts here :)</Text>
    </Box>
  );
};

export default Feed;
