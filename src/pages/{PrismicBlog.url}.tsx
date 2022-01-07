import React from 'react';
import { graphql } from 'gatsby';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import GatsbyLink from 'gatsby-link';
import config from '../../static/SiteConfig';

export default function BlogTemplate({ data, pageContext }) {
  if (!data) return null;
  const doc = data.prismicBlog.data;
  return (
    <Layout>
      <SEO postPath={pageContext.url} pageTitle={doc.title.text} />
      <h1>{doc.title.text}</h1>
      <p>Updated on</p>
      <time>{doc.date}</time>
      <p>Share</p>
      <GatsbyLink
        to={`https://twitter.com/intent/tweet?text=${doc.title.text}&url=${config.siteUrl}${pageContext.url}`}
        title={`Share ${doc.title.text}`}
      >
        Twitter
      </GatsbyLink>
      <SliceZone slices={doc.body} components={components} />
    </Layout>
  );
}

export const query = graphql`
  query BlogQuery($url: String) {
    prismicBlog(url: { eq: $url }) {
      data {
        title {
          text
        }
        categories {
          category {
            slug
            uid
          }
        }
        date
        tags {
          tag
        }
        url {
          url
        }
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...BlogDataBodyText
          ...BlogDataBodyQuote
          ...BlogDataBodyImage
          # ...PageDataBodyImageGallery
          # ...PageDataBodyImageHighlight
        }
      }
    }
  }
`;
