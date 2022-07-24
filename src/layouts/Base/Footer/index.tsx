import Link from 'next/link';
import { Container, Item } from './styles';

const Footer = () => {
  return (
    <Container>
      <Link
        href="https://github.com/helciofranco/helciofranco.com"
        target="_blank"
        passHref
      >
        <Item>source</Item>
      </Link>
      <Link href="https://github.com/helciofranco" target="_blank" passHref>
        <Item>github</Item>
      </Link>
      <Link
        href="https://www.linkedin.com/in/helciofranco/"
        target="_blank"
        passHref
      >
        <Item>linkedin</Item>
      </Link>
      <Link
        href="https://www.instagram.com/helciofranco/"
        target="_blank"
        passHref
      >
        <Item>instagram</Item>
      </Link>
    </Container>
  );
};

export default Footer;
