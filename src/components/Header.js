import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/core'

import { getSize } from '../styles/Size'
import { color } from '../styles/Theme'

const root = css`
  align-items: center;
  background-color: ${color.gray[0]};
  display: flex;
  grid-column: 1 / -1;
  height: ${getSize(16)};
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 768px) {
    margin: 0 -${getSize(4)};
    padding: 0 ${getSize(4)};
  }
  a {
    color: ${color.gray[90]};
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
  span {
    color: ${color.blue[60]};
  }
`

export default () => (
  <div css={root}>
    <Link to='/'>
      Keisuke <span>W</span>atanuk<span>i</span> <span>P</span>ortfolio
    </Link>
  </div>
)
