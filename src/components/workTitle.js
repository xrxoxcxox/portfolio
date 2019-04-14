import React from "react";

import { css } from "@emotion/core";

const title = css`
  font-size: 6.4rem;
  line-height: 7.4rem;
  font-weight: bold;
  grid-column: 1 / 9;
  @media (max-width: 768px) {
    grid-column: 1 / -4;
    font-size: calc(2rem + 4vw);
    line-height: 1.4;
  }
  @media (max-width: 414px) {
    grid-column: 1 / -1;
  }
`;

export default ({ children, className }) => (
  <h1 css={title} className={className}>
    {children}
  </h1>
);
