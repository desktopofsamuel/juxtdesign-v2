import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { ResourceTitle, Body, ProjectTitle } from '../styles/TextStyles';
import projects from '../../content/project.json';
import Link from '@/components/GatsbyLink';
import Container from '@/components/Container';

const Row = styled('section', {
  background: '#134042',
  width: '100vw',
  position: 'relative',
  marginLeft: '-50vw',
  left: '50%',
});

const Grid = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '30vh',
});

const Title = styled(ResourceTitle, {
  fontFamily: 'Syne',
  textTransform: 'uppercase',
  color: '$white100',
});

const ProjectDescripiton = styled(Body, {
  color: '$white100',
});

const ListProject: React.FC = () => (
  <>
    {projects.map((item: ProjectType) => (
      <Row css={{ background: `${item.background}` }}>
        <Container size="medium">
          <Grid>
            <Title>{item.title}</Title>
            <ProjectDescripiton>{item.description}</ProjectDescripiton>

            <Link to={item.url}>View Project</Link>
          </Grid>
        </Container>
      </Row>
    ))}
  </>
);

export default ListProject;
