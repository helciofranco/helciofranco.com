import { styled } from '@libs/stitches';
import space from '@libs/stitches/space';

export const Container = styled('footer', {
  marginTop: '$space14',
  marginBottom: '$space14',
  display: 'flex',
  gridColumnGap: space.space10,
});

export const Item = styled('a', {
  paddingTop: '$space5',
  paddingBottom: '$space5',

  fontSize: '$xs',
  fontWeight: '$medium',

  transitionProperty: 'color',
  transitionTimingFunction: 'cubic-bezier(.4,0,1,1)',
  transitionDuration: '0.1s',

  color: '$textTertiary',

  '&:hover': {
    color: '$textPrimary',
  },
});
