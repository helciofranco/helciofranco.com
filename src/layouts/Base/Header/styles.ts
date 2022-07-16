import { styled } from '@libs/stitches';

export const Container = styled('header', {
  marginTop: '$space14',
  marginBottom: '$space14',
});

export const Ul = styled('ul', {
  display: 'flex',
  justifyContent: 'center',
  gridColumnGap: '10px',
});

export const Item = styled('a', {
  display: 'block',
  padding: '$space5',

  backgroundColor: '$backgroundSecondary',
  color: '$textPrimary',
  borderRadius: '$sm',

  fontSize: '$xs',
  fontWeight: '$medium',

  '&:hover': {
    backgroundColor: '$backgroundTertiary',
  },
});
