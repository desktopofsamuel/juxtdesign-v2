import React from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { components } from '../slices';
import Layout from '@/components/Layout';
import ListPost from '@/components/ListPost';
import ListBlog from '@/components/ListBlog';
import SEO from '@/components/SEO';
import { PageTitle, Body } from '../styles/TextStyles';

const Wrapper = styled('div', {
  margin: '$7 0',
});

const PostListWrapper = styled('div', {
  gridGap: '$3',
  gridColumn: 'span 12',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  '@md': {
    gridTemplateColumns: '1fr',
  },
});

export default function CategoryTemplate({ data, pageContext }) {
  if (!data) return null;
  const item = data.prismicCategory.data;
  const blogs = data.allPrismicBlog.edges;
  const posts = data.allPrismicPost.edges;
  const pageTitle = `Best ${item.name} Design Resources in ${dayjs().year()}`;

  return (
    <Layout>
      <SEO
        postPath={pageContext.url}
        pageTitle={pageTitle}
        pageDescription={item.description}
        pageKeywords={item.keywords}
        postSEO={false}
        pageImage={item.image && item.image.url}
      />
      <Wrapper>
        <PageTitle>{pageTitle}</PageTitle>
        {item.description && <Body>{item.description}</Body>}
      </Wrapper>
      {/* {item.feature && <p>{item.feature.src}</p>} */}
      {blogs && (
        <>
          <h3>Guides</h3>
          <PostListWrapper>
            <ListBlog data={blogs} withImage withDate />
          </PostListWrapper>
        </>
      )}

      <h3>Resources</h3>
      <ListPost
        data={posts}
        css={{
          gridTemplateColumns: '1fr 1fr 1fr',
          '@md': { gridTemplateColumns: '1fr' },
        }}
      />
    </Layout>
  );
}

export const query = graphql`
  query CategoryQuery($url: String) {
    prismicCategory(url: { eq: $url }) {
      ...category
    }
    allPrismicBlog(
      sort: { fields: data___date, order: DESC }
      filter: {
        data: { categories: { elemMatch: { category: { url: { eq: $url } } } } }
      }
    ) {
      edges {
        node {
          ...blog
        }
      }
    }
    allPrismicPost(
      sort: { fields: data___date, order: DESC }
      filter: {
        data: { categories: { elemMatch: { category: { url: { eq: $url } } } } }
      }
    ) {
      edges {
        node {
          ...post
        }
      }
    }
  }
`;
