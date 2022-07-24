import { styled } from '@libs/stitches';
import { motion } from 'framer-motion';

export const PostContainer = styled(motion.a, {
  position: 'relative',
  display: 'block',

  paddingTop: '$space5',
  paddingBottom: '$space5',
});

export const Highlight = styled(motion.div, {
  position: 'absolute',
  zIndex: -1,

  backgroundColor: '$backgroundSecondary',
  borderRadius: '$md',

  top: 0,
  left: -20,
  right: -20,
  bottom: 0,
});
