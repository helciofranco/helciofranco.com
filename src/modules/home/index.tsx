import Box from '@components/Box';
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
    </Box>
  );
};

export default Home;
