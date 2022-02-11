import React from 'react';
import { graphql } from 'gatsby';
import { SliceZone } from '@prismicio/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { components } from '../slices';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import GatsbyLink from '@/components/GatsbyLink';
import { GatsbyImage } from 'gatsby-plugin-image';

import {
  PageTitle,
  ResourceTitle,
  Subheading,
  Subtitle,
} from '@/styles/TextStyles';
import Button from '@/components/Button';
import ListPost from '@/components/ListPost';

const Wrapper = styled('div', {
  padding: '$5',
  border: '2px $border solid',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  marginBottom: '$4',
  gap: '$5',
});

const Divider = styled('div', {});

const Flex = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const Code = styled('pre', {
  fontSize: '$2',
  color: '$onBackground',
});

export default function PostTemplate({ data, pageContext }) {
  if (!data) return null;
  const doc = data.prismicPost.data;
  const related = data.related.edges;

  return (
    <Layout>
      <SEO
        postPath={pageContext.slug}
        pageTitle={doc.title.text}
        postNode={doc}
      />
      <Flex>
        <Wrapper>
          <Divider>
            {doc.feature && (
              <GatsbyImage
                image={doc.feature.gatsbyImageData}
                alt={`Screenshot of ${doc.title.text}`}
                loading="lazy"
              />
            )}
          </Divider>
          <Divider>
            {doc.categories.length !== 0 &&
              doc.categories &&
              doc.categories[0].category.document && (
                <GatsbyLink
                  to={`/tags/${doc.categories[0].category.document.uid}`}
                >
                  <Subtitle>
                    {doc.categories[0].category.document.data.name}
                  </Subtitle>
                </GatsbyLink>
              )}
            <PageTitle>{doc.title.text}</PageTitle>
            <Code>{doc.url.url}</Code>
            <SliceZone slices={doc.body} components={components} />
            <Button to={doc.url.url}>
              Visit Now <FaExternalLinkAlt size={14} />
            </Button>
          </Divider>
        </Wrapper>
        <Subheading>Explore related resources</Subheading>
        <ListPost data={related} css={{ gridTemplateColumns: '1fr 1fr 1fr' }} />
      </Flex>
    </Layout>
  );
}

export const query = graphql`
  query PostQuery($slug: String, $tag: [String]) {
    prismicPost(url: { eq: $slug }) {
      ...post
    }
    related: allPrismicPost(
      filter: {
        data: { categories: { elemMatch: { category: { url: { in: $tag } } } } }
        url: { ne: $slug }
      }
      limit: 3
    ) {
      edges {
        node {
          ...post
        }
      }
    }
  }
`;
