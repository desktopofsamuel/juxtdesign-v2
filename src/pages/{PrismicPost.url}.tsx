import React from 'react';
import { graphql } from 'gatsby';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import GatsbyLink from '@/components/GatsbyLink';
import { PageTitle, ResourceTitle, Subtitle } from '@/styles/TextStyles';
import Button from '@/components/Button';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function PostTemplate({ data, pageContext }) {
  if (!data) return null;
  const doc = data.prismicPost.data;

  return (
    <Layout>
      {/* <SEO postPath={pageContext.url} postSEO postNode={doc} /> */}
      {console.log(doc.categories)}
      {doc.categories.length !== 0 && doc.categories && (
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
    </Layout>
  );
}

export const query = graphql`
  query PostQuery($url: String) {
    prismicPost(url: { eq: $url }) {
      ...post
    }
  }
`;
