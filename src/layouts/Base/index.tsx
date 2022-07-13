import Menu from './Menu';
import { Header, Wrapper } from './styles';
import { Props } from './types';

const Base = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header>
        <Menu />
      </Header>

      <main>{children}</main>

      <footer>Footer</footer>
    </Wrapper>
  );
};

export default Base;
