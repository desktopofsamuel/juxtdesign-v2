import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import GatsbyLink from '@/components/GatsbyLink';

const LinkWrapper = styled(GatsbyLink, {
  padding: '$2 $3',
  borderRadius: '$3',
  backgroundColor: '$secondary',
  color: '$onPrimary',
  textAlign: 'center',
  transition: '$default',

  '&:hover': {
    backgroundColor: '$secondaryHover',
    textDecoration: 'none',
  },
});

export default function Button({ to, target, children, ...props }) {
  return (
    <LinkWrapper to={to} target={target} {...props}>
      {children}
    </LinkWrapper>
  );
}
