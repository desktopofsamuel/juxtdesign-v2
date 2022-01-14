import React from 'react';
import { graphql } from 'gatsby';
import { SliceZone } from '@prismicio/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import GatsbyLink from 'gatsby-link';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { components } from '../slices';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import config from '../../SiteConfig';
import { PageTitle, Meta } from '../styles/TextStyles';

const Grid = styled('div', {
  display: 'grid',
  // gridTemplateColumns: 'minmax(24px, 1fr) 8fr minmax(24px, 1fr)',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  // gap: '5vw',
  rowGap: '$2',

  '@md': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const Wrapper = styled('div', {
  margin: '$4 0',
});

export default function BlogTemplate({ data, pageContext }) {
  if (!data) return null;
  const doc = data.prismicBlog.data;
  return (
    <Layout variant="medium">
      <SEO postPath={pageContext.url} postSEO postNode={doc} />
      <PageTitle>{doc.title.text}</PageTitle>
      <Grid>
        <Wrapper>
          <Meta type="label">Updated on</Meta>
          <Meta type="value">
            <time>{doc.date}</time>
          </Meta>
        </Wrapper>
        <Wrapper>
          <Meta type="label">Share</Meta>
          <Meta type="value">
            <GatsbyLink
              to={`https://twitter.com/intent/tweet?text=${doc.title.text}&url=${config.siteUrl}${pageContext.url}`}
              title={`Share ${doc.title.text}`}
            >
              Twitter
            </GatsbyLink>
          </Meta>
        </Wrapper>
      </Grid>
      {doc.feature && (
        <GatsbyImage
          image={doc.feature.gatsbyImageData}
          alt={doc.feature.alt || doc.title.text}
        />
      )}
      <SliceZone slices={doc.body} components={components} />
    </Layout>
  );
}

export const query = graphql`
  query BlogQuery($url: String) {
    prismicBlog(url: { eq: $url }) {
      ...blog
    }
  }
`;
