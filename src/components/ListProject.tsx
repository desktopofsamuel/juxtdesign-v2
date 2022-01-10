import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { StaticImage } from 'gatsby-plugin-image';

import Link from '@/components/GatsbyLink';

const Grid = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '$4',

  '@md': {
    gridTemplateColumns: '1fr',
  },
});

type ProjectType = {
  title: string;
  description: string;
  url: string;
  image: string;
  background: string;
};

const ListProject = ({ data }: any) => {
  return (
    <Grid>
      {data.map((item: ProjectType) => (
        <Link to={item.url} target="_blank" key={item.title}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Link>
      ))}
    </Grid>
  );
};
export default ListProject;
