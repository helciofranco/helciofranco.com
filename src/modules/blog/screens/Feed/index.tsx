import Box from '@components/Box';
import Card from '@components/Card';
import Code from '@components/Code';
import Separator from '@components/Separator';
import Text from '@components/Text';

import AboutMe from '@blog/components/AboutMe';
import Ul from '@components/List/Ul';
import Li from '@components/List/Li';

import Title from '@blog/components/Title';

const Feed = () => {
  return (
    <Box>
      <AboutMe />

      <Separator css={{ marginTop: '$space11', marginBottom: '$space11' }} />

      <Title>
        Using getStaticProps and getStaticPaths with TypeScript on Next.js
      </Title>

      <br />
      <br />
      <br />
      <br />
      <br />

      <Text css={{ marginBottom: '$space10' }}>
        Let's say you have a <Code variant="secondary">PackingList</Code>{' '}
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

        <Ul>
          <Li>How to create and nest components</Li>
        </Ul>
      </Card>
    </Box>
  );
};

export default Feed;
