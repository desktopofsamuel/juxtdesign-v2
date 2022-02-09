import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import ListMdxBlog from '@/components/ListMdxBlog';
import SEO from '@/components/SEO';
import { Subheading } from '@/styles/TextStyles';
import ListSmallBlog from '@/components/ListSmallBlog';

const PostListWrapper = styled('div', {
  gridGap: '$4',
  gridColumn: 'span 12',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  '@md': {
    gridTemplateColumns: '1fr',
  },
});

const Guides = styled('section', {
  display: 'grid',
  gridTemplateColumns: '60% 40%',
  gap: '$4',

  '@md': {
    gridTemplateColumns: '1fr',
  },
});

const Wrapper = styled('div', {});

export default function GuidePage({ data }) {
  const featuredBlogs = data.featured.edges;
  const guideBlogs = data.guide.edges;
  const restBlogs = data.rest.edges;

  return (
    <Layout>
      <SEO postPath="/guides/" pageTitle="Guides" />
      <h1>Guides</h1>
      <Subheading>Feature</Subheading>
      <PostListWrapper>
        <ListMdxBlog data={featuredBlogs} withImage withDate withDescription />
      </PostListWrapper>
      {/* <PostListWrapper css={{ gridTemplateColumns: '1fr 1fr ' }}>
        <ListBlog data={featuredBlogs} withImage withDate />
      </PostListWrapper> */}
      <Guides>
        <Wrapper>
          <Subheading>Guides</Subheading>
          <PostListWrapper css={{ gridTemplateColumns: '1fr' }}>
            <ListMdxBlog data={guideBlogs} withDate withDescription />
          </PostListWrapper>
        </Wrapper>
        <Wrapper>
          <Subheading>Notes</Subheading>
          <PostListWrapper css={{ gridTemplateColumns: '1fr' }}>
            <ListSmallBlog data={restBlogs} />
          </PostListWrapper>
        </Wrapper>
        {/* <PostListWrapper css={{ gridTemplateColumns: '1fr' }}>
          <Subheading>Notes</Subheading>
          <ListMdxBlog data={restBlogs} />
        </PostListWrapper> */}
      </Guides>
    </Layout>
  );
}

export const query = graphql`
  query GuidePageQuery {
    featured: allMdx(
      filter: {
        fields: { featured: { eq: true } }
        frontmatter: { publish: { ne: false } }
      }
      sort: { fields: fields___date, order: DESC }
      limit: 6
    ) {
      edges {
        node {
          ...mdxblog
        }
      }
    }
    guide: allMdx(
      filter: {
        fields: { featured: { eq: true } }
        frontmatter: { publish: { ne: false } }
      }
      sort: { fields: fields___date, order: DESC }
      skip: 6
    ) {
      edges {
        node {
          ...mdxblog
        }
      }
    }
    rest: allMdx(
      filter: {
        fields: { featured: { eq: false } }
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
  }
`;
