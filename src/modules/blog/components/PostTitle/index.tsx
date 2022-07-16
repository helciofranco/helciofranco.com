import Text from '@components/Text';

import { Props } from './types';

const PostTitle = ({ children }: Props) => {
  return (
    <Text
      variant="h5"
      as="h1"
      css={{ textAlign: 'center', fontWeight: '$medium' }}
    >
      {children}
    </Text>
  );
};

export default PostTitle;
