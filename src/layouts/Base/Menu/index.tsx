import Link from 'next/link';
import { Item, Ul } from './styles';

const Menu = () => {
  return (
    <nav>
      <Ul>
        <li>
          <Link href="Home" passHref>
            <Item>Home</Item>
          </Link>
        </li>
        <li>
          <Link href="Home" passHref>
            <Item>Blog</Item>
          </Link>
        </li>
        <li>
          <Link href="Home" passHref>
            <Item>Tools</Item>
          </Link>
        </li>
        <li>
          <Link href="Home" passHref>
            <Item>Setup</Item>
          </Link>
        </li>
      </Ul>
    </nav>
  );
};

export default Menu;
