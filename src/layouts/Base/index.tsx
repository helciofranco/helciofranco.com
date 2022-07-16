import Footer from './Footer';
import Header from './Header';

import { Props } from './types';

const Base = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Base;
