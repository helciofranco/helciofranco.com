import { styled } from '@libs/stitches';

const Separator = styled('hr', {
  margin: '$none',
  background: '$borderPrimary',
  border: 'none',
  height: 1,
  variants: {
    space: {
      regular: {
        marginTop: '$space14',
        marginBottom: '$space14',
      },
    },
  },
  defaultVariants: {
    space: 'regular',
  },
});

export default Separator;
