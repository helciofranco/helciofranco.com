import Box from '@components/Box';
import Text from '@components/Text';

import Date from '@blog/components/PostInfo/Date';
import ReadTime from '@blog/components/PostInfo/ReadTime';

const PostInfo = () => {
  return (
    <Box
      css={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '$space8',
        marginBottom: '$space14',
      }}
    >
      <Date datetime="2022-07-12T16:02:33.758Z">Jul 14, 2022</Date>
      <Text
        color="secondary"
        css={{ marginLeft: '$space5', marginRight: '$space5' }}
      >
        •
      </Text>
      <ReadTime>5 minutes</ReadTime>
    </Box>
  );
};

export default PostInfo;
