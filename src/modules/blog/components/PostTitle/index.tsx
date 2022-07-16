import Text from '@components/Text';

import { Props } from './types';

const PostTitle = ({ children }: Props) => {
  return (
    <Text variant="h1" as="h1">
      {children}
    </Text>
  );
};

export default PostTitle;
