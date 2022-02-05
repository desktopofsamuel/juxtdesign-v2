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
import GatsbyLink from 'gatsby-link';
import Button from '@/components/Button';
import { Meta, ResourceTitle, Subtitle } from '@/styles/TextStyles';

const Box = styled('div', {});

const ContributeBox = styled('div', {
  background: '$backgroundDarker',
  padding: '$3 $4',
  gap: '$3',

  h3: {
    margin: '$0',
  },
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
          <ContributeBox css={{ display: 'flex', flexDirection: 'column' }}>
            <Subtitle>Contribute to JUXT?</Subtitle>
            <Meta>Got any design resources or feedback?</Meta>
            <Button to="https://airtable.com/shrpq3JSU6Xd6hemf">
              Submit Now
            </Button>
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
