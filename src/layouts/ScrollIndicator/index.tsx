import Footer from '@layouts/Base/Footer';
import Header from '@layouts/Base/Header';

import ProgressIndicator from './ProgressIndicator';
import { Props } from './types';

const ScrollIndicator = ({ children }: Props) => {
  return (
    <>
      <ProgressIndicator />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ScrollIndicator;
