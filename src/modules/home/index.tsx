import Box from '@components/Box';
import Card from '@components/Card';
import Text from '@components/Text';

const Home = () => {
  return (
    <Box>
      <Text variant="h1">h1. Headline</Text>
      <Text variant="h2">h2. Headline</Text>
      <Text variant="h3">h3. Headline</Text>
      <Text variant="h4">h4. Headline</Text>
      <Text variant="h5">h5. Headline</Text>
      <Text variant="h6">h6. Headline</Text>

      <Text color="secondary">
        Everything you need to learn{' '}
        <Text color="highlight" as="span">
          TypeScript
        </Text>{' '}
        in just 4 minutes
      </Text>

      <Text color="secondary" variant="h6" serif>
        The quick brown fox jumps over the lazy dog.
      </Text>

      <Card css={{ marginTop: '$space6' }}>
        <Text
          variant="h6"
          css={{ marginBottom: '$space6', fontWeight: '$bold' }}
        >
          You will learn
        </Text>
        <Text>List here.</Text>
      </Card>
    </Box>
  );
};

export default Home;
