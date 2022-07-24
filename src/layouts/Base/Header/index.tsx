import { useState } from 'react';
import Link from 'next/link';

import { Container, Anchor, Item, ItemBackground, Ul } from './styles';
import { useRouter } from 'next/router';

const pages = [
  {
    path: '/',
    title: 'HOME',
  },
  {
    path: '/tools',
    title: 'TOOLS',
  },
  {
    path: '/setup',
    title: 'SETUP',
  },
];

const Header = () => {
  const { pathname: currentPathname } = useRouter();
  const [hover, setHover] = useState<string>('');

  return (
    <Container>
      <nav>
        <Ul>
          {pages.map(({ path, title }) => {
            const isActive = currentPathname === path;
            const isHovered = hover === path;
            const shouldHighlight = Boolean(
              (isActive && hover === '') || isHovered
            );

            return (
              <li key={title}>
                <Link href={path} passHref>
                  <Anchor active={shouldHighlight}>
                    <Item
                      onHoverStart={() => setHover(path)}
                      onHoverEnd={() => {
                        setHover('');
                      }}
                    >
                      {title}

                      {shouldHighlight && (
                        <ItemBackground
                          layoutId="navHover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </Item>
                  </Anchor>
                </Link>
              </li>
            );
          })}
        </Ul>
      </nav>
    </Container>
  );
};

export default Header;
