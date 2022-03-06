import React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Layout from '@/components/Layout';
import ListPost from '@/components/ListPost';
import SEO from '@/components/SEO';
import Pagination from '@/components/Pagination';
import kebabCase from 'lodash.kebabcase';
import { PageTitle } from '@/styles/TextStyles';
import Link from '@/components/GatsbyLink';

const CategoryList = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '$2',
  wordBreak: 'keep-all',
  margin: '$4 0',
});

const Item = styled(Link, {
  border: '1px solid $border',
  borderRadius: '$3',
  padding: '$1 $3',
});

export default function ResourceIndexTemplate({ data, pageContext }) {
  const { currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath } =
    pageContext;
  const posts = data.allPrismicPost.edges;
  const categories = data.allPrismicCategory.edges;
  const pageTitle =
    currentPage > 0
      ? `Handpicked Design Resources - Page ${currentPage}`
      : `Handpicked Design Resources`;
  const pageSlug =
    currentPage > 0 ? `/resources/page/${currentPage}` : `/resources/`;

  return (
    <Layout variant="medium">
      <SEO postPath={pageSlug} pageTitle={pageTitle} />
      <PageTitle>Handpicked Design Resources</PageTitle>
      <CategoryList>
        {categories.map((item) => (
          <Item to={`/tags/${kebabCase(item.node.uid)}/`} key={item.node.uid}>
            {item.node.data.name}
          </Item>
        ))}
      </CategoryList>
      <ListPost data={posts} />
      {(hasPrevPage || hasNextPage) && (
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      )}
    </Layout>
  );
}

export const query = graphql`
  query ResourceIndexQuery($postsLimit: Int!, $postsOffset: Int!) {
    allPrismicPost(
      sort: { order: DESC, fields: data___date }
      limit: $postsLimit
      skip: $postsOffset
    ) {
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
