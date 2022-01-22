import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { ResourceTitle, Body, ProjectTitle } from '../styles/TextStyles';
import projects from '../../content/project.json';
import Link from '@/components/GatsbyLink';
import Container from '@/components/Container';

const Row = styled('section', {
  // background: '#134042',
});

const Grid = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '30vh',
});

const Title = styled(ResourceTitle, {
  fontFamily: '$syne',
  textTransform: 'uppercase',
  fontSize: '$6',
});

const ProjectDescripiton = styled(Body, {});

const ListProject: React.FC = ({ css }) => (
  <>
    {projects.map((item: ProjectType) => (
      // <Row css={{ background: `${item.background}` }}>
      <Row css={css}>
        <Grid>
          <Title>{item.title}</Title>
          <ProjectDescripiton>{item.description}</ProjectDescripiton>
          <Link to={item.url}>View Project</Link>
        </Grid>
      </Row>
    ))}
  </>
);

export default ListProject;
