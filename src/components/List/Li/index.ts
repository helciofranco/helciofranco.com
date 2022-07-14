import { styled } from '@libs/stitches';

const Li = styled('li', {
  '&:before': {
    content: '•',
    paddingRight: '$space3',
  },
});

export default Li;
