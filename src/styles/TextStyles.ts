import { styled } from 'gatsby-theme-stitches/src/stitches.config';

export const PageTitle = styled('h1', {
  margin: '0',
  fontSize: '$xl',
  fontFamily: '$sans',
  fontWeight: '$bold',
  color: '$onBackground',
});
export const ResourceTitle = styled('h2', {
  margin: '0',
  fontSize: '$md',
  fontFamily: '$sans',
  fontWeight: '$bold',
  textTransform: 'none',
  color: '$onBackground',
});

export const Subtitle = styled('h3', {
  margin: '0',
  fontSize: '$md',
  fontFamily: '$sans',
  fontWeight: '$bold',
  textTransform: 'none',
  color: '$onBackground',
})

export const Body = styled('p', {
  margin: '0',
  fontSize: '$base',
  fontFamily: '$sans',
  fontWeight: '$regular',
  color: '$body',
});

export const Subheading = styled('p', {
  fontWeight: '$bold',
  fontSize: '$sm',
  textTransform: 'uppercase',
  letterSpacing: '$sparse',
});

export const Meta = styled('p', {
  margin: '0',
  fontSize: '$xs',
  fontFamily: '$sans',
  fontWeight: '$regular',
  color: '$primary',

  variants: {
    type: {
      label: {
        fontWeight: '$regular',
        textTransform: 'uppercase',
        color: '$bodyLighter',
      },
      value: {
        fontWeight: '$bold',
        color: '$secondary',
      },
    },
  },
});