import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Link as ChakraLink, chakra } from '@chakra-ui/react';
// import { OutboundLink } from "gatsby-plugin-google-gtag";

const ActiveLink = {
  fontWeight: 600,
};

const CustomLink = chakra(GatsbyLink);

const defaultProps: LinkProps = {
  target: `_self`,
  className: ``,
  children: {},
  activeClassName: ``,
  partiallyActive: false,
  variant: '',
};

type LinkProps = {
  target?: '_blank' | '_self';
  className?: string;
  children?: React.ReactNode;
  to: string;
  activeClassName?: string;
  partiallyActive?: boolean;
  variant?: string;
};

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
  children,
  to,
  className,
  activeClassName,
  partiallyActive,
  target,
  variant,
  ...other
}: LinkProps) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <CustomLink
        to={to}
        className={className}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        activeStyle={ActiveLink}
        target={target}
        {...other}
      >
        {children}
      </CustomLink>
    );
  }
  return (
    <ChakraLink
      isExternal
      href={to}
      className={className}
      target={target}
      rel="noreferrer noopener"
      variant={variant}
      {...other}
    >
      {children}
    </ChakraLink>
  );
};

Link.defaultProps = defaultProps;

export default Link;
