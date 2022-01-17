import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import ListBlog from '@/components/ListBlog';
import SEO from '@/components/SEO';

const PostListWrapper = styled('div', {
  gridGap: '$3',
  gridColumn: 'span 12',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  '@md': {
    gridTemplateColumns: '1fr',
  },
});

export default function GuidePage({ data }) {
  const featuredBlogs = data.featured.edges;
  const allBlogs = data.all.edges;
  return (
    <Layout>
      <SEO postPath="/guides/" pageTitle="Guides" />
      <h1>Guides</h1>
      <h2>Featured</h2>
      <PostListWrapper css={{ gridTemplateColumns: '1fr 1fr ' }}>
        <ListBlog data={featuredBlogs} withImage withDate />
      </PostListWrapper>
      <h2>All Blogs</h2>
      <PostListWrapper css={{ gridTemplateColumns: '1fr' }}>
        <ListBlog data={allBlogs} />
      </PostListWrapper>
    </Layout>
  );
}

export const query = graphql`
  query GuidePageQuery {
    featured: allPrismicBlog(
      # filter: { data: { isfeatured: { eq: true } } }
      sort: { fields: data___date, order: DESC }
      limit: 4
    ) {
      edges {
        node {
          ...blog
        }
      }
    }
    all: allPrismicBlog(
      # filter: { data: { isfeatured: { ne: true } } }
      sort: { fields: data___date, order: DESC }
      skip: 4
    ) {
      edges {
        node {
          ...blog
        }
      }
    }
  }
`;
