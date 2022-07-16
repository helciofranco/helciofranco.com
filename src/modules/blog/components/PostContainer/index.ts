import { styled } from '@libs/stitches';

const PostContainer = styled('article', {
  // Header and subheaders
  ['& h1, h2, h3']: {
    fontWeight: '$bold',
  },
  // Spacing between subheaders and paragraphs
  ['& h2, h3, p']: {
    marginBottom: '$space10',
  },
});

export default PostContainer;
