import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { WorkTag } from '../components/WorkTag'

import { css } from '@emotion/react'
import { GlobalStyle } from '../styles/GlobalStyle'
import { getSize } from '../styles/Size'
import { color, elevation, typography } from '../styles/Theme'

const mainVisual = css`
  border-radius: ${getSize(1)};
  grid-column: 4 / -1;
  grid-row: 2 / 3;
  position: relative;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`

const title = css`
  grid-column: 4 / -3;
  ${typography.title}
  margin-top: ${getSize(6)};
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
  top: ${getSize(24)};
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    margin-top: ${getSize(6)};
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
    ${typography.headline1}
    margin-top: ${getSize(16)};
    @media (max-width: 768px) {
      margin-top: ${getSize(10)};
    }
  }
  h3 {
    ${typography.headline2}
    margin-top: ${getSize(8)};
    @media (max-width: 768px) {
      margin-top: ${getSize(6)};
    }
  }
  p {
    margin-top: ${getSize(5)};
  }
  ul,
  ol {
    margin-left: ${getSize(6)};
    margin-top: ${getSize(4)};
    ul,
    ol {
      margin-top: 0;
    }
  }
  img {
    border-radius: ${getSize(1)};
  }
  a {
    color: ${color.blue[60]};
  }
  small {
    ${typography.body3};
    color: ${color.text.onSurface.mediumEmphasis};
    display: block;
    margin-top: ${getSize(2)};
  }
  iframe {
    margin-top: ${getSize(5)};
  }
  code {
    background-color: ${color.gray[80]};
    color: ${color.text.onBackground.highEmphasis};
    display: block;
    overflow-x: scroll;
    padding: ${getSize(3)};
    white-space: nowrap;
    width: 100%;
  }
  blockquote {
    background-color: ${color.gray[10]};
    margin-top: ${getSize(5)};
    padding: ${getSize(3)};
    position: relative;
    &::before {
      content: '“';
      font-size: ${getSize(15)};
      left: ${getSize(-2)};
      line-height: 1;
      position: absolute;
      top: ${getSize(-3)};
    }
    ul {
      margin-top: initial;
    }
  }
`

const pageToPage = css`
  border-radius: ${getSize(1)};
  box-shadow: ${elevation[1]};
  display: flex;
  grid-column: 4 / -3;
  justify-content: space-around;
  margin-top: ${getSize(16)};
  @media (max-width: 768px) {
    flex-direction: column;
    grid-column: 1 / -1;
  }
`

const navigation = css`
  color: ${color.blue[60]};
  padding: ${getSize(4)};
  @media (max-width: 768px) {
    text-align: center;
  }
`

export default ({ data: { mdx }, pageContext }) => {
  const featuredImgFluid = mdx.frontmatter.featuredImage.childImageSharp.fluid
  const featuredImgPath = mdx.frontmatter.featuredImage.childImageSharp.fixed.src
  const { next, previous } = pageContext
  return (
    <>
      <GlobalStyle />
      <Seo title={mdx.frontmatter.title} description={mdx.frontmatter.description} ogImagePath={featuredImgPath} />
      <Layout>
        <Header />
        <Img fluid={featuredImgFluid} alt='' css={mainVisual} />
        <h1 css={title}>{mdx.frontmatter.title}</h1>
        <WorkTag start={mdx.frontmatter.start} end={mdx.frontmatter.end} tags={mdx.frontmatter.tags} css={workTag} />
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
