import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/core'

import Colors from '../styles/Colors'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const root = css`
  display: flex;
  align-items: center;
  grid-column: 1 / -1;
  height: ${Size(16)};
  background-color: ${Colors.White};
  a {
    ${Typography.Body};
    font-family: proxima-nova, sans-serif;
    font-weight: 900;
    text-decoration: none;
    color: ${Colors.Black};
    padding: ${Size(3)} 0;
    transition: all 0.25s ease-in-out;
    ::after {
      content: '';
      display: block;
      width: 0;
      transition: all 0.25s ease-out;
      border-bottom: ${Size(0.25)} solid currentColor;
    }
    :hover::after {
      width: 100%;
    }
  }
  span {
    color: ${Colors.Blue};
  }
`

export default ({ className }) => (
  <div className={className} css={root}>
    <Link to='/'>
      Keisuke <span>W</span>atanuk<span>i</span> <span>P</span>ortfolio
    </Link>
  </div>
)