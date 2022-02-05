import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import ListPost from '@/components/ListPost';
import SEO from '@/components/SEO';

export default function ResourceIndex({ data }) {
  const posts = data.allPrismicPost.edges.slice(0, 8);
  return (
    <Layout variant="medium">
      <SEO postPath="/resources" pageTitle="Resources" />
      <h1>Resources</h1>
      <ListPost data={posts} />
    </Layout>
  );
}

export const query = graphql`
  query ResourceIndexQuery {
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          ...post
        }
      }
    }
  }
`;
