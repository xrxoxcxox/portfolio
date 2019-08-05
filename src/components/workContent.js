import React from "react";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const root = css`
  grid-row: span 2;
  grid-column: 5 / 11;
  h2 {
    font-size: 4rem;
    line-height: 5rem;
    font-weight: 500;
    margin-top: 6.4rem;
    @media (max-width: 768px) {
      font-size: 2.8rem;
      line-height: 3.8rem;
    }
  }
  h3 {
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: 600;
    margin-top: 3.2rem;
    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 3rem;
    }
  }
  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    &:not(:first-of-type) {
      margin-top: 1.6rem;
    }
    @media (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
  ul {
    font-size: 1.6rem;
    line-height: 2.6rem;
    margin-top: 1.6rem;
    margin-left: 1.2em;
    @media (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
  a {
    color: ${colors.Blue};
  }
`;

export default ({ className, children }) => (
  <section css={root} className={className}>
    {children}
  </section>
);
