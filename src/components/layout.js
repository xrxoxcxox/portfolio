import React from "react";
import AdobeFonts from "../components/adobeFonts";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 6.4rem);
  justify-content: center;
  grid-column-gap: 2.4rem;
  padding-bottom: 16rem;
`;

export default ({ children }) => (
  <Layout>
    <AdobeFonts />
    {children}
  </Layout>
);
