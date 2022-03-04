import React from 'react';
import GatsbyLink from '@/components/GatsbyLink';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

type Props = {
  prevPagePath: string;
  nextPagePath: string;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

const Wrapper = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '$4 0',
});

const PaginationButton = styled(GatsbyLink, {
  color: '$onBackground',
  border: '1px solid $border',
  padding: '$2 $4',
  borderRadius: '$3',

  variants: {
    style: {
      active: {
        opacity: '1',
      },
      inactive: {
        opacity: '0.5',
      },
    },
  },
});

export default function Pagination({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
}: Props) {
  return (
    <Wrapper>
      <PaginationButton
        to={hasPrevPage ? prevPagePath : null}
        style={hasPrevPage ? 'active' : 'inactive'}
      >
        Previous
      </PaginationButton>
      <PaginationButton
        to={hasNextPage ? nextPagePath : null}
        style={hasNextPage ? 'active' : 'inactive'}
      >
        Next
      </PaginationButton>
    </Wrapper>
  );
}
