import { LinkProps } from 'next/link';

export interface Props extends Omit<LinkProps, 'passHref'> {
  children: React.ReactNode;
}
