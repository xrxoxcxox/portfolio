import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/header";
import AboveTheFold from "../components/aboveTheFold";
import Tag from "../components/workTag";
import Content from "../components/workContent";
import Image from "../components/image";
import ToIndex from "../components/workToIndex";

import { css } from "@emotion/core";

const availableTechnics = css`
  grid-column: 1 / 9;
  margin-top: 3.2rem;
  @media (max-width: 768px) {
    grid-column: 2 / -2;
  }
  + p {
    margin-top: 4rem;
  }
`;

const externalLink = css`
  margin-left: 1.6rem;
`;

const tags = ["デザイナー", "Web", "UI", "UX"];

export default () => (
  <Layout>
    <SEO title="About Me" />
    <Header />
    <AboveTheFold image="about-me.jpg">綿貫佳祐について</AboveTheFold>
    <Content>
      <Tag year="1993" tags={tags} />
      <p>愛知県在住。エイチームという会社でデザイナーをしています。</p>
      <p>
        1993年生まれ、大学を卒業後にエイチームに就職。業務ではWebのビジュアルからマークアップまでを担当。また、サイトを分析し改善、効果測定をしてまた分析……と制作以外の役割も担っています。
      </p>
      <p>
        個人でもWebサービスやアプリの開発をしており、前述の通りスタイリングにまつわる部分は1人でも完結が可能。
      </p>
    </Content>
    <Content>
      <h2>制作、実行が可能なジャンル</h2>
      <ul>
        <li>画像編集、グラフィック、エディトリアルなど静的なスタイリング</li>
        <li>モーショングラフィックス、動画編集など動的なスタイリング</li>
        <li>プロトタイプ作成からユーザーテストまで、UXデザイン全般</li>
        <li>設計から実装まで、マークアップ全般</li>
      </ul>
      <Image filename="available-technics.jpg" css={availableTechnics} />
    </Content>
    <Content>
      <h2>普段の私</h2>
      <p>Twitterとnoteによくいます。</p>
      <p>
        Twitterでは日頃のちょっとした気付きやアイデア、あるいは制作の状況など。noteではデザインについての考え方や理想を綴っていることが多いです。
      </p>
      <p>
        <a
          href="https://twitter.com/xrxoxcxox"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitterはコチラ
        </a>
        <a
          href="https://note.mu/xrxoxcxox"
          target="_blank"
          rel="noopener noreferrer"
          css={externalLink}
        >
          noteはコチラ
        </a>
      </p>
      <p>良かったら是非声をかけてください。</p>
    </Content>
    <ToIndex />
  </Layout>
);
