import { styled } from '@libs/stitches';

const Separator = styled('hr', {
  margin: '$none',
  background: '$borderPrimary',
  border: 'none',
  height: 1,
  variants: {
    space: {
      regular: {
        marginTop: '$space11',
        marginBottom: '$space11',
      },
    },
  },
  defaultVariants: {
    space: 'regular',
  },
});

export default Separator;
