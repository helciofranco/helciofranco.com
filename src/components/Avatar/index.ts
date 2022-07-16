import { styled } from '@libs/stitches';

const Avatar = styled('img', {
  borderRadius: '$full',
  variants: {
    size: {
      xs: {
        width: 24,
        height: 24,
      },
      md: {
        width: 120,
        height: 120,
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

export default Avatar;
