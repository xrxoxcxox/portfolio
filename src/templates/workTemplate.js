import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import hexToRgba from 'hex-rgba'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import WorkTag from '../components/WorkTag'

import { css } from '@emotion/core'
import GlobalStyle from '../styles/GlobalStyle'
import Color from '../styles/Color'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const mainVisual = css`
  border: 1px solid ${hexToRgba(Color.Black, 8)};
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
  align-self: end;
  grid-column: 1 / 4;
  grid-row: 2 / 4;
  position: sticky;
  top: ${Size(24)};
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    margin-top: ${Size(6)};
    position: static;
  }
`

const body = css`
  grid-column: 4 / -3;
  grid-row: span 3;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: span 1;
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
  ul, ol {
    margin-left: ${Size(6)};
    ${Typography.Body1}
    margin-top: ${Size(4)};
    ul, ol {
      margin-top: 0;
    }
  }
  a {
    color: ${Color.Blue};
  }
  small {
    ${Typography.Body3};
    color: ${Color.Gray400};
    display: block;
    margin-top: ${Size(2)};
  }
  iframe {
    margin-top: ${Size(5)};
  }
  code {
    background-color: ${Color.Gray700};
    color: ${Color.White};
    display: block;
    overflow-x: scroll;
    padding: ${Size(3)};
    white-space: nowrap;
    width: 100%;
  }
  blockquote {
    background-color: ${Color.Gray20};
    margin-top: ${Size(5)};
    padding: ${Size(3)};
    position: relative;
    &::before {
      content: '“';
      font-size: ${Size(15)};
      left: ${Size(-2)};
      line-height: 1;
      position: absolute;
      top: ${Size(-3)};
    }
    ul {
      margin-top: initial;
    }
  }
`

const pageToPage = css`
  border-radius: ${Size(1)};
  box-shadow: 0 ${Size(0.5)} ${Size(2)} ${hexToRgba(Color.Black, 16)};
  display: flex;
  grid-column: 4 / -3;
  justify-content: space-around;
  margin-top: ${Size(16)};
  @media (max-width: 768px) {
    flex-direction: column;
    grid-column: 1 / -1;
  }
`

const navigation = css`
  color: ${Color.Blue};
  padding: ${Size(4)};
  @media (max-width: 768px) {
    text-align: center;
  }
`

export default ({ data: { mdx }, pageContext }) => {
  const featuredImgFluid = mdx.frontmatter.featuredImage.childImageSharp.fluid
  const featuredImgPath =
    mdx.frontmatter.featuredImage.childImageSharp.fixed.src
  const { next, previous } = pageContext
  return (
    <>
      <GlobalStyle />
      <Seo
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        ogImagePath={featuredImgPath}
      />
      <Layout>
        <Header />
        <Img fluid={featuredImgFluid} alt='' css={mainVisual} />
        <h1 css={title}>{mdx.frontmatter.title}</h1>
        <WorkTag
          start={mdx.frontmatter.start}
          end={mdx.frontmatter.end}
          tags={mdx.frontmatter.tags}
          css={workTag}
        />
        <article css={body}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
        <div css={pageToPage}>
          {previous && (
            <Link to={`${previous.fields.slug}`} css={navigation}>
              ←前の記事
            </Link>
          )}
          {next && (
            <Link to={`${next.fields.slug}`} css={navigation}>
              次の記事→
            </Link>
          )}
          <Link to='/' css={navigation}>
            トップページ
          </Link>
        </div>
        <Footer />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        start
        end
        title
        description
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 768, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
            fixed(width: 1200) {
              src
            }
          }
        }
      }
    }
  }
`
