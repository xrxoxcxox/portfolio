import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";

import "typeface-montserrat";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  display: block;
  font-family: montserrat, sans-serif;
  font-weight: 900;
  font-size: calc(2rem + 20vw);
  line-height: 0.85;
  color: ${props => (props.lowercase ? "#c7c7cc" : "#8e8e93")};
`;

const IndexPage = () => (
  <Container>
    <SEO title="WiP WIP" />
    <Title lowercase>WiP</Title>
    <Title>WIP</Title>
  </Container>
);

export default IndexPage;
