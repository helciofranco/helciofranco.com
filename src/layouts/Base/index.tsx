import { Wrapper } from './styles';
import { Props } from './types';

const Base = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Base;
