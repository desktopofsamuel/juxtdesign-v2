import React from 'react';
import { globalCss, styled } from 'gatsby-theme-stitches/src/stitches.config';
// import customTheme from '../../theme';
import Helmet from 'react-helmet';
import Container from '@/components/Container';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeContext';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import siteConfig from '../../SiteConfig';

const Main = styled(`main`, {
  margin: 10,
});

const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'HK Grotesk',
      src: 'url("/fonts/hkgrotesk-bold-webfont.woff2")',
      fontWeight: '700',
      fontStyle: 'bold',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'HK Grotesk',
      src: 'url("/fonts/hkgrotesk-medium-webfont.woff2")',
      fontWeight: '500',
      fontStyle: 'regular',
      fontDisplay: 'swap',
    },
  ],

  html: {
    fontFamily: `$sans`,
    fontWeight: `$regular`,
    fontSize: `$3`,
    lineHeight: `$regular`,
    margin: `0`,
    padding: `0`,
    backgroundColor: `$background`,
  },

  body: {
    margin: `0`,
    color: `$body`,
  },

  'h1, h2, h3, h4, h5, h6': {
    color: `$onBackground`,
  },

  'p a': {
    textDecoration: `underline`,
  },

  a: {
    textDecoration: `none`,
    color: `$secondary`,

    '&:hover': {
      textDecoration: `underline`,
      textDecorationColor: `$primary`,
    },
  },

  hr: {
    border: `1px $border solid`,
    margin: `$3 0`,
  },

  blockquote: {
    fontSize: `$4`,
    textAlign: `center`,
    color: `$primary`,
  },

  img: {
    maxWidth: `100%`,
  },

  code: {
    padding: `0 $1`,
    borderRadius: `8px`,
    backgroundColor: `$codeBackground`,
    color: `$grey500`,
  },

  input: {
    width: `100%`,
    height: `30px`,
    background: `none`,
    margin: `$1 0`,
    padding: `$1 $2`,
    border: `2px solid $border`,
    borderRadius: `8px`,
    color: `$onPrimary`,
    fontSize: `$2`,
    fontFamily: `$sans`,

    '&:focus': {
      borderColor: `$onBackground`,
    },
  },
});

const Layout: React.FC = ({ title, children, theme, variant, ...props }) => {
  globalStyles();
  return (
    <>
      <ThemeProvider>
        <Header />
        <Container size={variant}>{children}</Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
