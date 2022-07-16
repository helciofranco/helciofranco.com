import { styled } from '@libs/stitches';

import { Container as PostInfoContainer } from '@blog/components/PostInfo/styles';

const PostContainer = styled('article', {
  // Header and subheaders, default for everyone
  ['& h1, h2, h3']: {
    fontWeight: '$bold',
  },

  // Default PostInfo spacing
  [`& ${PostInfoContainer}`]: {
    marginTop: '$space2',
  },

  variants: {
    marginBottom: {
      // Usually used on feed
      sm: {
        // PostInfo spacing
        [`& ${PostInfoContainer}`]: {
          marginBottom: '$space4',
        },

        // Spacing between subheaders and paragraphs
        ['& h2, h3, p']: {
          marginBottom: '$space0',
        },
      },

      // Usually used on posts
      regular: {
        // PostInfo spacing
        [`& ${PostInfoContainer}`]: {
          marginBottom: '$space16',
        },

        // Spacing between subheaders and paragraphs
        ['& h2, h3, p']: {
          marginBottom: '$space10',
        },
      },
    },
  },
  defaultVariants: {
    marginBottom: 'regular',
  },
});

export default PostContainer;
