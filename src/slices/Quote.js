import * as React from 'react';
import { graphql } from 'gatsby';

export const Quote = ({ slice }) => (
  <section className="content-section quote">
    <blockquote>{slice.primary.quote.text}</blockquote>
  </section>
);

export const query = graphql`
  fragment BlogDataBodyQuote on PrismicBlogDataBodyQuote {
    primary {
      quote {
        text
      }
    }
  }
  fragment PostDataBodyQuote on PrismicPostDataBodyQuote {
    primary {
      quote {
        text
      }
    }
  }
`;
