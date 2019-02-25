import React from "react";

import SEO from "../components/seo";

import styles from "./index.module.css";

const IndexPage = () => (
  <div className={styles.container}>
    <SEO title="WiP WIP" />
    <h1 className={styles.title}>
      Wip
      <br />
      WIP
    </h1>
  </div>
);

export default IndexPage;
