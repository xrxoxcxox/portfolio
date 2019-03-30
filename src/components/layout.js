import React from "react";
import AdobeFonts from "../components/adobeFonts";

import { css } from "@emotion/core";

const layout = css`
  display: grid;
  grid-template-columns: repeat(12, 6.4rem);
  grid-column-gap: 2.4rem;
  justify-content: center;
  align-content: flex-start;
  padding-bottom: 16rem;
`;

export default ({ children, className }) => (
  <div css={layout} className={className}>
    <AdobeFonts />
    {children}
  </div>
);
