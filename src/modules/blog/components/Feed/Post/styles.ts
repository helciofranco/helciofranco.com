import { styled } from '@libs/stitches';
import { motion } from 'framer-motion';

export const PostContainer = styled(motion.a, {
  position: 'relative',
  display: 'block',

  paddingTop: '$space5',
  paddingBottom: '$space5',

  transitionProperty: 'color',
  transitionTimingFunction: 'cubic-bezier(.4,0,1,1)',
  transitionDuration: '0.1s',

  color: '$textPrimary',
  '&:hover': {
    color: '$textInteractive',
  },

  // Headers
  ['& h3']: {
    fontWeight: '$bold',
    marginBottom: '$space3',
  },
});

export const Highlight = styled(motion.div, {
  position: 'absolute',

  backgroundColor: '$backgroundTertiary',
  borderRadius: '$md',

  top: 0,
  left: -20,
  right: -20,
  bottom: 0,
});
