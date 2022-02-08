import React from 'react';
import Layout from '@/components/Layout';
import MDXCompProvider from '@/components/MDXProvider';

const DefaultPageTemplate = ({ children }) => (
  <MDXCompProvider>
    <Layout>
      {children}
      {/* {console.log(children)} */}
    </Layout>
  </MDXCompProvider>
);

export default DefaultPageTemplate;
