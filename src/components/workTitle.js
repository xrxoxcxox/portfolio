import React from "react";

import { css } from "@emotion/core";

const title = css`
  font-size: 6.4rem;
  line-height: 7.4rem;
  font-weight: bold;
  grid-column: 1 / -1;
  @media (max-width: 768px) {
    font-size: 4.8rem;
    line-height: 5.8rem;
  }
`;

export default ({ children, className }) => (
  <h1 css={title} className={className}>
    {children}
  </h1>
);
