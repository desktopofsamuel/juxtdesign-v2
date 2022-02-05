import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import GatsbyLink from '@/components/GatsbyLink';
import Container from '@/components/Container';
import { ResourceTitle, Meta } from '@/styles/TextStyles';
import NewsletterForm from './newsletterform';
import { FaExternalLinkAlt } from 'react-icons/fa';

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
  gap: '$3',
});

const SmallText = styled(Meta, {
  color: '$onPrimary',
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
              Twitter <FaExternalLinkAlt size={12} />
            </FooterLink>
            <FooterLink target="_blank" to="https://instagram.com/juxtdesigncc">
              Instagram <FaExternalLinkAlt size={12} />
            </FooterLink>
          </Wrapper>
          <Wrapper>
            <SectionTitle>Stay Connected</SectionTitle>
            <FooterLink target="_blank" to="mailto:hello@juxtdesign.cc">
              hello@juxtdesign.cc
            </FooterLink>

            <div id="revue-embed">
              <form
                action="https://www.getrevue.co/profile/juxtdesigncc/add_subscriber"
                method="post"
                id="revue-form"
                name="revue-form"
                target="_blank"
              >
                <div class="revue-form-group">
                  <label for="member_email">Email address*</label>
                  <input
                    class="revue-form-field"
                    placeholder="Your email address..."
                    type="email"
                    name="member[email]"
                    id="member_email"
                  />
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div class="revue-form-group">
                    <label for="member_first_name">First name</label>
                    <input
                      class="revue-form-field"
                      placeholder="First name"
                      type="text"
                      name="member[first_name]"
                      id="member_first_name"
                    />
                  </div>
                  <div class="revue-form-group">
                    <label for="member_last_name">Last name</label>
                    <input
                      class="revue-form-field"
                      placeholder="Last name"
                      type="text"
                      name="member[last_name]"
                      id="member_last_name"
                    />
                  </div>
                </div>
                <div class="revue-form-actions">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="member[subscribe]"
                    id="member_submit"
                    style={{
                      height: '36px',
                      cursor: 'pointer',
                      backgroundColor: 'var(--colors-secondaryHover)',
                      border: 'none',
                    }}
                  />
                </div>
                <div class="revue-form-footer" style={{ fontSize: '10px' }}>
                  By subscribing, you agree with Revue’s{' '}
                  <a target="_blank" href="https://www.getrevue.co/terms">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a target="_blank" href="https://www.getrevue.co/privacy">
                    Privacy Policy
                  </a>
                  .
                </div>
              </form>
            </div>
          </Wrapper>
        </FooterRight>
      </Container>
    </Background>
  );
}
