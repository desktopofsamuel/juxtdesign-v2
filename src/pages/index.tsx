import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Link from '@/components/GatsbyLink';
import Title from '@/components/Title';
import Layout from '@/components/Layout';
import ListPost from '@/components/ListPost';
import ListBlog from '@/components/ListBlog';
import ListCategory from '@/components/ListCategory';
import SEO from '@/components/SEO';

const Text = styled('p', {});

const Row = styled('div', {
  display: 'grid',
  gridTemplate: 'auto/repeat(12, 1fr)',
  gridGap: '$3',
  padding: '$3 0',

  '@md': {
    display: 'block',
  },
});

export default function Index({ data }) {
  const posts = data.allPrismicPost.edges.slice(0, 8);
  const blogs = data.allPrismicBlog.edges.slice(0, 3);
  const categories = data.allPrismicCategory.edges;

  return (
    <Layout>
      <SEO postPath="/" />
      <Row>
        <Row
          css={{
            gridColumn: 'span 12',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',

            '@md': {
              display: 'block',
            },
          }}
        >
          <ListBlog data={blogs} withImage withDate />
        </Row>
        <ListCategory data={categories} css={{ gridColumn: 'span 3' }} />

        <ListPost data={posts} css={{ gridColumn: 'span 9' }} withCategory />
      </Row>
    </Layout>
  );
}

export const query = graphql`
  query IndexQuery {
    allPrismicBlog(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          ...blog
        }
      }
    }
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          ...post
        }
      }
    }
    allPrismicCategory(sort: { fields: uid, order: ASC }) {
      edges {
        node {
          ...category
        }
      }
    }
  }
`;
