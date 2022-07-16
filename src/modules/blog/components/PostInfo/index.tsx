import Box from '@components/Box';
import Text from '@components/Text';

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
      <Text color="secondary" as="time" dateTime="2022-07-12T16:02:33.758Z">
        📌 Jul 14, 2022
      </Text>
      <Text
        color="secondary"
        as="span"
        css={{ marginLeft: '$space5', marginRight: '$space5' }}
      >
        •
      </Text>
      <Text color="secondary" as="span">
        ☕ 5 minutes
      </Text>
    </Box>
  );
};

export default PostInfo;
