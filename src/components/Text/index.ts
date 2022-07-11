import { styled } from '@stitches/react';

const Text = styled('p', {
  margin: '$none',
  variants: {
    // Color
    color: {
      primary: {
        color: '$textPrimary',
      },
      secondary: {
        color: '$textSecondary',
      },
      highlight: {
        color: '$textHighlight',
      },
    },
    // Font-size
    variant: {
      h1: {
        fontSize: '$h1',
        lineHeight: '$h1',
        fontWeight: '$regular',
      },
      h2: {
        fontSize: '$h2',
        lineHeight: '$h2',
        fontWeight: '$regular',
      },
      h3: {
        fontSize: '$h3',
        lineHeight: '$h3',
        fontWeight: '$regular',
      },
      h4: {
        fontSize: '$h4',
        lineHeight: '$h4',
        fontWeight: '$regular',
      },
      h5: {
        fontSize: '$h5',
        lineHeight: '$h5',
        fontWeight: '$regular',
      },
      h6: {
        fontSize: '$h6',
        lineHeight: '$h6',
        fontWeight: '$medium',
      },
      body: {
        fontSize: '$body',
        lineHeight: '$body',
        fontWeight: '$regular',
      },
    },
    // Serif
    serif: {
      true: {
        fontFamily: '$serif',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    variant: 'body',
    serif: false,
  },
});

export default Text;
