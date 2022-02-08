import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import ListPost from '@/components/ListPost';
import SEO from '@/components/SEO';
import Pagination from '@/components/Pagination';
import { PageTitle } from '@/styles/TextStyles';

export default function ResourceIndexTemplate({ data, pageContext }) {
  const { currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath } =
    pageContext;
  const { edges } = data.allPrismicPost;
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
      <ListPost data={edges} />
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
    allPrismicPost(limit: $postsLimit, skip: $postsOffset) {
      edges {
        node {
          ...post
        }
      }
    }
  }
`;
