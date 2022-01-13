import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import { PageTitle } from '@/styles/TextStyles';
import GatsbyLink from 'gatsby-link';
export default function CategoriesPage({ data }) {
  const cats = data.allPrismicCategory.edges;
  return (
    <Layout variant="medium">
      <PageTitle>Categories</PageTitle>
      {cats.map((cat) => (
        <GatsbyLink to={cat.node.url}>
          <p>{cat.node.data.name}</p>
        </GatsbyLink>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query CategoryPage {
    allPrismicCategory(sort: { fields: data___name, order: ASC }) {
      edges {
        node {
          id
          url
          data {
            image {
              alt
              copyright
              url
              gatsbyImageData
            }
            description
            keywords
            name
          }
        }
      }
    }
  }
`;
