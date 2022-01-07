import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Wrapper = styled('main', {
  padding: '$2',
  margin: '0 auto',

  variants: {
    size: {
      large: {
        maxWidth: '$space$large',
      },
      medium: {
        maxWidth: '$space$medium',
      },
      small: {
        maxWidth: '$space$small',
      },
    },
  },

  defaultVariants: {
    size: 'large',
  },
});

type ContainerProps = {
  size?: 'small' | 'medium' | 'large';
  css?: string;
};

const defaultProps: ContainerProps = {
  size: 'large',
  css: '',
};

const Container: React.FC<ContainerProps> = ({ children, size, css }) => (
  <Wrapper size={size} css={css}>
    {children}
  </Wrapper>
);

Container.defaultProps = defaultProps;

export default Container;
