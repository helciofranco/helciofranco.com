import Avatar from '@components/Avatar';
import Box from '@components/Box';
import Text from '@components/Text';

import { Container } from './styles';
import { Props } from './types';

const PostInfo = ({ showAuthor = false }: Props) => {
  return (
    <Container>
      {showAuthor && (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar
            src="https://avatars.githubusercontent.com/u/7074983?v=4"
            size="xs"
          />

          <Box
            css={{
              marginLeft: '$space4',
            }}
          >
            <Text color="secondary" as="span">
              Hélcio Franco
            </Text>
          </Box>
        </Box>
      )}

      <div>
        <Text color="secondary" as="time" dateTime="2022-07-12T16:02:33.758Z">
          📌 Jul 14, 2022
        </Text>
        <Text
          color="secondary"
          as="span"
          css={{ marginLeft: '$space5', marginRight: '$space5' }}
        >
          •
        </Text>
        <Text color="secondary" as="span">
          ☕ 5 minutes
        </Text>
      </div>
    </Container>
  );
};

export default PostInfo;
