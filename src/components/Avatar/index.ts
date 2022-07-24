import { styled } from '@libs/stitches';

const Avatar = styled('img', {
  borderRadius: '$full',
  variants: {
    size: {
      xs: {
        width: 24,
        height: 24,
      },
      sm: {
        width: 144,
        height: 144,
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

export default Avatar;
