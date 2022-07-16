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
        fontWeight: '$bold',
      },
      h2: {
        fontSize: '$xl',
        lineHeight: '$xl',
        fontWeight: '$bold',
      },
      h3: {
        fontSize: '$lg',
        lineHeight: '$lg',
        fontWeight: '$bold',
      },
      body: {
        fontSize: '$base',
        lineHeight: '$base',
        fontWeight: '$regular',
      },
    },
    // Serif
    serif: {
      true: {
        fontFamily: '$serif',
      },
    },
    // Margin bottom
    marginBottom: {
      true: {
        marginBottom: '$space10',
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
