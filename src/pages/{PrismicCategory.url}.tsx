import React from 'react';
import { graphql } from 'gatsby';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';
import Layout from '@/components/Layout';
import ListPost from '@/components/ListPost';
import ListBlog from '@/components/ListBlog';
import SEO from '@/components/SEO';

export default function CategoryTemplate({ data, pageContext }) {
  if (!data) return null;
  const item = data.prismicCategory.data;
  const blogs = data.allPrismicBlog.edges;
  const posts = data.allPrismicPost.edges.slice(0, 10);

  return (
    <Layout>
      <SEO
        postPath={pageContext.url}
        pageTitle={item.name}
        pageDescription={item.description}
        pageKeywords={item.keywords}
      />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      {/* {item.feature && <p>{item.feature.src}</p>} */}
      {blogs.node && (
        <>
          <h3>Guides</h3>
          <ListBlog data={blogs} />
        </>
      )}

      <h3>Resources</h3>
      <ListPost data={posts} css={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }} />
    </Layout>
  );
}

export const query = graphql`
  query CategoryQuery($url: String) {
    prismicCategory(url: { eq: $url }) {
      uid
      data {
        name
        keywords
        description
      }
    }
    allPrismicBlog(
      sort: { fields: data___date, order: DESC }
      filter: {
        data: { categories: { elemMatch: { category: { url: { eq: $url } } } } }
      }
    ) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date
            body {
              ... on PrismicSliceType {
                slice_type
              }
              ...BlogDataBodyText
              ...BlogDataBodyQuote
            }
          }
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
  }
`;
