import React from 'react'
import { graphql } from 'gatsby'

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import LinkToTheWork from '../components/LinkToTheWork'
import ReleaseNote from '../components/ReleaseNotes'
import Seo from '../components/Seo'
import TopTitle from '../components/TopTitle'

import { css } from '@emotion/core'
import GlobalStyle from '../styles/GlobalStyle'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const headline = css`
  grid-column: 3 / 11;
  ${Typography.Headline2};
  margin-top: ${Size(28)};
  @media (max-width: 480px) {
    grid-column: 1 / -1;
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
        <h2 css={headline}>リリースノート</h2>
        <ReleaseNote />
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
