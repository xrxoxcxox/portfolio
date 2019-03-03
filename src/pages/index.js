import React from "react";
import Helmet from "react-helmet";
import styled, { keyframes } from "styled-components";
import colors from "../styles/colors.js";
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  font-family: proxima-nova, sans-serif;
  font-weight: 900;
  font-size: calc(2rem + 8vw);
  line-height: 1;
  margin-left: ${props => (props.WiP ? "calc(0.4rem + 2vw)" : 0)};
  color: ${props => (props.WiP ? colors.Blue : colors.Black)};
  animation: ${contrast} ${props => (props.WiP ? "6000ms" : "0")} ease-in-out
    infinite normal;
`;

const IndexPage = () => (
  <>
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
      <SEO title="Keisuke WiP" />
      <Title>Keisuke</Title>
      <Title WiP>WiP</Title>
    </Container>
  </>
);

export default IndexPage;
