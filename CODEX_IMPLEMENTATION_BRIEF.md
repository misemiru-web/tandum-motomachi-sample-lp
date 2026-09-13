# CODEX IMPLEMENTATION BRIEF

## Goal

`T&um サンプルLP 要件定義書 v1.1` と
`T&um サンプルLP デザイン定義書 v1.1`、
提供済みのリファレンス画像・実使用画像を基準に、
Desktop / Mobileで完成度の高い営業提案用サンプルLPを実装する。

## Before coding

最初に必ず次を確認する。

1. `AGENTS.md`
2. 要件定義書
3. デザイン定義書
4. `references/` のDesktop / Mobileリファレンス
5. `public/images/` の実使用素材
6. 既存コードがあれば構造と設定

資料を確認せずに独自デザインを開始しない。

## Implementation order

### Phase 1 — Scaffold

- Next.js / TypeScript構成を確認または作成
- Static Export前提の設定
- Global CSS tokensを作成
- Font設定
- 基本Container / Section / Button / Revealを作成
- noindex / nofollowを設定

### Phase 2 — Core visual

次を優先して実装する。

1. Header
2. Hero
3. Problem
4. Concept
5. Features

まず1440pxと390pxでDesign DNAを成立させる。

### Phase 3 — Main conversion content

次を実装する。

1. Gray Hair Design
2. Style
3. Owner
4. Price

Styleは提供済みAI生成画像を「Hair Design / Style Image」として使用してよい。
ただし「施術実績」「お客様事例」とは表現せず、近接箇所に「※一部イメージ画像を使用しています」等の注記を入れる。
実写真がある場合は実写真を優先する。

### Phase 4 — Conversion / support

- First Visit
- FAQ
- Access
- Reservation
- Footer
- Mobile menu
- Mobile Sticky CTA
- External links

### Phase 5 — Responsive polish

375 / 390 / 430 / 768 / 1024 / 1440pxで確認する。

重点:
- H1改行
- 写真crop
- section spacing
- Header
- CTA
- Price
- Style gallery
- Reservation
- 横overflow

### Phase 6 — Motion

レイアウト完成後に追加する。

- Scroll reveal
- Hover
- Menu transition
- Accordion transition

Motionを先に実装しない。

### Phase 7 — QA

```bash
npm run lint
npm run build
```

確認:
- image 404
- broken links
- horizontal overflow
- menu
- FAQ
- reservation CTA
- tel / Instagram / Map
- noindex / nofollow
- sample notation
- reduced motion
- focus-visible

## Visual priorities

完成度の優先順位:

1. Hero
2. Gray Hair Design
3. Style
4. Reservation
5. Owner
6. 全体の余白とTypography

細かな装飾より上記を優先する。

## Reference usage

リファレンス画像はピクセル単位でコピーするための資料ではない。

読み取るもの:
- 情報の優先順位
- 写真と文章の比率
- 余白
- Heroの印象
- セクション間のリズム
- Desktop / MobileのDesign DNA

要件定義・デザイン定義と矛盾した場合は文書を優先する。

## AI image handling

- `public/images/ai/` は実装に使用してよいAI生成素材。
- `public/images/real/` は許可済み実写真。
- AI Style画像はHair Design / Style Imageとして使用し、実績・お客様事例と断定しない。
- AI salon画像は実店舗写真として扱わない。
- AI access画像は雰囲気補助であり、実際の道順・外観の証拠として扱わない。
- Owner本人をAIで再現しない。
- Style等の該当セクション近くにAIイメージ使用が分かる注記を置く。

## Do not overbuild

今回不要:

- CMS
- API
- Database
- 独自予約システム
- Form backend
- GA4
- Search Console
- Authentication
- Complex animation framework
- Carousel必須UI
- LocalBusiness schema
- Blog / EC / Recruit

## Completion report

完了時は以下を報告する。

- 実装内容
- 主要変更ファイル
- 使用素材
- responsive QA
- lint結果
- build結果
- 残TODO
