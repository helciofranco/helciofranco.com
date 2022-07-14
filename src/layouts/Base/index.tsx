import Menu from './Menu';
import { FooterContainer, HeaderContainer, Body } from './styles';
import { Props } from './types';

const Base = ({ children }: Props) => {
  return (
    <Body>
      <HeaderContainer>
        <Menu />
      </HeaderContainer>

      <main>{children}</main>

      <FooterContainer>Footer</FooterContainer>
    </Body>
  );
};

export default Base;
