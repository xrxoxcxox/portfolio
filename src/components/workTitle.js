import React from "react";

import { css } from "@emotion/core";

const title = css`
  font-size: 6.4rem;
  line-height: 7.4rem;
  font-weight: bold;
  grid-column: 1 / 13;
`;

export default ({ children, className }) => (
  <h1 css={title} className={className}>
    {children}
  </h1>
);
