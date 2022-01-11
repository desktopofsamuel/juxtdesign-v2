import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '@/components/Layout';

export default function BlogPostTemplate({ children, data }) {
  const post = data.mdx;
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      {post.frontmatter.featureImage && (
        <GatsbyImage
          image={post.frontmatter.featureImage.childImageSharp.gatsbyImageData}
          alt={''}
        />
      )}
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
  query BlogPostQuery($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        draft
        description
        date
      }
      body
    }
  }
`;
