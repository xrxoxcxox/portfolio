import React from 'react'
import hexToRgba from 'hex-rgba'

import AboveTheFold from '../components/AboveTheFold'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Image from '../components/Image'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import WorkContent from '../components/WorkContent'
import WorkTag from '../components/WorkTag'
import WorkToIndex from '../components/WorkToIndex'

import { css } from '@emotion/core'
import GlobalStyle from '../styles/GlobalStyle'
import Color from '../styles/Color'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const origin = css`
  font-family: proxima-nova, sans-serif;
  font-weight: 900;
  ${Typography.Headline1};
  text-align: center;
  font-feature-settings: 'salt';
  margin-top: ${Size(8)};
  padding: ${Size(5)};
  box-shadow: 0 ${Size(1)} ${Size(3)} ${hexToRgba(Color.Black, 16)};
  @media (max-width: 768px) {
    margin-top: ${Size(6)};
  }
  span {
    color: ${Color.Blue};
  }
`

const tool = css`
  width: ${Size(60)};
  margin-top: ${Size(12)};
  @media (max-width: 768px) {
    width: ${Size(50)};
    margin: ${Size(12)} auto 0;
  }
`

const br = css`
  @media (max-width: 768px) {
    display: none;
  }
`

const tags = [
  'デザインプロセス',
  'ポートフォリオ',
  'Figma',
  'GatsbyJS',
  'Emotion',
]

