import React from "react";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const content = css`
  display: grid;
  grid-column: 3 / 11;
  grid-template-columns: repeat(8, 6.4rem);
  grid-column-gap: inherit;
  margin-top: 4.8rem;
  :first-of-type {
    margin-top: 6.4rem;
  }
  h2 {
    grid-column: 3 / 9;
    font-size: 4rem;
    line-height: 5rem;
    font-weight: normal;
  }
  p,
  ul {
    grid-column: 3 / 9;
    font-size: 1.6rem;
    line-height: 2.6rem;
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
