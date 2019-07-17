import React from "react";

import { css } from "@emotion/core";
import colors from "../styles/colors";

const root = css`
  grid-column: span 12;
  font-size: 1.4rem;
  color: ${colors.Gray};
  text-align: center;
`;

export default ({ className }) => (
  <footer className={className} css={root}>
    © 2019 Keisuke Watanuki
  </footer>
);
