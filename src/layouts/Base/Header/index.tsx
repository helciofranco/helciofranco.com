import Link from 'next/link';
import { Container, Item, Ul } from './styles';

const Header = () => {
  return (
    <Container>
      <nav>
        <Ul>
          <li>
            <Link href="/" passHref>
              <Item>HOME</Item>
            </Link>
          </li>
          <li>
            <Link href="/testing" passHref>
              <Item>BLOG</Item>
            </Link>
          </li>
          <li>
            <Link href="/testing-2" passHref>
              <Item>TOOLS</Item>
            </Link>
          </li>
          <li>
            <Link href="/testing-3" passHref>
              <Item>SETUP</Item>
            </Link>
          </li>
        </Ul>
      </nav>
    </Container>
  );
};

export default Header;
