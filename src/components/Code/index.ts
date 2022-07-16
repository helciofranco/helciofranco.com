import { styled } from '@libs/stitches';

const Code = styled('code', {
  fontWeight: '$regular',
  fontSize: 'inherit',

  borderRadius: '$md',

  paddingTop: '$space1',
  paddingBottom: '$space1',
  paddingLeft: '$space2',
  paddingRight: '$space2',

  variants: {
    variant: {
      primary: {
        color: '$textPrimary',
        backgroundColor: '$backgroundSecondary',
        border: '1px solid',
        borderColor: '$borderPrimary',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export default Code;
