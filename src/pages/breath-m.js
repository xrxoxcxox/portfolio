import React from 'react'

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
import Size from '../styles/Size'

const image = css`
  margin-top: ${Size(10)};
  @media (max-width: 768px) {
    margin-top: ${Size(6)};
  }
`

const tags = ['Brand Identity']

export default () => (
  <>
    <GlobalStyle />
    <Seo
      title='Breath.M'
      description='アパレル・アクセサリーブランドBreath.M（ブレスミー）。新規立ち上げの中でBI作成を担当しました。ビジュアル制作だけでなく、コンセプトメイキングから携わっています。'
    />
    <Layout>
      <Header />
      <AboveTheFold
        image='breath-m/mainVisual.png'
        alt='Breath.Mのロゴ'
        type='center'
      />
      <WorkTag year='2019' tags={tags} />
      <WorkContent>
        <p>アパレル・アクセサリーブランドBreath.M（ブレスミー）</p>
        <p>
          Breath.Mの服を着ていれば、いつどこで誰と会っても自信がある。クローゼットを開けたときにワクワクできて、毎日でも着たい服として君臨する。ときめく毎日を演出してくれる。満ち足りた日々の中でしっかりと呼吸していると実感できる。そんな存在を目指したブランドです。
        </p>
        <p>新規立ち上げの中でBI作成を担当しました。</p>
        <Image
          filename='breath-m/overview.png'
          alt='ロゴとカラーパレットの一覧'
          css={image}
        />
        <h2>コンセプトの深掘り</h2>
        <p>
          初めに相談頂いた段階でもブランドのコンセプトやイメージカラーなど、かなり言語化されていました。
        </p>
        <p>
          しかしいきなり制作に入ることはせず、その日に提案をしたのはちょっとしたワークショップです。
        </p>
        <p>
          コンセプトとして出ていた言葉は例えば「前向き」という言葉。その言葉のイメージを表している写真を探していただきました。全員で持ち寄り、お互いの考える「前向き」が何を指しているのかの共通理解をとる作業です。共通理解が得られたら今度はそれを具体的な言葉に変換……というのが提案した内容です。
        </p>
        <p>
          というのも、更にコンセプトの言葉を掘り下げることでメンバーのビジョンの解像度が上がり、より良いブランドを作れるのではないか？と感じたためです。
        </p>
        <p>
          これにより言葉の解像度が上がり、集めた画像はそのままムードボードとなりました。
        </p>
        <h2>制作過程</h2>
        <Image
          filename='breath-m/process.png'
          alt='色や形の検討中の画像'
          css={image}
        />
        <p>
          シンボルはガーデニアがモチーフです。それに加えて「Breath」を感じられるような形状を意識しています。
        </p>
        <p>
          ロゴタイプでベースにしたのはOranienbaumというフォントです。Bの腰の高さがこのブランドを纏った人の立ち姿と重なったため選びました。少しだけ形状を変更しています。
        </p>
        <p>
          カラーリングは明るく淡い色で、それでいて消えて見えない色味を探りました。
        </p>
        <WorkToIndex />
      </WorkContent>
      <Footer />
    </Layout>
  </>
)
