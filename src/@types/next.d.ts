import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

declare module 'next/app' {
  export type Layout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };

  export type AppPropsWithLayout = AppProps & {
    Component: Layout;
  };
}
