import Box from '@components/Box';
import Avatar from '@components/Avatar';
import Text from '@components/Text';

const AboutMe = () => {
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}
    >
      <Box css={{ maxWidth: 600, paddingRight: '$space16' }}>
        <Text
          variant="h4"
          css={{ fontWeight: '$bold', marginBottom: '$space1' }}
        >
          Hélcio Franco 🇧🇷
        </Text>
        <Text variant="body" css={{ marginBottom: '$space3' }}>
          Tech Lead at{' '}
          <Text as="span" css={{ fontWeight: '$medium' }}>
            TradersClub (TC)
          </Text>
        </Text>
        <Text variant="body" color="secondary">
          Helping developers to create a better web.
          <br />I talk about developer experience with code and words.
        </Text>
      </Box>

      <Avatar
        src="https://avatars.githubusercontent.com/u/7074983?v=4"
        size="medium"
      />
    </Box>
  );
};

export default AboutMe;
