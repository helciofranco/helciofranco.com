import { styled } from '@libs/stitches';

export const Container = styled('footer', {
  marginTop: '$space14',
  display: 'flex',
  justifyContent: 'center',
  gridColumnGap: '10px',
});

export const Item = styled('a', {
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