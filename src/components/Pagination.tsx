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
});

export default function Pagination({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
}: Props) {
  return (
    <Wrapper>
      <GatsbyLink
        to={hasPrevPage ? prevPagePath : null}
        isDisabled={!hasPrevPage}
      >
        Previous
      </GatsbyLink>
      <GatsbyLink
        to={hasNextPage ? nextPagePath : null}
        isDisabled={!hasNextPage}
      >
        Next
      </GatsbyLink>
    </Wrapper>
  );
}
