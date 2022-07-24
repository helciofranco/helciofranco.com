import { styled } from '@libs/stitches';

import { Container as PostInfoContainer } from '@blog/components/PostInfo/styles';

const PostContainer = styled('article', {
  // Spacing between subheaders and paragraphs
  ['& h2, h3, p']: {
    marginBottom: '$space10',
  },

  // PostInfo spacing
  [`& ${PostInfoContainer}`]: {
    marginTop: '$space2',
    marginBottom: '$space16',
  },
});

export default PostContainer;
