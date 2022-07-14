import { styled } from '@libs/stitches';

export const Ul = styled('ul', {
  display: 'flex',
  justifyContent: 'center',
});

export const Item = styled('a', {
  padding: '$space5',
  color: '$textPrimary',
  '&:hover': {
    color: '$textHighlight',
  },
});
