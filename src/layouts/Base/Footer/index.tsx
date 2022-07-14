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
        <Item>Source</Item>
      </Link>
      <Link href="https://github.com/helciofranco" target="_blank" passHref>
        <Item>Github</Item>
      </Link>
      <Link
        href="https://www.linkedin.com/in/helciofranco/"
        target="_blank"
        passHref
      >
        <Item>Linkedin</Item>
      </Link>
      <Link
        href="https://www.instagram.com/helciofranco/"
        target="_blank"
        passHref
      >
        <Item>Instagram</Item>
      </Link>
    </Container>
  );
};

export default Footer;
