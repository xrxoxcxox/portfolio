import React from "react";
import styled, { keyframes } from "styled-components";
import SEO from "../components/seo";

import "typeface-montserrat";

const contrast = keyframes`
  0% {
    filter: blur(0) contrast(1);
  }
  10% {
    filter: blur(0) contrast(1);
  }
  60% {
    filter: blur(0.8rem) contrast(1);
  }
  90% {
    filter: blur(4rem) contrast(2);
  }
  100% {
    filter: blur(0) contrast(1);
  }
`;

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
  animation: ${contrast} ${props => (props.lowercase ? "6000ms" : "6400ms")}
    ease-in-out infinite normal;
  &::selection {
    background: none;
  }
`;

const IndexPage = () => (
  <Container>
    <SEO title="WiP WIP" />
    <Title lowercase>WiP</Title>
    <Title>WIP</Title>
  </Container>
);

export default IndexPage;
