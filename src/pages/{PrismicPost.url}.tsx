import React from 'react';
import { graphql } from 'gatsby';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';
import Layout from '@/components/Layout';

export default function PostTemplate({ data }) {
  if (!data) return null;
  const doc = data.prismicPost.data;
  return (
    <Layout>
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
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...PostDataBodyText
          ...PostDataBodyQuote
          # ...PageDataBodyFullWidthImage
          # ...PageDataBodyImageGallery
          # ...PageDataBodyImageHighlight
        }
      }
    }
  }
`;
