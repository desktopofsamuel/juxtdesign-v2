import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Link from '@/components/GatsbyLink';
import Title from '@/components/Title';
import Layout from '@/components/Layout';
import ListPost from '@/components/ListPost';
import ListMdxBlog from '@/components/ListMdxBlog';
import ListCategory from '@/components/ListCategory';
import SEO from '@/components/SEO';

const Box = styled('div', {});

const ContributeBox = styled('div', {
  background: '$rice300',
  padding: '$2 $3',
});
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
  const posts = data.allPrismicPost.edges;
  // const blogs = data.allPrismicBlog.edges.slice(0, 3);
  const blogs = data.allMdx.edges;
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
          <ListMdxBlog data={blogs} withImage withDate />
        </Row>
        <Box css={{ gridColumn: 'span 3' }}>
          <ContributeBox>
            <h5>Contribute to JUXT?</h5>
            <p>Submit your design resources today!</p>
          </ContributeBox>
          <ListCategory data={categories} />
        </Box>

        <ListPost data={posts} css={{ gridColumn: 'span 9' }} withCategory />
      </Row>
    </Layout>
  );
}

export const query = graphql`
  query IndexQuery {
    allMdx(
      filter: { frontmatter: { publish: { ne: false } } }
      sort: { fields: fields___date, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          ...mdxblog
        }
      }
    }
    allPrismicPost(sort: { fields: data___date, order: DESC }, limit: 12) {
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
