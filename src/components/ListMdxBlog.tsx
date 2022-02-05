import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import kebabCase from 'lodash.kebabcase';

import { ResourceTitle, Body, Meta } from '../styles/TextStyles';

import Link from './GatsbyLink';

const Article = styled('article', {
  paddingBottom: '$4',
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

export default function ListMdxBlog({ data, css, withDate, withImage }) {
  return (
    <>
      {data.map((post, i) => (
        <Article
          key={i}
          css={css}
          _hover={{ boxShadow: `0px 2px 2px rgba(0, 0, 0, 0.1)` }}
        >
          <Wrap
            to={post.node.fields.slug}
            css={{ display: 'grid', gap: '$2', marginBottom: '$2' }}
          >
            {withImage
              ? post.node.frontmatter.socialImage && (
                  <Image
                    image={
                      post.node.frontmatter.socialImage.childImageSharp
                        .gatsbyImageData
                    }
                    alt={`Screenshot of ${post.node.frontmatter.title}`}
                    loading="lazy"
                  />
                )
              : null}
            <ResourceTitle>{post.node.fields.title}</ResourceTitle>
            <Body>{post.node.excerpt}</Body>
            {/* <SliceZone slices={post.node.data.body} components={components} /> */}
            {withDate && <Meta type="label">{post.node.fields.date}</Meta>}
          </Wrap>
        </Article>
      ))}
    </>
  );
}
