import { useScroll } from 'framer-motion';

import { Container } from './styles';

const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <Container
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ProgressIndicator;
