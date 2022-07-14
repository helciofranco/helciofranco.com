import Text from '@components/Text';

import { Props } from './types';

const Date = ({ datetime, children }: Props) => {
  return (
    <Text variant="body" color="secondary" as="time" dateTime={datetime}>
      📌 {children}
    </Text>
  );
};

export default Date;
