import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { FaPencilAlt, FaCoffee, FaCode, FaThumbsUp } from 'react-icons/fa';
import Layout from '@/components/Layout';
import ListProject from '@/components/ListProject';
import { Body, PageTitle, ResourceTitle } from '@/styles/TextStyles';
import projects from '../../content/project.json';
import SEO from '@/components/SEO';
import Container from '@/components/Container';

const Header = styled('section', {
  padding: '$4',
  marginBottom: '$5',
});

const LargeBody = styled(Body, {
  fontSize: '$5',
  textAlign: 'center',
  margin: '$2',

  '@md': {
    fontSize: '$3',
  },
});

const AlwaysWhiteBody = styled(Body, {
  color: '$white100',
});

const Half = styled('div', {
  gridColumn: 'span 6',
});
const Section = styled('section', {
  padding: '$4 0',
  gap: '$4',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',

  '@md': {
    display: 'block',
  },
});

const FullWidthSection = styled(Section, {
  background: '#134042',
  width: '100vw',
  position: 'relative',
  marginLeft: '-50vw',
  left: '50%',
});

const BoldPageTitle = styled(PageTitle, {
  fontFamily: '$syne',
  fontSize: '$8',
  textTransform: 'uppercase',
  lineHeight: '$tight',

  '@md': {
    fontSize: '$6',
  },
});

const SectionPageTitle = styled(ResourceTitle, {
  fontFamily: '$syne',
  fontSize: '$6',
  lineHeight: '$tight',

  '@md': {
    fontSize: '$4',
  },
});
const SectionPageTitleOnDark = styled(ResourceTitle, {
  fontFamily: '$syne',
  fontSize: '$6',
  lineHeight: '$tight',
  color: '$onPrimary',

  '@md': {
    fontSize: '$4',
  },
});
const AboutContainer = styled(Container, {});

const ContributeGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridGap: '$5 $3',

  '@md': {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const IconWrapper = styled('span', {
  display: 'grid',
  width: '48px',
  height: '48px',
  borderRadius: '24px',
  background: '$primaryLighter',
  color: '#58C3C8',
  placeContent: 'center center',
  fontSize: '$4',
});

function IconContent({ icon, title, description }) {
  return (
    <Wrapper css={{ gridColumn: 'span 6', '@md': { gridColumn: 'span 12' } }}>
      <IconWrapper>{icon}</IconWrapper>
      <ResourceTitle css={{ color: '$onPrimary' }}>{title}</ResourceTitle>
      <AlwaysWhiteBody>{description}</AlwaysWhiteBody>
    </Wrapper>
  );
}

export default function AboutPage() {
  return (
    <Layout variant="medium">
      <SEO postPath="/about/" pageTitle="About" />
      {/* <StaticImage src="../../static/cover.png" /> */}
      <Header>
        <BoldPageTitle css={{ textAlign: 'center' }}>JUXT Design</BoldPageTitle>
        <LargeBody>
          Join us on this journey to advocate design & user experience
        </LargeBody>
      </Header>
      <Section>
        <Half>
          <SectionPageTitle>A little about me</SectionPageTitle>
          <Body>
            Hello! My name is Samuel and I started JUXT Design to share design
            resources and advocate user-centered design.
          </Body>
        </Half>
        <Half>{}</Half>
      </Section>
      <FullWidthSection>
        <Container
          size="medium"
          css={{
            gridColumn: 'span 12',
            display: 'flex',
            gap: '$4',
            flexDirection: 'column',
          }}
        >
          <SectionPageTitleOnDark>
            Looking to <br />
            contribute?
          </SectionPageTitleOnDark>
          {/* <AlwaysWhiteBody>
            Currently this is one-man operation,
          </AlwaysWhiteBody> */}
          <ContributeGrid>
            <IconContent
              icon={<FaPencilAlt />}
              title="Contribute our educational resources"
              description="Like what you’ve read and have more to share? Our resources and blogs welcome contributor and maintainers. Join our community and advocate design and share your insights."
            />
            <IconContent
              icon={<FaCoffee />}
              title="Let’s work together"
              description="Have an idea in your mind to promote design & user experience. Let’s work together and build something"
            />
            <IconContent
              icon={<FaCode />}
              title="Find us on Github"
              description="Spot some typos or catch a bug? Report to us on Github."
            />
            <IconContent
              icon={<FaThumbsUp />}
              title="Attention Required"
              description="Support our projects by sharing to your colleagues or give us a star on Github!"
            />
          </ContributeGrid>
        </Container>
      </FullWidthSection>
      <Section>
        <SectionPageTitle css={{ gridColumn: 'span 8' }}>
          Our projects
        </SectionPageTitle>
        <ListProject
          data={projects}
          css={{
            gridColumn: 'span 12',
          }}
        />
      </Section>
    </Layout>
  );
}
