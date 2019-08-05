import React from "react";
import hexToRgba from "hex-rgba";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/header";
import AboveTheFold from "../components/aboveTheFold";
import WorkTag from "../components/workTag";
import Image from "../components/image";
import ToIndex from "../components/workToIndex";

import WorkContent from "../components/workContent";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const title = css`
  font-family: proxima-nova, sans-serif;
  font-weight: 900;
  font-size: 4rem;
  text-align: center;
  font-feature-settings: "salt";
  margin-top: 3.2rem;
  padding: 2rem;
  box-shadow: 0 0.4rem 1.2rem ${hexToRgba(colors.Black, 16)};
  @media (max-width: 768px) {
    margin-top: 2.4rem;
  }
  span {
    color: ${colors.Blue};
  }
`;

const tool = css`
  width: 24rem;
  margin-top: 4.8rem;
  @media (max-width: 768px) {
    width: 20rem;
    margin: 4.8rem auto 0;
  }
`;

const br = css`
  @media (max-width: 768px) {
    display: none;
  }
`;

const tags = ["デザインプロセス", "ポートフォリオ", "GatsbyJS"];

export default () => (
  <Layout>
    <SEO title="About This Portfolio" />
    <Header />
    <AboveTheFold image="about-this-portfolio.jpg">
      <span>ポートフォリオ</span>
      <br css={br} />
      <span>そのものについて</span>
    </AboveTheFold>
    <WorkTag year="2019" tags={tags} />
    <WorkContent>
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
      <h2>サイト名の表記の由来</h2>
      <p css={title}>
        Keisuke <span>W</span>atanuk<span>i</span> <span>P</span>ortfolio
      </p>
      <p>
        “素早く作って素早く壊す”制作はしたことがあっても、全く未完成のものを世の中に出したことはありません。
      </p>
      <p>
        制作過程も含めて作品として公開すると決めたものの……今の状態のWebサイトをポートフォリオと言い切るのはどうなんだろうという悩み。
      </p>
      <p>
        そんなことを考えている中で、<b>“Keisuke Watanuki Portfolio”</b>
        の中には
        <b>“WIP”</b>の文字が含まれていることに気がつきました。
      </p>
      <p>ダジャレと言えば終わりですが、名前が状態を表しています。</p>
      <p>
        そういうわけでW, i,
        Pだけ色を変えて、まさに今製作中のポートフォリオであることを強調しています。
      </p>
      <h2>使っているツール・技術</h2>
      <Image filename="icon_figma.png" css={tool} />
      <h3>ビジュアル制作ではFigma</h3>
      <p>
        各種デザインツールの中で、最もコンポーネント類の管理がしやすいと思っています。特に色やテキスト。自分は、Sketchにおけるこれらの扱いには少々不満がありました。
      </p>
      <p>
        例えば、テキストスタイルの色は「色のシンボル」から選択することができません。またレイヤースタイルにしても塗りと線の定義が必要な場合などは若干WETに感じます。
      </p>
      <p>
        そんな中Figmaのコンポーネントの設計は非常に惹かれ、「次にプロダクトを作るとしたら絶対コレで作るぞ！」と決めていました。それが自分のポートフォリオになるとは思っていなかったですが笑
      </p>
      <Image filename="icon_gatsby.png" css={tool} />
      <h3>サイトジェネレーターとしてGatsby</h3>
      <p>
        たまたまですが、会社の中でも外でもReactを使う機会が増えてきており勉強したいと思っていました。ポートフォリオサイトにReactはオーバースペックかな？と思っていましたが、静的ジェネレーターのGatsbyを発見。
      </p>
      <p>
        Reactのうちデザイナーとして学んでおきたい範囲はカバーできそうでしたし、良い訓練になりそうだと思い選択。
      </p>
      <p>
        同じようなインターフェースを何度もマークアップしなくて済む、という点だけでもデザイナーがReactを学ぶ価値はあると思っています。
      </p>
      <p>
        初めのうちこそ苦労しましたが、ほとんどカスタマイズしなくてもBlazing
        Fastに表示してくれるなどリターンも大きかったです。
      </p>
      <Image filename="icon_emotion.png" css={tool} />
      <h3>emotionによるスタイリング</h3>
      <p>
        CSS in
        JSによるスタイリングはどのライブラリを使っても一長一短で悩ましかったのですが、emotionを使うことにしました。
      </p>
      <p>
        かなり後発なライブラリだけあって、「他では出来るのにemotionでは出来ないこと」はほとんどないのではないでしょうか。
      </p>
      <p>
        実はemotionに決めるまでにstyled-componentとstyled-jsxで1度ずつ全てをスタイリングしています。
      </p>
      <p>
        実際に手を動かしてみて、書きやすく将来破綻しづらそうに思えたので選びました。
      </p>
      <h2>GitHubのリポジトリ</h2>
      <p>
        <a href="https://github.com/xrxoxcxox/playground">
          こちらがこのサイトのリポジトリです。
        </a>
      </p>
      <p>
        GitHubはアカウントこそ持っていたものの全く使っていませんでした。自分でサイトを1から作るにあたってリポジトリを作成したので公開します。
      </p>
      <h2>
        今はここまで、 <br css={br} />
        これから続きを記します
      </h2>
    </WorkContent>
    <ToIndex />
  </Layout>
);
