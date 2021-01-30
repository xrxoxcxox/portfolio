import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

import { css } from '@emotion/react'
import { GlobalStyle } from '../styles/GlobalStyle'
import { getSize } from '../styles/Size'
import { color, elevation, typography } from '../styles/Theme'

const header = css`
  grid-column: 1 / -1;
`

const title = css`
  ${typography.headline1};
  grid-column: 3 / -3;
  margin-top: ${getSize(10)};
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`

const releaseNote = css`
  grid-column: 3 / -3;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
  time {
    ${typography.body2};
    color: ${color.text.onSurface.mediumEmphasis};
    display: block;
    margin-top: ${getSize(12)};
  }
  h2 {
    ${typography.headline2};
    margin-top: ${getSize(2)};
  }
  h2 + p,
  ol + p,
  ul + p,
  p + p {
    margin-top: ${getSize(4)};
  }
  ul {
    margin-top: ${getSize(4)};
    padding-left: ${getSize(6)};
  }
  li ul {
    margin-top: 0;
  }
  a {
    color: ${color.blue[60]};
  }
`

const pageToPage = css`
  border-radius: ${getSize(1)};
  box-shadow: ${elevation[1]};
  display: flex;
  grid-column: 5 / 9;
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

export default () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/release-notes/" }) {
        html
      }
    }
  `)
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Seo title='リリースノート' />
        <Header css={header} />
        <h1 css={title}>リリースノート</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} css={releaseNote} />
        <div css={pageToPage}>
          <Link to='/' css={navigation}>
            トップページ
          </Link>
        </div>
        <Footer />
      </Layout>
    </>
  )
}
