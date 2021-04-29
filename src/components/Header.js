import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { css } from '@emotion/react'
import hexToRgba from 'hex-rgba'

import { getSize } from '../styles/Size'
import { color } from '../styles/Theme'

const root = css`
  align-items: center;
  backdrop-filter: blur(8px);
  background-color: ${hexToRgba(color.gray[0], 25)};
  display: flex;
  grid-column: 1 / -1;
  height: ${getSize(16)};
  line-height: 1;
  padding: ${getSize(3)} 0;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 768px) {
    margin: 0 -${getSize(4)};
    padding: 0 ${getSize(4)};
  }
  a {
    align-items: center;
    color: ${color.gray[90]};
    display: flex;
    font-family: proxima-nova, sans-serif;
    font-weight: 900;
    position: relative;
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    ::after {
      border-bottom: ${getSize(0.25)} solid ${color.blue[60]};
      bottom: ${getSize(-1)};
      content: '';
      display: block;
      position: absolute;
      transform: scaleX(0);
      transform-origin: bottom left;
      transition: all 0.25s ease-out;
      width: 100%;
    }
    :hover::after {
      transform: scaleX(1);
      transform-origin: bottom right;
    }
  }
`

const icon = css`
  flex-shrink: 0;
  height: 16px;
  width: 16px;
`

const siteName = css`
  margin-left: ${getSize(2)};
`

const accent = css`
  color: ${color.blue[60]};
`

export const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 16, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `)
  return (
    <header css={root}>
      <Link to='/'>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} aria-hidden='true' alt='' css={icon} />
        <span css={siteName}>
          Keisuke <span css={accent}>W</span>atanuk<span css={accent}>i</span> <span css={accent}>P</span>ortfolio
        </span>
      </Link>
    </header>
  )
}
