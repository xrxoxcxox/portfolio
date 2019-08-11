import React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/Seo'
import Layout from '../components/Layout'
import TopTitle from '../components/TopTitle'
import Footer from '../components/Footer'
import Image from '../components/Image'

import { css, keyframes } from '@emotion/core'
import GlobalStyle from '../styles/GlobalStyle'
import Colors from '../styles/Colors'
import Size from '../styles/Size'

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const link = css`
  grid-column: span 6;
  position: relative;
  animation: ${opacity} 400ms ease-out 400ms both;
  @media (max-width: 480px) {
    grid-column: 1 / -1;
    :not(:first-of-type) {
      margin-top: ${Size(3)};
    }
  }
  :hover,
  :active {
    transition: all 0.2s ease-in-out;
    .gatsby-image-wrapper {
      /* Imageコンポーネントにクラス名などが渡せないためここで指定 */
      filter: brightness(40%);
      transition: all 0.2s ease-in-out;
    }
    p {
      opacity: 1;
      transition: all 0.2s ease-in-out;
    }
  }
  p {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    text-align: center;
    font-size: 2.4rem;
    color: ${Colors.White};
    opacity: 0;
  }
`

const footer = css`
  margin-top: ${Size(20)};
`

export default () => (
  <>
    <GlobalStyle />
    <Layout>
      <Seo title='' />
      <TopTitle />
      <Link to='/about-this-portfolio' css={link}>
        <Image filename='about_this_portfolio.jpg' alt='画像' />
        <p>ポートフォリオについて</p>
      </Link>
      <Link to='/about-me' css={link}>
        <Image filename='about_me.jpg' alt='画像' />
        <p>綿貫佳祐について</p>
      </Link>
      <Footer css={footer} />
    </Layout>
  </>
)
