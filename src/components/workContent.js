import React from "react";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const content = css`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(12, minmax(1.2rem, 6.4rem));
  grid-column-gap: inherit;
  margin-top: 6.4rem;
  position: relative;
  @media (max-width: 768px) {
    margin-top: 4.8rem;
  }
  h2 {
    font-size: 4rem;
    line-height: 5rem;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 2.8rem;
      line-height: 3.8rem;
    }
  }
  h3 {
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 3rem;
    }
  }
  p,
  ul {
    font-size: 1.6rem;
    line-height: 2.6rem;
    @media (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
    & + p,
    & + ul {
      margin-top: 1.6rem;
    }
  }
  ul {
    margin-left: 1.2em;
  }
  h2 + p,
  h2 + ul {
    margin-top: 3.2rem;
    @media (max-width: 768px) {
      margin-top: 2rem;
    }
  }
  h3 + p,
  h3 + ul {
    margin-top: 2.4rem;
    @media (max-width: 768px) {
      margin-top: 2rem;
    }
  }
  a {
    color: ${colors.Blue};
  }
`;

export default ({ children }) => <section css={content}>{children}</section>;
