import { styled } from '@libs/stitches';

export const Pre = styled('pre', {
  padding: '$space5',
  borderRadius: '$md',

  '@lg': {
    marginLeft: -24,
    marginRight: -24,
    padding: '$space10',
  },

  backgroundColor: '$backgroundSecondary',
  color: '$textPrimary',
});

export const Token = styled('div');

export const Line = styled('span');
