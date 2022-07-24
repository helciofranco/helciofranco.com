import { styled } from '@libs/stitches';

const Ul = styled('ul', {
  listStyleType: 'disc',
  marginLeft: '$space10',
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
