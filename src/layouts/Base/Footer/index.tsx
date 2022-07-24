import Link from 'next/link';
import { Container, Item } from './styles';

const Footer = () => {
  return (
    <Container>
      <Link href="https://github.com/helciofranco" target="_blank" passHref>
        <Item>
          <i className="ri-github-line" /> github
        </Item>
      </Link>
      <Link
        href="https://www.linkedin.com/in/helciofranco/"
        target="_blank"
        passHref
      >
        <Item>
          <i className="ri-linkedin-box-line" /> linkedin
        </Item>
      </Link>
      <Link
        href="https://www.instagram.com/helciofranco/"
        target="_blank"
        passHref
      >
        <Item>
          <i className="ri-instagram-line" /> instagram
        </Item>
      </Link>
    </Container>
  );
};

export default Footer;
