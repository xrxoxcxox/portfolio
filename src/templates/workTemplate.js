import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import WorkTag from '../components/WorkTag'
import WorkToIndex from '../components/WorkToIndex'

import { css } from '@emotion/core'
import GlobalStyle from '../styles/GlobalStyle'
import Color from '../styles/Color'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const mainVisual = css`
  grid-column: 4 / -1;
  grid-row: 2 / 3;
  position: relative;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    margin: 0 -${Size(4)};
  }
`

const title = css`
  grid-column: 4 / -3;
  ${Typography.Title}
  margin-top: ${Size(6)};
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    position: static;
  }
`

const workTag = css`
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  align-self: end;
  position: sticky;
  top: ${Size(24)};
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    position: static;
    margin-top: ${Size(6)};
  }
`

const body = css`
  grid-column: 4 / -3;
  grid-row: span 3;
  @media (max-width: 768px) {
    grid-row: span 1;
    grid-column: 1 / -1;
  }
  h2 {
    ${Typography.Headline1}
    margin-top: ${Size(16)};
    @media (max-width: 768px) {
      margin-top: ${Size(10)};
    }
  }
  h3 {
    ${Typography.Headline2}
    margin-top: ${Size(8)};
    @media (max-width: 768px) {
      margin-top: ${Size(6)};
    }
  }
  p {
    ${Typography.Body1}
    margin-top: ${Size(5)};
  }
  ul {
    ${Typography.Body1}
    margin-top: ${Size(4)};
    margin-left: ${Size(5)};
  }
  a {
    color: ${Color.Blue};
  }
  small {
    display: block;
    ${Typography.Body3};
    color: ${Color.Gray400};
    margin-top: ${Size(2)};
  }
`

const workToIndex = css`
  grid-column: 4 / -3;
  margin-top: ${Size(16)};
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <>
      <GlobalStyle />
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <Layout>
        <Header />
        <Img fluid={featuredImgFluid} alt='' css={mainVisual} />
        <h1 css={title}>{post.frontmatter.title}</h1>
        <WorkTag
          year={post.frontmatter.date}
          tags={post.frontmatter.tags}
          css={workTag}
        />
        <article dangerouslySetInnerHTML={{ __html: post.html }} css={body} />
        <WorkToIndex css={workToIndex} />
        <Footer />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY")
        title
        description
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
