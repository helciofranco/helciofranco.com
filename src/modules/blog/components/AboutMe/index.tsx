import Box from '@components/Box';
import Avatar from '@components/Avatar';
import Text from '@components/Text';

/**
 * @TODO: Detect and display my current country (based probably Nomadlist API)
 */

const AboutMe = () => {
  return (
    <Box
      as="aside"
      css={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Avatar
        src="https://avatars.githubusercontent.com/u/7074983?v=4"
        size="sm"
      />

      <Box css={{ marginLeft: '$space16' }}>
        <Text
          variant="h1"
          as="h1"
          css={{ fontWeight: '$medium', marginBottom: '$space2' }}
        >
          Hélcio Franco 🇧🇷
        </Text>
        <Text as="h2" variant="body" css={{ marginBottom: '$space7' }}>
          Tech Lead at TradersClub (TC).
        </Text>
        <Text variant="body" color="secondary">
          Helping developers to create a better web.
          <br />I talk about developer experience with code.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutMe;
