import Avatar from '@components/Avatar';
import Box from '@components/Box';
import Text from '@components/Text';

import { Container } from './styles';
import { Props } from './types';

const PostInfo = ({
  showAuthor = false,
  authorName,
  authorImageSrc,
  readtime,
  createdAt,
}: Props) => {
  return (
    <Container>
      {showAuthor && (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar src={authorImageSrc} size="xs" />

          <Box
            css={{
              marginLeft: '$space4',
            }}
          >
            <Text color="tertiary" as="span">
              {authorName}
            </Text>
          </Box>
        </Box>
      )}

      <div>
        <Text color="tertiary" as="time" dateTime="2022-07-12T16:02:33.758Z">
          📌 {createdAt}
        </Text>
        <Text
          color="tertiary"
          as="span"
          css={{ marginLeft: '$space5', marginRight: '$space5' }}
        >
          •
        </Text>
        <Text color="tertiary" as="span">
          ☕ {readtime}
        </Text>
      </div>
    </Container>
  );
};

export default PostInfo;
