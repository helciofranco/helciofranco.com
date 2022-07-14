import Box from '@components/Box';
import Avatar from '@components/Avatar';
import Text from '@components/Text';

/**
 * @TODO: Detect and display my current country (based probably Nomadlist API)
 */

const AboutMe = () => {
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}
    >
      <Box css={{ maxWidth: 600, marginRight: '$space16' }}>
        <Text
          variant="h4"
          css={{ fontWeight: '$bold', marginBottom: '$space2' }}
        >
          Hélcio Franco 🇧🇷
        </Text>
        <Text variant="body" css={{ marginBottom: '$space7' }}>
          Tech Lead at{' '}
          <Text as="span" css={{ fontWeight: '$medium' }}>
            TradersClub (TC)
          </Text>
        </Text>
        <Text variant="body" color="secondary">
          Helping developers to create a better web.
          <br />I talk about developer experience with code.
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
