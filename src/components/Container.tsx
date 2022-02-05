import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Wrapper = styled('div', {
  padding: '$3',
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
  as?: string;
};

const defaultProps: ContainerProps = {
  size: 'large',
  css: '',
  as: 'div',
};

const Container: React.FC<ContainerProps> = ({ children, size, css, as }) => (
  <Wrapper size={size} css={css} as={as}>
    {children}
  </Wrapper>
);

Container.defaultProps = defaultProps;

export default Container;
