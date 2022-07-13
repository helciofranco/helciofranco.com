import Box from '@components/Box';
import Card from '@components/Card';
import Code from '@components/Code';
import Text from '@components/Text';

/**
 * TODO
 * Ver como fazer um card de erro, info, warning e sucesso.
 * Ver como renderizar o editor de código literalmente (igual na doc beta do reactjs).
 * Publishar o primeiro article (sem home ainda).
 */

const Home = () => {
  return (
    <Box>
      <Text variant="h1">h1. Headline</Text>
      <Text variant="h2">h2. Headline</Text>
      <Text variant="h3">h3. Headline</Text>
      <Text variant="h4">h4. Headline</Text>
      <Text variant="h5">h5. Headline</Text>
      <Text variant="h6" css={{ marginBottom: '$space10' }}>
        h6. Headline
      </Text>

      <Text color="secondary" css={{ marginBottom: '$space10' }}>
        Everything you need to learn{' '}
        <Text color="highlight" as="span">
          TypeScript
        </Text>{' '}
        in just 4 minutes <Code>if</Code> and <Code>{'&&'}</Code>
      </Text>

      <Text css={{ marginBottom: '$space10' }}>
        Let’s say you have a <Code>PackingList</Code> component rendering
        several Items, which can be marked as packed or not:
      </Text>

      <Text
        color="secondary"
        variant="h6"
        serif
        css={{ marginBottom: '$space10' }}
      >
        The quick brown fox jumps over the lazy dog. <Code>if</Code> and{' '}
        <Code>{'&&'}</Code>
      </Text>

      <Card css={{ marginTop: '$space6' }}>
        <Text
          variant="h6"
          css={{ marginBottom: '$space6', fontWeight: '$bold' }}
        >
          You will learn <Code>if</Code> and <Code>{'&&'}</Code>
        </Text>

        <ul>
          <li>How to create and nest components</li>
          <li>How to add markup and styles</li>
          <li>How to display data</li>
          <li>How to render conditions and lists</li>
          <li>How to respond to events and update the screen</li>
          <li>How to share data between components</li>
        </ul>
      </Card>
    </Box>
  );
};

export default Home;
