import React from "react";
import Helmet from "react-helmet";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import SEO from "../components/seo";

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

const GlobalStyles = createGlobalStyle`
  html {
    visibility: hidden;
  }
  html.wf-active {
    visibility: visible;
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
  font-family: proxima-nova, sans-serif;
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
  <>
    <GlobalStyles />
    <Helmet>
      <script>
        {`
          (function(d) {
            var config = {
              kitId: 'wyq3rwo',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);
        `}
      </script>
    </Helmet>
    <Container>
      <SEO title="WiP WIP" />
      <Title lowercase>WiP</Title>
      <Title>WIP</Title>
    </Container>
  </>
);

export default IndexPage;
