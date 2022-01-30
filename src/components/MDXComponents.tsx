import React from 'react';
import GatsbyLink from '@/components/GatsbyLink';

const MDXComponents = {
  a: (props) => <GatsbyLink {...props} />,
};

export default MDXComponents;
