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
  :first-of-type {
    margin-top: 6.4rem;
  }
  @media (max-width: 768px) {
    :first-of-type {
      margin-top: 4.8rem;
    }
  }
  h2 {
    grid-column: 5 / 11;
    font-size: 4rem;
    line-height: 5rem;
    font-weight: normal;
    @media (max-width: 768px) {
      grid-column: 4 / -2;
      font-size: 3.2rem;
      line-height: 4.2rem;
    }
    @media (max-width: 414px) {
      grid-column: 1 / -1;
      font-size: 2.8rem;
      line-height: 3.8rem;
    }
  }
  p,
  ul {
    grid-column: 5 / 11;
    font-size: 1.6rem;
    line-height: 2.6rem;
    @media (max-width: 768px) {
      grid-column: 4 / -2;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
    @media (max-width: 414px) {
      grid-column: 1 / -1;
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
    @media (max-width: 768px) {
      margin-top: 2rem;
    }
  }
  a {
    color: ${colors.Blue};
  }
`;

export default ({ children }) => <section css={content}>{children}</section>;
