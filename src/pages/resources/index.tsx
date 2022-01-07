import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import ListPost from '@/components/ListPost';

export default function ResourceIndex({ data }) {
  const posts = data.allPrismicPost.edges.slice(0, 8);
  return (
    <Layout variant="medium">
      <h1>Resource</h1>
      <ListPost data={posts} />
    </Layout>
  );
}

export const query = graphql`
  query ResourceIndexQuery {
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          data {
            title {
              text
            }
            feature {
              gatsbyImageData
            }
            body {
              ... on PrismicSliceType {
                slice_type
              }
              ...PostDataBodyText
              ...PostDataBodyQuote
            }
          }
          uid
        }
      }
    }
  }
`;
