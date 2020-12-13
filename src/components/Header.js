import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { css } from '@emotion/core'

import { getSize } from '../styles/Size'
import { color } from '../styles/Theme'

const root = css`
  align-items: center;
  background-color: ${color.gray[0]};
  display: flex;
  grid-column: 1 / -1;
  height: ${getSize(16)};
  line-height: 1;
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
    padding: ${getSize(3)} 0;
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    ::after {
      border-bottom: ${getSize(0.25)} solid currentColor;
      content: '';
      display: block;
      transition: all 0.25s ease-out;
      width: 0;
    }
    :hover::after {
      width: 100%;
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
          fluid(maxWidth: 16, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <header css={root}>
      <Link to='/'>
        <Img fluid={data.file.childImageSharp.fluid} aria-hidden='true' alt='' css={icon} />
        <span css={siteName}>
          Keisuke <span css={accent}>W</span>atanuk<span css={accent}>i</span> <span css={accent}>P</span>ortfolio
        </span>
      </Link>
    </header>
  )
}
