import { graphql } from 'gatsby';

export const postFragment = graphql`
  fragment blog on PrismicBlog {
    uid
    data {
      title {
        text
      }
      feature {
        alt
        gatsbyImageData
      }
      excerpt {
        text
      }
      date(fromNow: true)
      body {
        ... on PrismicSliceType {
          slice_type
        }
        ...BlogDataBodyText
        ...BlogDataBodyQuote
        ...BlogDataBodyImage
      }
    }
  }

  fragment post on PrismicPost {
    data {
      title {
        text
      }
      feature {
        gatsbyImageData
        alt
      }
      categories {
        category {
          document {
            ... on PrismicCategory {
              uid
              id
              data {
                name
              }
            }
          }
        }
      }
      body {
        ... on PrismicSliceType {
          slice_type
        }
        ...PostDataBodyText
        ...PostDataBodyQuote
        ...PostDataBodyImage
      }
    }
    uid
  }

  fragment category on PrismicCategory {
    uid
    data {
      name
      description
      keywords
      image {
        url
        gatsbyImageData
      }
    }
  }
`;

export default postFragment;
