import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '@/components/Layout';
import { PageTitle } from '@/styles/TextStyles';
import Link from '@/components/GatsbyLink';

const NotFound: React.FC<PageProps> = () => (
  <Layout>
    <PageTitle css={{ textAlign: 'center' }}>Sorry, page not found!</PageTitle>
    <Link to="/" css={{ textAlign: 'center' }}>
      Back to Home
    </Link>
  </Layout>
);

export default NotFound;
