import React from 'react';
import { SliceZone } from '@prismicio/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import kebabCase from 'lodash.kebabcase';
import { components } from '../slices';
import { ResourceTitle, Body, Meta } from '../styles/TextStyles';

import Link from './GatsbyLink';

const Article = styled('article', {
  marginBottom: '$4',
  borderBottom: '1px solid $border',
});

const Wrap = styled(Link, {});

const Image = styled(GatsbyImage, {
  position: 'relative',
  overflow: 'visible!important',
  transition: '$default',

  '&:hover': {
    transform: 'translate3d(-4px,-4px,0)',
  },

  '&::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: '0',
    right: '0',
    transition: '$default',
    width: '100%',
    height: '100%',
    borderRadius: '4px',
    border: '1.5px solid $transparent',
  },

  '&:hover::before': {
    borderColor: '$border',
    transform: 'translate3d(8px,8px,0)',
  },
});

export default function ListBlog({ data, css, withDate, withImage }) {
  return (
    <>
      {data.map((post, i) => (
        <Article
          key={i}
          css={css}
          padding="4"
          _hover={{ boxShadow: `0px 2px 2px rgba(0, 0, 0, 0.1)` }}
        >
          <Wrap
            to={`/blog/${kebabCase(post.node.uid)}/`}
            css={{ display: 'grid', gap: '$2', marginBottom: '$2' }}
          >
            {withImage
              ? post.node.data.feature && (
                  <Image
                    image={post.node.data.feature.gatsbyImageData}
                    alt={`Screenshot of ${post.node.data.title.text}`}
                    loading="lazy"
                  />
                )
              : null}
            <ResourceTitle>{post.node.data.title.text}</ResourceTitle>
            <Body>{post.node.data.excerpt.text}</Body>
            {/* <SliceZone slices={post.node.data.body} components={components} /> */}
            {withDate && <Meta type="label">{post.node.data.date}</Meta>}
          </Wrap>
        </Article>
      ))}
    </>
  );
}
