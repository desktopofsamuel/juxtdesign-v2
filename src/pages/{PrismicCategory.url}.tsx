import React from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { components } from '../slices';
import Layout from '@/components/Layout';
import ListPost from '@/components/ListPost';
import ListMdxBlog from '@/components/ListMdxBlog';
import SEO from '@/components/SEO';
import { PageTitle, Body, Subheading } from '../styles/TextStyles';

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
  const blogs = data.allMdx.edges;
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
          <Subheading>Guides</Subheading>
          <PostListWrapper>
            <ListMdxBlog data={blogs} withImage withDate withDescription />
          </PostListWrapper>
        </>
      )}

      <Subheading>Resources</Subheading>
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
    allMdx(
      filter: {
        fields: { tagSlugs: { glob: $url } }
        frontmatter: { publish: { ne: false } }
      }
      sort: { fields: fields___date, order: DESC }
    ) {
      edges {
        node {
          ...mdxblog
        }
      }
    }
    # allPrismicBlog(
    #   sort: { fields: data___date, order: DESC }
    #   filter: {
    #     data: { categories: { elemMatch: { category: { url: { eq: $url } } } } }
    #   }
    # ) {
    #   edges {
    #     node {
    #       ...blog
    #     }
    #   }
    # }
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
