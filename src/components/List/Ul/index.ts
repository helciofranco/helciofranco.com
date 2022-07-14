import { styled } from '@libs/stitches';

const Ul = styled('ul', {
  variants: {
    variant: {
      primary: {
        color: '$textPrimary',
      },
      secondary: {
        color: '$textSecondary',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export default Ul;
