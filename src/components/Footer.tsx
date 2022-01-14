import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import GatsbyLink from '@/components/GatsbyLink';
import Container from '@/components/Container';
import { ResourceTitle } from '@/styles/TextStyles';

const Background = styled('footer', {
  backgroundColor: '$spark',
  color: '$onPrimary',
  padding: '$5 0',
});

const SectionTitle = styled(ResourceTitle, {
  color: '$onPrimary',
});

const FooterLink = styled(GatsbyLink, {
  textDecoration: 'none',
  color: '$onPrimary',
});

const FooterLeft = styled('div', {});

const FooterRight = styled(FooterLeft, {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',

  '@md': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

export default function Footer() {
  return (
    <Background>
      <Container>
        <FooterRight>
          <Wrapper>
            <SectionTitle>Explore</SectionTitle>
            <FooterLink to="/about/">About</FooterLink>
            <FooterLink to="/guides/">Blog</FooterLink>
            <FooterLink to="/resources/">Resources</FooterLink>
          </Wrapper>
          <Wrapper>
            <SectionTitle>Follow</SectionTitle>
            <FooterLink target="_blank" to="https://twitter.com/juxtdesigncc">
              Twitter
            </FooterLink>
            <FooterLink target="_blank" to="https://instagram.com/juxtdesigncc">
              Instagram
            </FooterLink>
          </Wrapper>
          <Wrapper>
            <SectionTitle>Get In Touch</SectionTitle>
            <FooterLink target="_blank" to="mailto:hello@juxtdesign.cc">
              hello@juxtdesign.cc
            </FooterLink>
          </Wrapper>
        </FooterRight>
      </Container>
    </Background>
  );
}
