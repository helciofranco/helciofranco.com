import { styled } from '@libs/stitches';

const Avatar = styled('img', {
  borderRadius: '$full',
  variants: {
    size: {
      small: {
        width: 60,
        height: 60,
      },
      medium: {
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
