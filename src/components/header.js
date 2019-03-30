import React from "react";
import { Link } from "gatsby";

import { css } from "@emotion/core";
import colors from "../styles/colors";

const header = css`
  display: flex;
  align-items: center;
  grid-column: 1 / 13;
  height: 6.4rem;
  background-color: ${colors.White};
  a {
    font-family: proxima-nova, sans-serif;
    font-size: 1.6rem;
    font-weight: 900;
    text-decoration: none;
    color: ${colors.Black};
    padding: 1.2rem 0;
    transition: all 0.25s ease-in-out;
    ::after {
      content: "";
      display: block;
      width: 0;
      transition: all 0.25s ease-out;
      border-bottom: 1px solid currentColor;
    }
    :hover::after {
      width: 100%;
    }
  }
`;

export default ({ className }) => (
  <div className={className} css={header}>
    <Link to="/">Keisuke Watanuki Portfolio</Link>
  </div>
);
