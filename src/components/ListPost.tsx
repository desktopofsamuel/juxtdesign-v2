import React from 'react';
import { SliceZone } from '@prismicio/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import kebabCase from 'lodash.kebabcase';
import { components } from '../slices';
import Link from './GatsbyLink';
import { ResourceTitle, Body, Meta } from '../styles/TextStyles';

const PostListWrapper = styled('div', {
  gridGap: '$3',
  gridColumn: 'span 9',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  '@md': {
    gridTemplateColumns: '1fr',
  },
});

const ListItem = styled('div', {
  borderRadius: '8px',
  transition: '$default',
  overflow: 'hidden',
  border: '2px $border solid',

  '&:hover': {
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
  },
});

const ContentWrapper = styled('div', {
  padding: '$2',
  textDecoration: 'none',
});

export default function ListPost({ data, css, withCategory }) {
  return (
    <PostListWrapper css={css}>
      {data.map((post, i) => (
        <Link
          to={`/resources/${kebabCase(post.node.uid)}/`}
          key={post.node.uid}
        >
          <ListItem>
            {post.node.data.feature && (
              <GatsbyImage
                image={post.node.data.feature.gatsbyImageData}
                alt={`Screenshot of ${post.node.data.title.text}`}
                loading="lazy"
              />
            )}
            <ContentWrapper>
              {withCategory && post.node.data.categories ? (
                <Meta type="label">
                  {post.node.data.categories[0].category.document.data.name}
                </Meta>
              ) : null}
              <ResourceTitle>{post.node.data.title.text}</ResourceTitle>
              <SliceZone slices={post.node.data.body} components={components} />
            </ContentWrapper>
          </ListItem>
        </Link>
      ))}
    </PostListWrapper>
  );
}
