import { graphql } from 'gatsby';

export const postFragment = graphql`
  fragment post on Mdx {
    fields {
      slug
    }
    body
    timeToRead
    slug
    excerpt(pruneLength: 350)
    frontmatter {
      title
      date(formatString: "MMM DD, YYYY", locale: "en")
      tags
      featurePhoto {
        publicURL
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      url
    }
    headings {
      depth
      value
    }
    tableOfContents
  }
`;

export default postFragment;
