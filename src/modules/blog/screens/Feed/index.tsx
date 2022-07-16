import Box from '@components/Box';
import Card from '@components/Card';
import Code from '@components/Code';
import Separator from '@components/Separator';
import Text from '@components/Text';

import AboutMe from '@blog/components/AboutMe';
import Ul from '@components/List/Ul';
import Li from '@components/List/Li';

import PostTitle from '@blog/components/PostTitle';
import PostInfo from '@blog/components/PostInfo';
import Link from '@components/Link';

const Feed = () => {
  return (
    <Box>
      <AboutMe />

      <Separator space="regular" />

      <PostTitle>
        How I built my blog with NextJS, Typescript and Stitches
      </PostTitle>

      <PostInfo />

      <Text variant="h2" css={{ fontWeight: '$bold' }} marginBottom>
        The stack
      </Text>

      <Text marginBottom>
        This blog is a <Link href="aaaaa">Next.js application</Link>.
      </Text>

      <Text marginBottom>
        With Next, you have a few different options when it comes to page
        rendering: you can choose to do it “on-demand” (
        <b>server-side rendering</b>) or ahead of time (
        <b>static site generation</b>). I&rsquo;ve opted to build all the blog
        posts ahead of time, when the site is generated.
      </Text>

      <Text marginBottom>
        I also use Next&rsquo;s API Routes for things that require persistence
        in the backend. I use MongoDB as my database, to store stuff like the #
        of likes each post has.
      </Text>

      <Text marginBottom>
        I deploy this blog on Vercel. I initially chose them because
        they&rsquo;re the company behind Next.js, and I figured it would be
        well-optimized. Honestly, their platform is awesome. I wound up moving
        some of my non-Next projects there as well.
      </Text>

      <Text marginBottom>
        When it comes to the styling, I use styled-components, and write all the
        styles from scratch. I don&rsquo;t use any &rdquo;cosmetic&rdquo;
        libraries like Bootstrap (and I don&rsquo;t think you should either). I
        do use Reach UI for things like modals, though.
      </Text>

      <Text marginBottom>
        For animation, I mainly rely on React Spring, though I&rsquo;ve started
        dabbling with Framer Motion recently.
      </Text>

      <Text marginBottom>But the most critical part of my stack is MDX.</Text>

      <Text marginBottom>
        Lets say you have a <Code variant="secondary">PackingList</Code>{' '}
        component rendering several Items, which can be marked as packed or not:
      </Text>

      <Text color="secondary" serif marginBottom>
        The quick brown fox jumps over the lazy dog. <Code>if</Code> and{' '}
        <Code>{'&&'}</Code>
      </Text>

      <Text serif marginBottom>
        The quick brown fox jumps over the lazy dog.
      </Text>

      <Text color="interactive" serif marginBottom>
        The quick brown fox jumps over the lazy dog.
      </Text>

      <Card>
        <Text variant="h3" marginBottom css={{ fontWeight: '$bold' }}>
          You will learn <Code>if</Code> and <Code>{'&&'}</Code>
        </Text>

        <Ul variant="primary">
          <Li>How to create and nest components</Li>
          <Li>How to create and nest components</Li>
          <Li>How to create and nest components</Li>
          <Li>How to create and nest components</Li>
          <Li>How to create and nest components</Li>
        </Ul>
      </Card>
    </Box>
  );
};

export default Feed;
