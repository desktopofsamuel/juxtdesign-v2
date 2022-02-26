import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { ResourceTitle, Body, ProjectTitle } from '../styles/TextStyles';
import projects from '../../content/project.json';
import Button from '@/components/Button';
import Container from '@/components/Container';

const Row = styled('div', {
  // background: '#134042',
});

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '$4',
  alignItems: 'center',
  justifyContent: 'center',
});

const Wrapper = styled('div', {
  display: 'grid',
  gridGap: '$2',
});

const Title = styled(ResourceTitle, {
  textTransform: 'uppercase',
  fontSize: '$4',
});

const ProjectDescripiton = styled(Body, {});

const ListProject: React.FC = ({ css }) => (
  <>
    {projects.map((item: ProjectType) => (
      // <Row css={{ background: `${item.background}` }}>
      <Row css={css}>
        <Grid>
          <img src={item.image} alt={item.title} />
          <Wrapper>
            <Title>{item.title}</Title>
            <ProjectDescripiton>{item.description}</ProjectDescripiton>
            <Button to={item.url}>View Project</Button>
          </Wrapper>
        </Grid>
      </Row>
    ))}
  </>
);

export default ListProject;
