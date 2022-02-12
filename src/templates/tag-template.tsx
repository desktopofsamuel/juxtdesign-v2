import React from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { components } from '../slices';
import Layout from '@/components/Layout';
import ListPost from '@/components/ListPost';
import ListMdxBlog from '@/components/ListMdxBlog';
import SEO from '@/components/SEO';
import { PageTitle, Body } from '../styles/TextStyles';

const Wrapper = styled('div', {
  margin: '$7 0',
});

const PostListWrapper = styled('div', {
  gridGap: '$3',
  gridColumn: 'span 12',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  '@md': {
    gridTemplateColumns: '1fr',
  },
});

export default function CategoryBlogTemplate({ data, pageContext }) {
  // if (!data) return null;
  // const blogs = data.allMdx.edges;
  // // const posts = data.allPrismicPost.edges;
  // const pageTitle = `Best ${
  //   pageContext.tag
  // } Design Resources in ${dayjs().year()}`;

  return (
    // <Layout>
    //   <SEO
    //     postPath={pageContext.slug}
    //     pageTitle={pageTitle}
    //     // pageDescription={item.description}
    //     // pageKeywords={item.keywords}
    //     postSEO={false}
    //     // pageImage={item.image && item.image.url}
    //   />
    //   <Wrapper>
    //     <PageTitle>{pageTitle}</PageTitle>
    //     {/* {item.description && <Body>{item.description}</Body>} */}
    //   </Wrapper>
    //   {/* {item.feature && <p>{item.feature.src}</p>} */}
    //   {blogs && (
    //     <>
    //       <h3>Guides</h3>
    //       <PostListWrapper>
    //         <ListMdxBlog data={blogs} withImage withDate withDescription />
    //       </PostListWrapper>
    //     </>
    //   )}

    //   {/* <h3>Resources</h3>
    //   <ListPost
    //     data={posts}
    //     css={{
    //       gridTemplateColumns: '1fr 1fr 1fr',
    //       '@md': { gridTemplateColumns: '1fr' },
    //     }}
    //   /> */}
    // </Layout>
    <Layout>hello</Layout>
  );
}

// export const query = graphql`
//   query CategoryBlogQuery($slug: String) {
//     allMdx(
//       filter: {
//         # fields: { tagSlugs: { glob: $slug } }
//         frontmatter: { publish: { ne: false } }
//       }
//       sort: { fields: fields___date, order: DESC }
//     ) {
//       edges {
//         node {
//           ...mdxblog
//         }
//       }
//     }
//   }
// `;
