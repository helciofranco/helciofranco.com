import Footer from './Footer';
import Header from './Header';

import { Body } from './styles';
import { Props } from './types';

const Base = ({ children }: Props) => {
  return (
    <Body>
      <Header />
      <main>{children}</main>
      <Footer />
    </Body>
  );
};

export default Base;
