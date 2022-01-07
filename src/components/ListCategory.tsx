import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import kebabCase from 'lodash.kebabcase';
import Link from './GatsbyLink';

const Wrapper = styled('aside', {
  gridColumn: 'span 3',
  display: 'flex',
  flexDirection: 'column',
});

const Item = styled(Link, {
  color: '$body',
  textDecoration: 'none',
  transition: '$default',
  padding: '$2 0 $2 $2',
  margin: '0 0 $2 -$2',
  borderRight: '4px $transparent solid',

  '&:hover': {
    backgroundColor: '$onBackgroundHover',
    borderRight: '4px $primary solid',
  },
});

export default function ListCategory({ data, css }) {
  return (
    <Wrapper css={css}>
      <h2>Categories</h2>
      {data.map((cat, i) => (
        <Item to={`/tags/${kebabCase(cat.node.uid)}/`} key={cat.node.uid}>
          {cat.node.data.name}
        </Item>
      ))}
    </Wrapper>
  );
}
