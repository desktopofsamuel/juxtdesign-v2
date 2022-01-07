// FullWidthImage.js file

import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

export const Image = ({ slice }) => (
  <section className="full-width-image content-section">
    {slice.primary && (
      <GatsbyImage
        image={slice.primary.image.gatsbyImageData}
        alt={slice.primary.image.alt}
      />
    )}
  </section>
);

export const query = graphql`
  fragment BlogDataBodyImage on PrismicBlogDataBodyImage {
    primary {
      image {
        alt
        copyright
        url
        gatsbyImageData
      }
    }
  }
  fragment PostDataBodyImage on PrismicPostDataBodyImage {
    primary {
      image {
        alt
        copyright
        url
        gatsbyImageData
      }
    }
  }
`;
