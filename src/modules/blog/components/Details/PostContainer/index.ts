import { styled } from '@libs/stitches';

import { Container as PostInfoContainer } from '@blog/components/Details/PostInfo/styles';

const PostContainer = styled('article', {
  // Spacing between subheaders, paragraphs and snippets
  ['& h2, h3, p, pre']: {
    marginBottom: '$space10',
  },

  // PostInfo spacing
  [`& ${PostInfoContainer}`]: {
    marginTop: '$space2',
    marginBottom: '$space16',
  },
});

export default PostContainer;
