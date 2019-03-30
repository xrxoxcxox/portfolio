import React from "react";
import hexToRgba from "hex-rgba";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/header";
import WorkTitle from "../components/workTitle";
import Image from "../components/image";

import { css } from "@emotion/core";
import colors from "../styles/colors.js";

const layout = css`
  min-height: 100vh;
  padding-bottom: 12rem;
`;

const aboveTheFold = css`
  display: grid;
  grid-column: 1 / 13;
  grid-template-columns: repeat(12, 6.4rem);
  grid-column-gap: inherit;
  position: relative;
  margin-top: 4rem;
`;

const title = css`
  position: absolute;
  bottom: 4.8rem;
  text-shadow: 0 0 1.2rem ${hexToRgba(colors.White, 40)};
`;

const keyVisual = css`
  grid-column: 5 / 13;
  filter: brightness(120%);
`;

const content = css`
  display: grid;
  grid-column: 3 / 11;
  grid-template-columns: repeat(8, 6.4rem);
  grid-column-gap: inherit;
  margin-top: 4.8rem;
  :first-of-type {
    margin-top: 6.4rem;
  }
  h2 {
    grid-column: 3 / 9;
    font-size: 4rem;
    line-height: 5rem;
    font-weight: normal;
  }
  p {
    grid-column: 3 / 9;
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
  * + p {
    margin-top: 1.6rem;
  }
`;

export default () => (
  <Layout css={layout}>
    <SEO title="About This Portfolio" />
    <Header />
    <div css={aboveTheFold}>
      <Image filename="about-this-portfolio.jpg" css={keyVisual} />
      <WorkTitle css={title}>
        このポートフォリオを
        <br />
        作った目的
      </WorkTitle>
    </div>
    <section css={content}>
      <p>
        私はWebデザイナーをしていて、いわゆる事業会社に勤めています。毎日サイト改善の業務はしていますが、あるときふと気がつきました。
      </p>
      <p>「これは自分で作った」と言えるものがない。と。</p>
      <p>
        チームで協力し1つのプロダクトを良くしていくこと。それ自体はとても魅力的でやりがいがあります。ですが、市場全体での価値を考えたらどうでしょう。制作実績を1つも出せないデザイナーを、誰かが信頼してくれるのでしょうか。
      </p>
      <p>
        危機感を覚えた私はまずポートフォリオを作ることにしました。私はポートフォリオそのものをコミュニケーションツールと捉えています。現状制作実績として載せられるものはありませんが、このポートフォリオが徐々に出来ていく様を記録し1つの作品として仕上げようと考えています。
      </p>
      <p>以下にポートフォリオの制作プロセスを記していきます。</p>
    </section>
    <section css={content}>
      <h2>このサイトの名前</h2>
      <p>
        “素早く作って壊す”制作はしたことがあっても、全く未完成のまま世の中に出したことはありません。
      </p>
      <p>
        （最初に公開したのは2019年2月でしたが、そのときはトップページになんとなく意味ありげなモーションタイポグラフィーを置いていただけでリンクの1つもありませんでした。）
      </p>
      <p>
        制作過程も含めて作品として公開すると決めたものの……現段階をポートフォリオと言い切るのはどうなんだろうという悩み。
      </p>
      <p>
        そんなことを考えている中でKeisuke Watanuki
        Portfolio”の中にはWIP”の文字が含まれていることに気がつきました。
      </p>
      <p>ダジャレと言えば終わりですが、名前が状態を表しています。</p>
      <p>そういうわけでW, i, Pだけ色をが変えたのでした。</p>
    </section>
    <section css={content}>
      <h2>
        今はここまで、 <br />これから続きを記します
      </h2>
    </section>
  </Layout>
);
