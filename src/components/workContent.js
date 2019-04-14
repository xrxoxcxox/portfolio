import React from "react";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const content = css`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(12, minmax(1.2rem, 6.4rem));
  grid-column-gap: inherit;
  margin-top: 4.8rem;
  position: relative;
  :first-of-type {
    margin-top: 6.4rem;
  }
  h2 {
    grid-column: 5 / 11;
    font-size: 4rem;
    line-height: 5rem;
    font-weight: normal;
    @media (max-width: 768px) {
      grid-column: 2 / -1;
      position: static;
    }
  }
  p,
  ul {
    grid-column: 5 / 11;
    font-size: 1.6rem;
    line-height: 2.6rem;
    @media (max-width: 768px) {
      grid-column: 2 / -2;
      position: static;
    }
    + p,
    ul {
      margin-top: 1.6rem;
    }
  }
  ul {
    margin-left: 1.2em;
  }
  h2 + p,
  ul {
    margin-top: 3.2rem;
  }
  a {
    color: ${colors.Blue};
  }
`;

export default ({ children }) => <section css={content}>{children}</section>;
