import Menu from './Menu';
import { Footer, Header, Wrapper } from './styles';
import { Props } from './types';

const Base = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header>
        <Menu />
      </Header>

      <main>{children}</main>

      <Footer>Footer</Footer>
    </Wrapper>
  );
};

export default Base;
