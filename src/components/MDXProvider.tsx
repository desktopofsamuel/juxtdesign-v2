import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/MDXComponents';

export default function MdxProvider({ children }) {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>;
}
