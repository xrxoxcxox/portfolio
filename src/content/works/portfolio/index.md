---
title: "ポートフォリオ"
cover: "./cover.png"
keywords:
  ["Figma", "Astro", "Tailwind CSS", "TypeScript", "three.js", "Vercel", "Bun"]
sort: 1
startDate: "2023-08"
excerpt: "このポートフォリオそのものも制作物の 1 つと捉えています。作った経緯や使用している技術、今後の展望などを記載します。"
---

## 作った経緯

今のポートフォリオを公開する以前に、Gatsby で作ったものがありました。  
作った当時は React の勉強を始めたいと思っていた頃で、ブログなどに適した Gatsby を選びました。

Gatsby 自体はとても良いツールで React の勉強にもなりましたが、自分の作りたいポートフォリオにはオーバースペックかもしれない、と思うように……。  
新しい技術の勉強をしたかったのと、もっとシンプルなものを作りたいと思い、Astro で作り直すことにしました。

## 使用している主な技術

- [Figma](https://www.figma.com/)
- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [three.js](https://threejs.org/)
- [Vercel](https://vercel.com/)
- [Bun](https://bun.sh/)

## 上記の技術を選んだ理由

### Figma

2023 年現在のデザインツールとしては Figma がスタンダードだと考え、選んでいます。

また[Friends of Figma Nagoya](https://friends.figma.com/nagoya/)というコミュニティのアドボケートをしたり、[入門用の書籍](/works/figma-introduction-to-design)を出版したりしています。
そのため、布教活動も含めて、ポートフォリオ制作でも Figma を使うことにしました。

### Astro

私が作ろうとしているものは、ほとんどブログサイトのようなものです。
記事や外部へのリンクがあるばかりで、動的に変化するような要素はほとんどありません。

そのため、React や Vue、あるいはそれらを用いたフレームワークはオーバースペックだと考え、Astro を選びました。

直接的に Astro の話ではありませんが、[Content Collections](https://docs.astro.build/en/guides/content-collections/) の機能ともあわせて、記事のスキーマも [Zod](https://zod.dev/) で定義しています。

### TypeScript

Astro にはデフォルトで TypeScript のサポートが組み込まれているため、利用しない手は無いと考えました。

ロジックはほとんど書かないのですが、Figma を用いてコンポーネントベースでデザインを組むなら、props の型を定義しておいた方が安心できると思っています。

### Tailwind CSS

世間でかなり使われていることは認識していたのですが、日頃の業務や個人開発でなかなか使うことがありませんでした。

というのも、ちょっとした新規サービスなら 1 から書いた方が早く、既存のサービスでは新たに導入する決定には至らない、という状況だったからです。

これだけスタンダードになりつつある技術を触っていないのは問題かもしれないと思い、半ば強制的に導入することにしました。

ポートフォリオ制作においても、正直言って Astro によるスコープ設定だけを活かした素の CSS を書く方が早かったのですが、ひとまず練習中です。

### three.js

ここ最近はクリエイティブコーディングに興味があり、canvas 関連のインプットをしていることが多かったです。

中でも、オンスクリーンにおけるノイズ表現は面白いと感じていて、それを活かして何か作りたいと思っていました。  
デジタルコンテンツはムラや不均衡がなく非常に綺麗なのが魅力ですが、逆にそれが物足りないと感じることもあります。  
特に最近はフラットデザインからの脱却が進んでいるように感じていて、その一環として動くノイズを実装してみました。

初めてシェーダーを自分で書いてみてもいます。

### Vercel

Astro の公式ドキュメントでは最初に Netlify が紹介されているのですが、Vercel を選びました。

以前のポートフォリオで Netlify を使っていましたが、若干パフォーマンスが悪かったです。
最初はなんとなく感じた程度でしたが、調べると以下のような記事も見つかり、乗り換えることにしました。

- [Netlify が日本からだと遅い - id:anatoo のブログ](https://blog.anatoo.jp/2020-08-03)
- [Netlify が遅いので Vercel に移行した | Lambdar](https://www.lambdar.me/archives/migrating-to-vercel-from-netlify-due-to-performance-issues/)
- [日本国内だと Netlify より Cloudflare Pages の方が速い！ - Qiita](https://qiita.com/akitkat/items/dcbe4fcaacc051753e2b)

デプロイ周りは自分の知識がほとんどないため、有名なものやドキュメントが豊富そうなものを選ぶことしました。

そんな中、Vercel は Astro の公式ドキュメントで 2 番目に記載されているのと、Astro のスポンサーもしているので安心感があり選びました。

### Bun

2023 年 10 月 12 日追記:  
Bun をパッケージマネージャーとして使っています。

[Bun は 2023 年 9 月 8 日にバージョン 1.0 がリリースされた](https://bun.sh/blog/bun-v1.0)ばかりです。
もともと PNPM を使っていましたが、速いに越したことはないため Bun へ乗り換えました。

## 今後の展望

Transition API を使った画面遷移や、Instagram の投稿との連動などを実装したいと考えています。

2023 年 9 月 18 日追記:  
Transition API を使って簡単な画面遷移を実装しました。
