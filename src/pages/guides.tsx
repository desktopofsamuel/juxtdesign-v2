import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import ListBlog from '@/components/ListBlog';
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
  const allBlogs = data.all.edges;
  const allMdx = data.allMdx.edges;
  return (
    <Layout>
      <SEO postPath="/guides/" pageTitle="Guides" />
      <h1>Guides</h1>
      <h2>Featured</h2>
      <PostListWrapper css={{ gridTemplateColumns: '1fr 1fr' }}>
        <ListMdxBlog data={allMdx} withImage withDate />
      </PostListWrapper>
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
    allMdx(
      filter: { frontmatter: { publish: { ne: false } } }
      sort: { fields: fields___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            category
            date
            featured
            publish
            socialImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            # tags
            title
          }
          slug
          excerpt
          fields {
            categorySlug
            date
            slug
            tagSlugs
            title
          }
        }
      }
    }
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
