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
        url
        gatsbyImageData
        localFile {
          publicURL
        }
      }
      excerpt {
        text
      }
      categories {
        category {
          uid
        }
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

  fragment mdxblog on Mdx {
    frontmatter {
      category
      date
      featured
      publish
      socialImage {
        childImageSharp {
          gatsbyImageData
        }
      }
      tags
      title
    }
    excerpt
    fields {
      categorySlug
      date(fromNow: true)
      slug
      tagSlugs
      title
      featured
    }
  }

  fragment mdxblogdetail on Mdx {
    frontmatter {
      category
      date
      featured
      publish
      socialImage {
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
      tags
      title
    }
    body
    excerpt
    fields {
      categorySlug
      date(formatString: "DD MMM YYYY")
      slug
      tagSlugs
      title
      featured
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
      url {
        url
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
    url
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
