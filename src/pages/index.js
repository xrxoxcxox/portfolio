import React from "react";
import AdobeFonts from "../components/adobeFonts";
import SEO from "../components/seo";
import Layout from "../components/layout";
import TopTitle from "../components/topTitle";

export default () => (
  <>
    <AdobeFonts />
    <SEO title="Keisuke Watanuki Portfolio" />
    <Layout>
      <TopTitle />
    </Layout>
  </>
);
