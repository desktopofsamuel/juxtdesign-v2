import React from 'react';
import { graphql } from 'gatsby';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

export default function PostTemplate({ data, pageContext }) {
  if (!data) return null;
  const doc = data.prismicPost.data;
  return (
    <Layout>
      <SEO postPath={pageContext.url} postSEO postNode={doc} />
      <h1>{doc.title.text}</h1>
      <SliceZone slices={doc.body} components={components} />
    </Layout>
  );
}

export const query = graphql`
  query PostQuery($url: String) {
    prismicPost(url: { eq: $url }) {
      data {
        title {
          text
        }
        url {
          url
        }
        feature {
          url
          gatsbyImageData
        }
        date
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...PostDataBodyText
          ...PostDataBodyQuote
          ...PostDataBodyImage
          # ...PageDataBodyImageGallery
          # ...PageDataBodyImageHighlight
        }
      }
    }
  }
`;
