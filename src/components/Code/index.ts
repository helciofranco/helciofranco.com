import { styled } from '@libs/stitches';

const Code = styled('code', {
  fontWeight: '$regular',

  borderRadius: '$md',

  paddingTop: '$one',
  paddingBottom: '$one',
  paddingLeft: '$space2',
  paddingRight: '$space2',

  variants: {
    variant: {
      primary: {
        color: '$textTertiary',
        backgroundColor: '$backgroundTertiary',
      },
      secondary: {
        color: '$textCode',
        backgroundColor: '$backgroundCode',
        border: '1px solid',
        borderColor: '$borderCode',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export default Code;
