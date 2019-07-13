import React from "react";
import hexToRgba from "hex-rgba";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/header";
import AboveTheFold from "../components/aboveTheFold";
import Tag from "../components/workTag";
import Image from "../components/image";
import ToIndex from "../components/workToIndex";

import Content from "../components/workContent";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const content = css`
  grid-column: 5 / 11;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const originOfTheTitle = css`
  grid-column: 3 / 11;
  box-shadow: 0 0.4rem 1.2rem ${hexToRgba(colors.Black, 16)};
  margin-top: 3.2rem;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    margin-top: 2.4rem;
  }
`;

const tool = css`
  grid-column: 5 / 8;
  @media (max-width: 768px) {
    grid-column: 3 / 11;
  }
`;

const margin = css`
  margin-top: 3.2rem;
`;

const tags = ["デザインプロセス", "ポートフォリオ"];

export default () => (
  <Layout>
    <SEO title="About This Portfolio" />
    <Header />
    <AboveTheFold image="about-this-portfolio.jpg">
      ポートフォリオ
      <br />
      そのものについて
    </AboveTheFold>
    <Content>
      <Tag year="2019" tags={tags} />
      <div css={content}>
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
      </div>
    </Content>
    <Content>
      <div css={content}>
        <h2>サイト名の表記の由来</h2>
      </div>
      <Image filename="origin-of-the-title.jpg" css={originOfTheTitle} />
      <div css={[content, margin]}>
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
      </div>
    </Content>
    <Content>
      <div css={content}>
        <h2>使っているツール・技術</h2>
      </div>
      <Image filename="icon_figma.png" css={tool} />
      <div css={content}>
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
      </div>
      <Image filename="icon_gatsby.png" css={tool} />
      <div css={content}>
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
      </div>
      <Image filename="icon_emotion.png" css={tool} />
      <div css={content}>
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
      </div>
    </Content>
    <Content>
      <div css={content}>
        <h2>GitHubのリポジトリ</h2>
        <p>
          <a href="https://github.com/xrxoxcxox/playground">
            こちらがこのサイトのリポジトリです。
          </a>
        </p>
        <p>
          GitHubはアカウントこそ持っていたものの全く使っていませんでした。自分でサイトを1から作るにあたってリポジトリを作成したので公開します。
        </p>
      </div>
    </Content>
    <Content>
      <div css={content}>
        <h2>
          今はここまで、 <br />
          これから続きを記します
        </h2>
      </div>
    </Content>
    <ToIndex />
  </Layout>
);
