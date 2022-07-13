import { styled } from '@libs/stitches';

const Avatar = styled('img', {
  borderRadius: '$full',
  variants: {
    size: {
      small: {
        width: 56,
        height: 56,
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

export default Avatar;
