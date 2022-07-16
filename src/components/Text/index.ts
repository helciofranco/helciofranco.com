import { styled } from '@libs/stitches';

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
      interactive: {
        color: '$textInteractive',
      },
    },
    // Font-size
    variant: {
      h1: {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      h2: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      h3: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      body: {
        fontSize: '$base',
        lineHeight: '$base',
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
