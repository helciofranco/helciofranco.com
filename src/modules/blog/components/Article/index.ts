import { styled } from '@libs/stitches';

const Article = styled('article', {
  ['& h1, h2, h3']: {
    fontWeight: '$bold',
  },
  ['& h2, h3, p']: {
    marginBottom: '$space10',
  },
});

export default Article;
