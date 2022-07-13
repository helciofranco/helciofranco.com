import Box from '@components/Box';
import Card from '@components/Card';
import Code from '@components/Code';
import Link from '@components/Link';
import Separator from '@components/Separator';
import Text from '@components/Text';

import AboutMe from '@blog/components/AboutMe';

const Feed = () => {
  return (
    <Box>
      <AboutMe />

      <Separator css={{ marginTop: '$space11', marginBottom: '$space11' }} />

      <Text css={{ marginBottom: '$space10' }}>
        Let’s say you have a <Code variant="secondary">PackingList</Code>{' '}
        component rendering several Items, which can be marked as packed or not:
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
          <li>
            How to display data <Link href="https://google.com">Testing</Link>
          </li>
          <li>How to render conditions and lists</li>
          <li>How to respond to events and update the screen</li>
          <li>How to share data between components</li>
        </ul>
      </Card>
    </Box>
  );
};

export default Feed;
