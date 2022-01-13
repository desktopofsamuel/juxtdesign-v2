import * as React from 'react';
import { graphql } from 'gatsby';
import { PrismicRichText } from '@prismicio/react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { Body } from '../styles/TextStyles';

const BodyText = styled(PrismicRichText, {});

export const Text = ({ slice }) => {
  const columnClass =
    slice.primary.columns === '2 Columns'
      ? 'text-section-2col'
      : 'text-section-1col';

  return (
    <section className={`content-section ${columnClass}`}>
      {/* Todo: Remove Wrapped Components */}
      <Body>
        <BodyText field={slice.primary.text.richText} />
      </Body>
    </section>
  );
};

export const query = graphql`
  fragment CategoryDataBodyText on PrismicCategoryDataBodyText {
    primary {
      text {
        richText
      }
    }
  }
  fragment BlogDataBodyText on PrismicBlogDataBodyText {
    primary {
      text {
        richText
      }
    }
  }
  fragment PostDataBodyText on PrismicPostDataBodyText {
    primary {
      text {
        richText
      }
    }
  }
`;
