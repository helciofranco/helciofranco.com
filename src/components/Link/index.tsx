import NextLink from 'next/link';

import { styled } from '@libs/stitches';
import Text from '@components/Text';

import { Props } from './types';

export const CustomText = styled(Text, {
  display: 'inline',

  transitionProperty: 'border-color',
  transitionTimingFunction: 'cubic-bezier(.4,0,1,1)',
  transitionDuration: '0.1s',

  borderBottomStyle: 'solid',
  borderBottomWidth: '1px',
  borderBottomColor: 'transparent',

  '&:hover': {
    borderBottomColor: '$textInteractive',
  },
});

const Link = ({ children, ...props }: Props) => {
  return (
    <NextLink {...props} prefetch={false} passHref>
      <CustomText as="a" color="interactive">
        {children}
      </CustomText>
    </NextLink>
  );
};

export default Link;
