import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/core'

import Color from '../styles/Color'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const root = css`
  align-items: center;
  background-color: ${Color.White};
  display: flex;
  grid-column: 1 / -1;
  height: ${Size(16)};
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 768px) {
    margin: 0 -${Size(4)};
    padding: 0 ${Size(4)};
  }
  a {
    color: ${Color.Black};
    ${Typography.Body};
    font-family: proxima-nova, sans-serif;
    font-weight: 900;
    padding: ${Size(3)} 0;
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    ::after {
      border-bottom: ${Size(0.25)} solid currentColor;
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
    color: ${Color.Blue};
  }
`

export default () => (
  <div css={root}>
    <Link to='/'>
      Keisuke <span>W</span>atanuk<span>i</span> <span>P</span>ortfolio
    </Link>
  </div>
)
