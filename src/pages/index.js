import React from 'react'
import { Link, graphql } from 'gatsby'

import Footer from '../components/Footer'
import Image from '../components/Image'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import TopTitle from '../components/TopTitle'

import { css } from '@emotion/core'
import GlobalStyle from '../styles/GlobalStyle'
import Size from '../styles/Size'
import Typography from '../styles/Typography'
import Color from '../styles/Color'

import LinkToTheWork from '../components/LinkToTheWork'

/* 画像にhoverしたときにpにスタイルをあてたいため、タグの入れ子でスタイル指定 */
const link = css`
  grid-column: span 6;
  text-decoration: none;
  h2 {
    ${Typography.Body1};
    display: inline-block;
    margin-top: ${Size(1)};
    &::after {
      content: '';
      display: block;
      width: 0;
      transition: all 0.25s ease-out;
      border-bottom: ${Size(0.25)} solid currentColor;
    }
  }
  &:hover {
    .gatsby-image-wrapper {
      opacity: 0.8;
    }
    h2::after {
      width: 100%;
    }
  }
  &:nth-of-type(n + 3) {
    margin-top: ${Size(10)};
  }
  @media (max-width: 480px) {
    grid-column: 1 / -1;
    :not(:first-of-type) {
      margin-top: ${Size(4)};
    }
  }
`

const headline = css`
  grid-column: 3 / 11;
  ${Typography.Headline2};
  margin-top: ${Size(28)};
  @media (max-width: 480px) {
    grid-column: 1 / -1;
  }
`

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
        <Link to='/breath-m' css={link}>
          <Image filename='breath-m/thumbnail.png' alt='画像' />
          <h2>Breath.M</h2>
        </Link>
        <Link to='/about-this-portfolio' css={link}>
          <Image filename='aboout-this-portfolio/main-visual.jpg' alt='画像' />
          <h2>ポートフォリオについて</h2>
        </Link>
        <Link to='/about-me' css={link}>
          <Image filename='about-me/main-visual.jpg' alt='画像' />
          <h2>綿貫佳祐について</h2>
        </Link>
        <h2 css={headline}>リリースノート</h2>
        {/* <div
          dangerouslySetInnerHTML={{ __html: node.html }}
          css={releaseNote}
        /> */}
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
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
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
