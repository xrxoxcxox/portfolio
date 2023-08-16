---
title: ポートフォリオ
cover: "./cover.png"
keywords: ["Figma", "Astro", "Tailwind CSS", "TypeScript", "p5.js"]
sort: 1
startDate: "2023-08"
excerpt: "このポートフォリオそのものも制作物の 1 つと捉えています。作った経緯や使用している技術、今後の展望などを記載します。"
---

## 作った経緯

今のポートフォリオを公開する以前に、Gatsby で作ったバージョンがありました。  
作った当時は React の勉強を始めたいと思っていた頃で、ブログなどに適した Gatsby を選びました。

Gatsby 自体はとても良いツールで React の勉強にもなりましたが、自分の作りたいポートフォリオにはオーバースペックかもしれない、と思うように……。  
新しい技術の勉強をしたかったのと、もっとシンプルなものを作りたいと思い、Astro で作り直すことにしました。

## 使用している主な技術

- [Figma](https://www.figma.com/)
- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [p5.js](https://p5js.org/)

## 工夫している点

以前のものはかなりミニマルな見た目にしていたので、今回は少しグラフィカルな要素を入れることにしました。  
ただし、アニメーションなどが前面に出てしまうとコンテンツに集中できないため、あくまでちょっとした装飾程度に留めています。

個人開発かつデザイン主体のポートフォリオのため、堅牢な型はそこまで必要ないのですが、曖昧さを減らすために TypeScript を導入しました。  
Astro の Content Collections の機能ともあわせて、記事のスキーマも [Zod](https://zod.dev/) で定義しています。

## 今後の展望

Transition API を使った画面遷移や、Instagram の投稿との連動などを実装したいと考えています。
