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
      tertiary: {
        color: '$textTertiary',
      },
      interactive: {
        color: '$textInteractive',
      },
      inherit: {
        color: 'inherit',
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
