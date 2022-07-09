import { styled } from '@libs/stitches';

const Button = styled('button', {
  backgroundColor: '$gray400',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

export default Button;
