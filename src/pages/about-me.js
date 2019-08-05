import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/header";
import AboveTheFold from "../components/aboveTheFold";
import Tag from "../components/workTag";
import WorkContent from "../components/workContent";
import Image from "../components/image";
import ToIndex from "../components/workToIndex";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const tag = css`
  margin-top: 6.4rem;
  position: sticky;
  top: 9.6rem;
`;

const content = css`
  margin-top: 6.4rem;
`;

const image = css`
  margin-top: 4rem;
  @media (max-width: 768px) {
    margin-top: 2.4rem;
  }
`;

const externalLink = css`
  color: ${colors.Blue};
  & + & {
    margin-left: 1.6rem;
  }
`;

const tags = ["デザイナー", "Web", "UI", "UX"];

export default () => (
  <Layout>
    <SEO title="About Me" />
    <Header />
    <AboveTheFold image="about_me.jpg">
      <span>綿貫佳祐について</span>
    </AboveTheFold>
    <Tag year="1993" tags={tags} css={tag} />
    <WorkContent css={content}>
      <p>愛知県在住。エイチームという会社でデザイナーをしています。</p>
      <p>
        1993年生まれ、大学を卒業後にエイチームに就職。業務ではWebのビジュアルからマークアップまでを担当。また、サイトを分析し改善、効果測定をしてまた分析……と制作以外の役割も担っています。
      </p>
      <p>
        個人でもWebサービスやアプリの開発をしており、前述の通りスタイリングにまつわる部分は1人でも完結が可能。
      </p>

      <h2>私が出来ること</h2>
      <ul>
        <li>画像編集、グラフィック、エディトリアルなど静的なスタイリング</li>
        <li>モーショングラフィックス、動画編集など動的なスタイリング</li>
        <li>プロトタイプ作成からユーザーテストまで、UXデザイン全般</li>
        <li>設計から実装まで、マークアップ全般</li>
      </ul>
      <Image filename="available-technics.jpg" css={image} />
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
          css={externalLink}
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
      <h2>デザイナーを志した理由</h2>
      <h3>ことの始まりは高校受験の頃</h3>
      <p>中学2年の秋か冬か……進路相談の時期がやってきました。</p>
      <p>
        自分は当時将来やりたいことが全く見つからず、先生から志望校を決めなさいと言われても何もピンと来ていません。
      </p>
      <p>
        両親に素直な気持ちとして「勉強をするのも面倒くさいし、勉強せずに入れるぐらいの高校に進むんじゃダメかな？」と相談しました。
      </p>
      <p>そこで言われたのは要約すると</p>
      <ul>
        <li>頭の良い学校にいる人が学歴の関係ない職業に就くのは難しくない</li>
        <li>勉強してこなかった人間が学歴の要る職業に就くのは難しい</li>
      </ul>
      <p>
        学歴主義な親ではなかったので差別的なニュアンスではなく、それでいて理にかなっているなあと頷ける話でした。
      </p>
      <p>
        合点のいった私は「夢がないから勉強する」状態になり、地元ではそれなりに頭の良い高校に合格しました。
      </p>
      <Image filename="about_me-ronin.jpg" css={image} />
      <small>浪人中の色彩構成、多分受験の直前に描いていたもの。</small>
      <h3>大学受験で「気づいた」</h3>
      <p>時は経ち……今度は大学受験のシーズンです。</p>
      <p>
        ここでも志望校を決めなければなりませんが、周りのみんなと同じような学校を書いておけば良いかな〜ぐらいに思っていました。
      </p>
      <p>が、ここで気づきます。</p>
      <p>
        高校受験の頃も「特に夢が無いからとりあえず妥当な判断」で志望校を決めたことを。
      </p>
      <p>
        高校に引き続き大学までそんな決め方をしたら、自分の人生はずっとこういう決断が続くような気がしてしまいました。
      </p>
      <p>
        じゃあどうすれば人生が豊かになるんだろう？考えた結果、当時はイラストを描くことが好きで時間を忘れて描いていました。気がついたら日が昇っていた……なんてこともあります。
      </p>
      <p>
        これだけ好きなものだったら残りの人生を賭しても公開しないはずと思い、美大・芸大受験へと切り替えました。
      </p>
      <p>
        自分で言うのもなんですが、当時は偏差値70以上はあったのでかなり無茶な進路変更だったと思います。
      </p>
      <Image filename="about_me-graduation_production.jpg" css={image} />
      <small>
        卒業制作、サインシステムに使用する想定のフォント。サインの実寸を再現したら印刷がこうなった。
      </small>
      <h3>紆余曲折を経てデザイナーへ</h3>
      <p>
        その後はイラストレーターになるための道筋を考えてデザイン学科を志望。足掛かりとして学び始めたデザインでしたが……これがイラストを描くよりも更に面白く感じられました。
      </p>
      <p>
        当初の計画から早くも変更になるわけですが、「自分の人生を賭けてやりたいもの」がアップデートされただけなのでむしろ良いことだったと思っています。
      </p>
    </WorkContent>
    <ToIndex />
  </Layout>
);