export default () => (
  <>
    <GlobalStyle />
    <Seo
      title='ポートフォリオについて'
      description='このポートフォリオが出来ていく様を記録し、それ自体を1つの作品として仕上げようと考えています。「なんだかオシャレだけどどんな人が作ったか分からないポートフォリオは嫌」が第一。制作プロセスやアウトプットに至る背景がよく分かるようなものにしたいと思っています。'
    />
    <Layout>
      <Header />
      <AboveTheFold
        image='aboout-this-portfolio/main-visual.jpg'
        alt='ポートフォリオを作っている最中'>
        <span>ポートフォリオ</span>
        <br css={br} />
        <span>について</span>
      </AboveTheFold>
      <WorkTag year='2019' tags={tags} />
      <WorkContent>
        <p>
          私はWebデザイナーをしていて、いわゆる事業会社に勤めています。毎日サイト改善をしているのですが、あるときふと気がつきました。
        </p>
        <p>
          <b>「これは私が作りました」と言えるものがありません。</b>
        </p>
        <p>
          あるページを新規で自分が作っても、改善の中では他の人も触ります。そして逆もまた然り。どこからどこまでが誰の制作実績かなど明確にできるはずがないのです。
        </p>
        <p>
          チームで協力して1つのプロダクトを良くしていくこと。それ自体はとても魅力的でやりがいがあります。ですがデザイナー市場での価値を考えたらどうでしょう。制作実績を1つも出せないデザイナーを誰かが信頼してくれるのでしょうか。
        </p>
        <p>
          危機感を覚えた私はポートフォリオを作ることにしました。会社での活動とは別に、自分の作ったもの・自分はどういう人間かを記録し、生きた証を作らねばという気持ちが強かったです。
        </p>
        <p>
          現状制作実績として載せられるものはありませんが、このポートフォリオが出来ていく様を記録し、それ自体を1つの作品として仕上げようと考えています。
        </p>
        <p>以下にこのポートフォリオの制作プロセスを記していきます。</p>
        <h2>ポートフォリオサイトを作るという判断</h2>
        <p>
          アウトプットの形そのものをユニークに考えようかとも思いました。しかしデザイナーという役割において、ポートフォリオを作って見せる/見てもらうという文脈は非常に強固です。巨人の肩に乗ることが目的達成のための近道だと判断しました。
        </p>
        <p>
          また普段の業務で担当しているのはビジュアル作りやマークアップですが、サイトの構築全般を自分で一通りやることでスキルアップもできます。
        </p>
        <p>
          新しいチャレンジも出来るし世界とのコミュニケーションも図れる。ということでサイト制作に取り掛かりました。
        </p>
        <h2>サイト名の表記の由来</h2>
        <p css={origin}>
          Keisuke <span>W</span>atanuk<span>i</span> <span>P</span>ortfolio
        </p>
        <p>
          目に見えるものを作る前に、まずはサイトの名前を考えました。本質的でないと思われるのかもしれませんが、自分は「呼び名があることでモノをモノ足らしめる」と考えています。ですから最初に時間をかけました。
        </p>
        <p>
          はじめに悩んでいたのは「制作過程も含めて作品、として公開すると決めたものの……ほとんど何もないサイトをポートフォリオと言い切るのはどうなんだろう？」でした。
        </p>
        <p>
          悩んでいたのもあって、あだ名を取り入れるとどうかとか、ずっと使っているIDを今回も使おうか、などと堂々巡り。しかしフッと気づいたのですが、本名の
          <b>“Keisuke Watanuki”</b>と<b>“Portfolio”</b>
          を並べると<b>“WIP”</b>が含まれていることに気がつきました。
        </p>
        <p>
          ダジャレですし、捻りもありませんが名が体を表しています。なんだかやけにしっくり来ました。
        </p>
        <p>
          そういうわけでW, i,
          Pだけ色を変えて、まさに今製作中のポートフォリオであることを強調しています。
        </p>
        <h2>制作のポリシー</h2>
        <p>
          「なんだかオシャレだけどどんな人が作ったか分からないポートフォリオは嫌」が第一。制作プロセスやアウトプットに至る背景がよく分かるようなものにしたいと思っています。
        </p>
        <p>
          何を作るにしても、完璧に作り切って初めて公開するスタイルは今や求められなくなってきています。ポートフォリオであっても素早く世に出し素早く改善することをポリシーとします。
        </p>
        <p>もちろん現在もまだ制作途中です。</p>
        <h2>使っているツール・技術</h2>
        <Image
          filename='aboout-this-portfolio/figma.png'
          alt='Figmaのアイコン'
          css={tool}
        />
        <h3>ビジュアル制作ではFigma</h3>
        <p>
          Figmaは各種デザインツールの中で最もコンポーネントの管理がしやすいと思っています。特に色やテキスト。自分はSketchでの管理には少々不満がありました。
        </p>
        <p>
          例えば、テキストスタイルの色は「色のシンボル」から選択することができません。またレイヤースタイルにしても塗りと線の定義が必要な場合は都度登録が必要。若干WETに感じます。
        </p>
        <p>
          そんな中Figmaのコンポーネントの設計は非常に惹かれ、「次にプロダクトを作るとしたら絶対Figma！」と決めていました。
        </p>
        <Image
          filename='aboout-this-portfolio/gatsby.png'
          alt='GatsbyJSのアイコン'
          css={tool}
        />
        <h3>サイトジェネレーターとしてGatsby</h3>
        <p>
          たまたまですが、会社の中でも外でもReactを使う機会が増えてきており勉強したいと思っていました。ポートフォリオサイトにReactはオーバースペックかな？と思っていましたが、静的ジェネレーターのGatsbyを発見。
        </p>
        <p>
          Reactの中でデザイナーとして学んでおきたい機能はカバーできそうでしたし、良い訓練になりそうだと思い選択しました。
        </p>
        <p>
          同じようなインターフェースを何度もマークアップしなくて済む、という点だけでもデザイナーがReactを学ぶ価値はあると思っています。
        </p>
        <p>
          初めのうちこそ苦労しましたが、ほとんどカスタマイズしなくてもBlazing
          Fastに表示してくれるなどリターンも大きかったです。
        </p>
        <Image
          filename='aboout-this-portfolio/emotion.png'
          alt='Emotionのアイコン'
          css={tool}
        />
        <h3>Emotionによるスタイリング</h3>
        <p>
          CSS in
          JSによるスタイリングはどのライブラリを使っても一長一短で悩ましかったのですが、Emotionを使うことにしました。
        </p>
        <p>
          CSS in
          JSによるスタイリングはどのライブラリを使っても一長一短で悩ましかったですが、Emotionを使うことにしました。かなり後発なライブラリだけあって「出来ないこと」がほとんどありません。
        </p>
        <p>
          実はEmotionに決めるまでにstyled-componentとstyled-jsxで1度ずつ全てをスタイリングしており、その上で判断をしました。長い目で見たときにつらくならなそうだと感じたためEmotionを採用。
        </p>
        <Image
          filename='aboout-this-portfolio/netlify.png'
          alt='Netlifyのアイコン'
          css={tool}
        />
        <h3>ホスティングはNetlifyで自動的に</h3>
        <p>
          一番最初に公開したときはロリポップ!のレンタルサーバーを借りていて、FTPアップロードしていました。
        </p>
        <p>
          しかし、コードはGitで管理しているのにデプロイ時には毎回手作業で差分のファイルをアップするというのも変な話です。
        </p>
        <p>
          いくつか候補は上がりましたが、初期設定も日々のデプロイ作業も極力簡単に済ませたかったためNetlifyに落ち着きました。
        </p>
        <p>現在はmasterにマージするだけでデプロイが終わる環境です。</p>
        <h2>GitHubのリポジトリ</h2>
        <p>
          <a href='https://github.com/xrxoxcxox/playground'>
            こちらがこのサイトのリポジトリです。
          </a>
        </p>
        <p>
          GitHubはアカウントこそ持っていたものの全く使っていませんでした。自分でサイトを1から作るにあたってリポジトリを作成したので公開します。
        </p>
        <WorkToIndex />
      </WorkContent>
      <Footer />
    </Layout>
  </>
)
