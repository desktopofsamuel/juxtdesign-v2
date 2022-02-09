import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Link from './GatsbyLink';
import { ResourceTitle, Body, Meta } from '@/styles/TextStyles';
import { FaArrowRight } from 'react-icons/fa';

const Article = styled(Link, {
  paddingBottom: `$4`,
  marginBottom: `$4`,
  borderBottom: `1px solid $border`,
});

const Wrap = styled(Link, {});

const Go = styled(Link, {
  display: `grid`,
  width: `24px`,
  height: `24px`,
  borderRadius: `12px`,
  backgroundColor: `$primary`,
  placeContent: `center center`,
  color: `$onPrimary`,
});

const Flex = styled(`div`, {
  display: `flex`,
  flexDirection: `row`,
  gap: `$4`,
});

const Tag = styled(`span`, {
  padding: '$1 $2',
  borderRadius: '$2',
  backgroundColor: `$primary`,
  color: `$onPrimary`,
});
export default function ListSmallBlog({
  data,
  css,
  withDescription,
  withDate,
}) {
  return (
    <>
      {data.map((post, i) => (
        <Article
          to={post.node.fields.slug}
          key={post.node.fields.slug}
          css={{ display: `grid`, gap: `$2`, marginBottom: `$2` }}
        >
          <ResourceTitle>{post.node.fields.title}</ResourceTitle>
          {withDescription ? <Body>{post.node.excerpt}</Body> : null}
          {/* <SliceZone slices={post.node.data.body} components={components} /> */}
          {withDate && <Meta type="label">{post.node.fields.date}</Meta>}

          <Flex>
            {post.node.frontmatter.tags ? (
              <div>
                {post.node.frontmatter.tags.map((tag) => (
                  <Tag>#{tag}</Tag>
                ))}
              </div>
            ) : null}
            <Go to={post.node.fields.slug}>
              <FaArrowRight size={12} />
            </Go>
          </Flex>
        </Article>
      ))}
    </>
  );
}
