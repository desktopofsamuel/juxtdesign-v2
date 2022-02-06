import React from 'react';
import { graphql } from 'gatsby';
import { SliceZone } from '@prismicio/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { components } from '../slices';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import GatsbyLink from '@/components/GatsbyLink';
import { PageTitle, ResourceTitle, Subtitle } from '@/styles/TextStyles';
import Button from '@/components/Button';
import ListPost from '@/components/ListPost';

export default function PostTemplate({ data, pageContext }) {
  if (!data) return null;
  const doc = data.prismicPost.data;
  const related = data.related.edges;

  return (
    <Layout>
      {/* <SEO postPath={pageContext.url} postSEO postNode={doc} /> */}
      {doc.categories.length !== 0 &&
        doc.categories &&
        doc.categories[0].category.document && (
          <GatsbyLink to={`/tags/${doc.categories[0].category.document.uid}`}>
            <Subtitle>{doc.categories[0].category.document.data.name}</Subtitle>
          </GatsbyLink>
        )}
      <PageTitle>{doc.title.text}</PageTitle>
      <pre>{doc.url.url}</pre>
      <SliceZone slices={doc.body} components={components} />
      <Button to={doc.url.url}>
        Visit Now <FaExternalLinkAlt size={14} />
      </Button>
      <Subtitle>Explore other related resources</Subtitle>
      <ListPost data={related} css={{ gridTemplateColumns: '1fr 1fr 1fr' }} />
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
