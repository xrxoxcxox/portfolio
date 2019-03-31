import React from "react";
import { Link } from "gatsby";
import hexToRgba from "hex-rgba";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/header";
import AboveTheFold from "../components/aboveTheFold";
import Image from "../components/image";

import Content from "../components/workContent";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const layout = css`
  min-height: 100vh;
  padding-bottom: 12rem;
`;

const tag = css`
  grid-column: 1 / 3;
  p {
    font-size: 1.6rem;
  }
  ul {
    display: block;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: ${colors.Gray};
    border-left: 0.1rem solid ${colors.Gray};
    margin-top: 0.4rem;
    padding: 0.4rem 0 0.4rem 0.8rem;
    list-style-type: none;
  }
`;

const originOfTheTitle = css`
  grid-column: 1 / 9;
  box-shadow: 0 0.4rem 1.2rem ${hexToRgba(colors.Black, 16)};
  margin-top: 3.2rem;
  + p {
    margin-top: 4rem;
  }
`;

const link = css`
  color: ${colors.Blue};
  margin-top: 6.4rem;
  grid-column: 5 / 9;
  font-size: 1.4rem;
`;

export default () => (
  <Layout css={layout}>
    <SEO title="About This Portfolio" />
    <Header />
    <AboveTheFold image="about-this-portfolio.jpg">
      このポートフォリオを
      <br />
      作った目的
    </AboveTheFold>
    <Content>
      <div css={tag}>
        <p>2019</p>
        <ul>
          <li>デザインプロセス</li>
          <li>ポートフォリオ</li>
        </ul>
      </div>
      <p>
        私はWebデザイナーをしていて、いわゆる事業会社に勤めています。普段の業務では同じチームのメンバーと一緒にサイトの改善をしています。そんな中で、あるときふと気がつきました。
      </p>
      <p>
        <b>“自分で作ったもの”がない。と。</b>
      </p>
      <p>
        チームで協力してプロダクトを良くしていくこと。それ自体はとても魅力的でやりがいがあります。ですが、市場全体での価値を考えたらどうでしょう。制作実績を1つも出せないデザイナーを誰かが信頼してくれるのでしょうか。
      </p>
      <p>
        危機感を覚えた私は、まずポートフォリオを作ることにしました。私はポートフォリオそのものをコミュニケーションツールと捉えています。今は制作実績として載せられるものはありませんが、このポートフォリオが徐々に出来ていく様を記録し、1つの作品として仕上げようと考えています。
      </p>
      <p>以下にポートフォリオの制作プロセスを記していきます。</p>
    </Content>
    <Content>
      <h2>このサイトの名前</h2>
      <Image filename="origin-of-the-title.jpg" css={originOfTheTitle} />
      <p>
        “素早く作って素早く壊す”制作はしたことがあっても、全く未完成のものを世の中に出したことはありません。
      </p>
      <p>
        制作過程も含めて作品として公開すると決めたものの……今の状態のWebサイトをポートフォリオと言い切るのはどうなんだろうという悩み。
      </p>
      <p>
        そんなことを考えている中で、<b>“Keisuke Watanuki Portfolio”</b>の中には
        <b>“WIP”</b>の文字が含まれていることに気がつきました。
      </p>
      <p>ダジャレと言えば終わりですが、名前が状態を表しています。</p>
      <p>
        そういうわけでW, i,
        Pだけ色を変えて、まさに今製作中のポートフォリオであることを強調しています。
      </p>
    </Content>
    <Content>
      <h2>
        今はここまで、 <br />
        これから続きを記します
      </h2>
    </Content>
    <Link to="/" css={link}>
      サイトトップへ戻る
    </Link>
  </Layout>
);
