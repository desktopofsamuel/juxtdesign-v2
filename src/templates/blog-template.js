import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import kebabCase from 'lodash.kebabcase';
import Layout from '@/components/Layout';
import MdxProvider from '@/components/MDXProvider';
import { PageTitle, Meta } from '@/styles/TextStyles';
import config from '../../SiteConfig';
import GatsbyLink from '@/components/GatsbyLink';

const Grid = styled('div', {
  display: 'grid',
  // gridTemplateColumns: 'minmax(24px, 1fr) 8fr minmax(24px, 1fr)',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  // gap: '5vw',
  rowGap: '$2',

  '@md': {
    gridTemplateColumns: '1fr 1fr',
  },
});
const Wrapper = styled('div', {
  margin: '$4 0',
});

const BlogPageTemplate = ({ data, pageContext }) => {
  if (!data) return null;
  const post = data.mdx.frontmatter;
  const postNode = data.mdx;

  return (
    <MdxProvider>
      <Layout variant="medium">
        <PageTitle>{postNode.fields.title}</PageTitle>
        <Grid>
          <Wrapper>
            <Meta type="label">Updated on</Meta>
            <Meta type="value">
              <time>{post.date}</time>
            </Meta>
          </Wrapper>
          <Wrapper>
            <Meta type="label">Share</Meta>
            <Meta type="value">
              <GatsbyLink
                to={`https://twitter.com/intent/tweet?text=${postNode.fields.title}&url=${config.siteUrl}${postNode.fields.slug}`}
                title={`Share ${postNode.fields}`}
              >
                Twitter
              </GatsbyLink>
            </Meta>
          </Wrapper>
          {post.tags && post.tags.length !== 0 && (
            <Wrapper>
              <Meta type="label">Tags</Meta>
              <Meta
                type="value"
                css={{ display: 'flex', flexDirection: 'row', gap: '$1' }}
              >
                {post.tags.map((tag) => (
                  <GatsbyLink key={tag} to={`/tags/${kebabCase(tag)}/`}>
                    {tag}
                  </GatsbyLink>
                ))}
              </Meta>
            </Wrapper>
          )}
        </Grid>
        <MDXRenderer>{postNode.body}</MDXRenderer>
      </Layout>
    </MdxProvider>
  );
};

export const query = graphql`
  query MdxMdxBlogQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        date
        slug
        title
        categorySlug
      }
      slug
      excerpt
      body
      frontmatter {
        date
        featured
        publish
        tags
        title
        socialImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPageTemplate;
