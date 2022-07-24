import { styled } from '@libs/stitches';
import { motion } from 'framer-motion';

export const Container = styled(motion.div, {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: 3,
  backgroundColor: '$textInteractive',
  transformOrigin: '0%',
});
