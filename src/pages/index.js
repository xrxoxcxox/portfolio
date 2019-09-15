import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/Footer'
import Image from '../components/Image'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import TopTitle from '../components/TopTitle'

import { css } from '@emotion/core'
import GlobalStyle from '../styles/GlobalStyle'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

/* 画像にhoverしたときにpにスタイルをあてたいため、タグの入れ子でスタイル指定 */
const link = css`
  grid-column: span 6;
  text-decoration: none;
  p {
    ${Typography.Body};
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
    p::after {
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

export default () => (
  <>
    <GlobalStyle />
    <Seo title='' />
    <Layout>
      <TopTitle />
      <Link to='/breath-m' css={link}>
        <Image filename='breath-m/thumbnail.png' alt='画像' />
        <p>Breath.M</p>
      </Link>
      <Link to='/about-this-portfolio' css={link}>
        <Image filename='about_this_portfolio.jpg' alt='画像' />
        <p>ポートフォリオについて</p>
      </Link>
      <Link to='/about-me' css={link}>
        <Image filename='about_me.jpg' alt='画像' />
        <p>綿貫佳祐について</p>
      </Link>
      <Footer />
    </Layout>
  </>
)
