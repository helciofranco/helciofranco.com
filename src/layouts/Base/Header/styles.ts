import { motion } from 'framer-motion';

import { styled } from '@libs/stitches';

export const Container = styled('header', {
  marginTop: '$space14',
  marginBottom: '$space14',
});

export const Ul = styled('ul', {
  display: 'flex',
});

export const Anchor = styled('a', {
  position: 'relative',
  display: 'block',

  transitionProperty: 'color',
  transitionTimingFunction: 'cubic-bezier(.4,0,1,1)',
  transitionDuration: '0.1s',

  fontSize: '$sm',
  fontWeight: '$medium',

  color: '$textSecondary',
  '&:hover': {
    color: '$textPrimary',
  },

  variants: {
    active: {
      true: {
        color: '$textPrimary',
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const Item = styled(motion.span, {
  display: 'inline-block',

  paddingTop: '$space5',
  paddingBottom: '$space5',
  paddingLeft: '$space5',
  paddingRight: '$space5',
});

export const ItemBackground = styled(motion.span, {
  position: 'absolute',

  top: 0,
  bottom: 0,
  left: 0,
  right: 0,

  backgroundColor: '$backgroundTertiary',

  borderRadius: '$sm',
  zIndex: -1,
});
