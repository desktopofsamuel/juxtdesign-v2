import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Container from '@/components/Container';

const Wrapper = styled('section', {
  visibility: 'hidden',
  position: 'absolute',
  top: '81px', // Header Height is 80px
  left: '0',
  width: '100%',
  margin: '0 auto',
  opacity: '0',
  background: '$background',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
  transition: 'all 100ms ease-in',
  zIndex: '1',
});

const Grid = styled('div', {
  display: 'grid',
  gridGap: '$2',
  gridAutoFlow: 'column',
  justifyContent: 'space-between',
});

const Submenu: React.FC = ({ children }) => (
  <Wrapper>
    <Container size="medium" css={{ paddingBottom: '$2' }}>
      <Grid>{children}</Grid>
    </Container>
  </Wrapper>
);

export default Submenu;
