import React from 'react';
import { PageProps, graphql } from 'gatsby';
// import { Button, Text } from '@chakra-ui/react';
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
  const blogs = data.allMdx.edges.slice(0, 3);
  const categories = data.allPrismicCategory.edges;
  return (
    <Layout>
      <SEO postPath="/" />
      <Title>Hello Gatsby!</Title>
      <Text>A Chakra UI starter for GatsbyJS.</Text>
      <Link to="https://twitter.com/desktopofsamuel">
        <button>Follow me on Twitter</button>
      </Link>
      <Row>
        <ListBlog data={blogs} css={{ gridColumn: 'span 12' }} />
        <ListCategory data={categories} css={{ gridColumn: 'span 3' }} />
        <ListPost data={posts} css={{ gridColumn: 'span 9' }} />
      </Row>
    </Layout>
  );
}

export const query = graphql`
  query IndexQuery {
    # allPrismicBlog {
    #   edges {
    #     node {
    #       uid
    #       data {
    #         title {
    #           text
    #         }
    #         date
    #         body {
    #           ... on PrismicSliceType {
    #             slice_type
    #           }
    #           ...BlogDataBodyText
    #           ...BlogDataBodyQuote
    #           ...BlogDataBodyImage
    #         }
    #       }
    #     }
    #   }
    # }
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
    allPrismicCategory(sort: { fields: uid, order: ASC }) {
      edges {
        node {
          data {
            name
          }
          uid
        }
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          ...post
        }
      }
    }
  }
`;
