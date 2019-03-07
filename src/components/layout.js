import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 6.4rem);
  justify-content: center;
  grid-column-gap: 2.4rem;
  height: 100vh;
`;

export default ({ children }) => <Layout>{children}</Layout>;
