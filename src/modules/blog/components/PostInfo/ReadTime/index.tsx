import Text from '@components/Text';

import { Props } from './types';

const ReadTime = ({ children }: Props) => {
  return (
    <Text variant="body" color="secondary">
      ☕ {children}
    </Text>
  );
};

export default ReadTime;
