import React from "react";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const root = css`
  grid-column: 3 / 5;
  position: sticky;
  top: 9.6rem;
  margin-top: 6.4rem;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    position: static;
    margin-top: 2rem;
  }
  span {
    font-size: 2rem;
  }
  ul {
    display: block;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: ${colors.Gray};
    border-left: 0.1rem solid ${colors.Gray};
    margin: 0.4rem 0 0 0;
    padding: 0.4rem 0 0.4rem 1.2rem;
    list-style-type: none;
  }
`;

const Tag = ({ className, year, tags }) => {
  const tagItems = tags.map(tag => <li key={tag}>{tag}</li>);
  return (
    <div css={root} className={className}>
      <span>{year}</span>
      <ul>{tagItems}</ul>
    </div>
  );
};

export default Tag;
