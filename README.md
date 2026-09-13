# T&um Sample LP

元町・中華街の白髪染めサロン **T&um【ティーアンドアム】** 向け、
ミセミルWeb営業提案用サンプルLPです。

## Purpose

白髪に悩む40〜60代女性、とくに50代を中心に、

**共感 → 理解 → 技術への期待 → 人への信頼 → 料金への安心 → Web予約**

へ自然につながる1ページLPの完成イメージを提示します。

本リポジトリは正式商用サイトではなく、営業提案用サンプルです。

## Source documents

実装では次の資料を正とします。

```text
docs/
├── Tandum_サンプルLP_要件定義書_v1.1.md
└── Tandum_サンプルLP_デザイン定義書_v1.1.md
```

判断ルール・開発時の注意事項はルートの `AGENTS.md` を参照してください。

## Design concept

**Quiet Confidence — 白髪を、静かに美しく。**

主要なデザインDNA:

- Warm Off-white
- Deep Brown
- Warm Neutral
- Noto Serif JP + Noto Sans JP
- 大きな余白
- Editorial layout
- 髪の質感
- 上品・自然体・落ち着き・信頼
- 40〜60代でも読みやすい文字サイズとUI

## Page structure

```text
Header
Hero
Problem
Concept
Features
Gray Hair Design
Style
Owner
Price
First Visit
FAQ
Access
Reservation
Footer
```

## Recommended repository structure

```text
.
├── AGENTS.md
├── README.md
├── CODEX_IMPLEMENTATION_BRIEF.md
├── docs/
│   ├── Tandum_サンプルLP_要件定義書_v1.0.md
│   └── Tandum_サンプルLP_デザイン定義書_v1.0.md
├── references/
│   ├── desktop/
│   ├── mobile/
│   └── sections/
├── public/
│   └── images/
│       ├── hero/
│       ├── style/
│       ├── owner/
│       ├── salon/
│       ├── concept/
│       └── ui/
├── app/
├── components/
├── lib/
├── next.config.ts
├── package.json
└── tsconfig.json
```

フォルダ名は実際の素材構成に合わせて簡略化して構いません。

## Image policy

### Real photographs

提供・使用許可済みの実写真がある場合は、同じ用途のAI画像より優先します。

特にOwner、実際のお客様、実際の施術、実店舗については実写真を優先します。

### AI-generated images

今回はInstagram実写真が少ないため、AI生成画像をLP内の主要ビジュアル補助として使用します。

使用例:
- Heroの大人女性ポートレート
- 白髪や髪悩みのイメージ
- Gray Hair Designのヘアデザインイメージ
- StyleのHair Design / Style Image
- First Visitの雰囲気イメージ
- FAQ / Reservationの静物・抽象背景
- 元町を想起させる非店舗固有の情景

ただしAI画像を、実際のお客様、実際の施術実績、Before / After、実際のT&um店内、永野氏本人、実際のアクセス経路や店舗外観として扱いません。

StyleでAI画像を使用する場合は「施術実績」「お客様事例」ではなくHair Design / Style Imageとして見せ、近接箇所に「※一部イメージ画像を使用しています」等の注記を入れます。

## Main CTA

Primary CTA:

**Web予約する**

予約リンクは要件定義書またはユーザー提供の現行URLを使用します。
未確認のURLを推測して設定しません。

## Development

想定:

- Next.js
- React
- TypeScript
- CSS
- Static Export

### Install

```bash
npm install
```

### Local development

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Production build

```bash
npm run build
```

実際のスクリプトは `package.json` を正とします。

## Responsive QA

最低限、次の幅を確認します。

```text
375px
390px
430px
768px
1024px
1440px
```

特に390pxと1440pxを基準画面としてデザイン品質を確認します。

## Accessibility

最低限:

- 本文16px以上を基本
- 十分なコントラスト
- 適切な見出し階層
- 44x44px程度以上の操作領域
- focus-visible
- Keyboard操作
- alt
- prefers-reduced-motion
- 色だけに依存しないUI

## Sample deployment

営業提案用サンプルのため:

- noindex
- nofollow
- Footer等に「営業提案用サンプル」と表示
- 正式店舗サイトと誤認させない
- LocalBusiness構造化データは原則使用しない
- GA4 / Search Consoleは不要

GitHub Pagesは営業サンプル用途として使用します。

## Definition of done

- 要件定義書のセクション構成を満たす
- デザイン定義書のDesign DNAがDesktop / Mobileで一貫している
- AI画像が実際の施術実績・実店舗・本人写真と誤認されない
- 主要CTAが正しく動作
- 横overflowなし
- 画像404なし
- lint成功
- build成功
- 主要6幅で致命的表示崩れなし
- 営業提案用サンプル表示あり
