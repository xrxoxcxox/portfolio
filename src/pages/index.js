import React from 'react'
import { Link, graphql } from 'gatsby'

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import LinkToTheWork from '../components/LinkToTheWork'
import Seo from '../components/Seo'
import TopTitle from '../components/TopTitle'

import { css } from '@emotion/core'
import GlobalStyle from '../styles/GlobalStyle'
import Size from '../styles/Size'
import Color from '../styles/Color'

const releaseNote = css`
  grid-column: 3 / 11;
  height: ${Size(54)};
  overflow-y: scroll;
  margin-top: ${Size(3)};
  @media (max-width: 480px) {
    grid-column: 1 / -1;
    height: ${Size(60)};
  }
  a {
    color: ${Color.Blue};
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  tbody tr {
    border-top: ${Size(0.25)} solid ${Color.Gray80};
  }
  td {
    padding: ${Size(2)};
  }
`

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => (
    <LinkToTheWork key={edge.node.id} post={edge.node} />
  ))
  return (
    <>
      <GlobalStyle />
      <Seo title='' />
      <Layout>
        <TopTitle />
        {Posts}
        <Footer />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown-pages/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/release-notes/" } }
//     ) {
//       totalCount
//       edges {
//         node {
//           html
//         }
//       }
//     }
//   }
// `
