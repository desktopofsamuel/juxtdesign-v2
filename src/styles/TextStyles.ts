import { styled } from 'gatsby-theme-stitches/src/stitches.config';

export const PageTitle = styled('h1', {
  margin: '0',
  fontSize: '$7',
  fontFamily: '$sans',
  fontWeight: '$bold',
  color: '$onBackground',

  '@md': {
    fontSize: '$6',
  },
});
export const ResourceTitle = styled('h2', {
  margin: '0',
  fontSize: '$5',
  fontFamily: '$sans',
  fontWeight: '$bold',
  textTransform: 'none',
  color: '$onBackground',

  '@md': {
    fontSize: '$4',
  },
});

export const Subtitle = styled('h3', {
  margin: '0',
  fontSize: '$3',
  fontFamily: '$sans',
  fontWeight: '$bold',
  textTransform: 'none',
  color: '$onBackground',
})

export const Body = styled('p', {
  margin: '0',
  fontSize: '$3',
  fontFamily: '$sans',
  fontWeight: '$regular',
  color: '$body',
});

export const Meta = styled('p', {
  margin: '0',
  fontSize: '$3',
  fontFamily: '$sans',
  fontWeight: '$regular',
  color: '$primary',

  variants: {
    type: {
      label: {
        fontWeight: '$regular',
        fontSize: '$1',
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