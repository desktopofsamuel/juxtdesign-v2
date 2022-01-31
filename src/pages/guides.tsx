import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import ListMdxBlog from '@/components/ListMdxBlog';
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
  const allBlogs = data.rest.edges;
  return (
    <Layout>
      <SEO postPath="/guides/" pageTitle="Guides" />
      <h1>Guides</h1>
      <h2>Featured</h2>
      <PostListWrapper css={{ gridTemplateColumns: '1fr 1fr' }}>
        <ListMdxBlog data={featuredBlogs} withImage withDate />
      </PostListWrapper>
      {/* <PostListWrapper css={{ gridTemplateColumns: '1fr 1fr ' }}>
        <ListBlog data={featuredBlogs} withImage withDate />
      </PostListWrapper> */}
      <h2>All Blogs</h2>
      <PostListWrapper css={{ gridTemplateColumns: '1fr' }}>
        <ListMdxBlog data={allBlogs} withDate />
      </PostListWrapper>
    </Layout>
  );
}

export const query = graphql`
  query GuidePageQuery {
    featured: allMdx(filter: { frontmatter: { publish: { ne: false } } }) {
      edges {
        node {
          ...mdxblog
        }
      }
    }
    rest: allMdx(
      filter: { frontmatter: { publish: { ne: false } } }
      sort: { fields: fields___date, order: DESC }
      skip: 6
    ) {
      edges {
        node {
          ...mdxblog
        }
      }
    }
  }
`;
