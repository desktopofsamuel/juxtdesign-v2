import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import ListBlog from '@/components/ListBlog';
import SEO from '@/components/SEO';

export default function GuidePage({ data }) {
  const blogs = data.allMdx.edges;
  return (
    <Layout>
      <SEO postPath="/guides/" pageTitle="Guides" />
      <h1>Guides</h1>
      <ListBlog data={blogs} />
    </Layout>
  );
}

export const query = graphql`
  query GuidePageQuery {
    allMdx {
      edges {
        node {
          ...post
        }
      }
    }
  }
`;
