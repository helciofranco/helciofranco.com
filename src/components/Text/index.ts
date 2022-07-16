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
        fontSize: '$7xl',
        lineHeight: '$7xl',
      },
      h2: {
        fontSize: '$6xl',
        lineHeight: '$6xl',
      },
      h3: {
        fontSize: '$5xl',
        lineHeight: '$5xl',
      },
      h4: {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },
      h5: {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },
      h6: {
        fontSize: '$2xl',
        lineHeight: '$2xl',
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
