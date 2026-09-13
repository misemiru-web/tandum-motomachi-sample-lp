# AGENTS.md

## Project

T&um（元町・中華街 白髪染めサロン）の営業提案用サンプルLPを実装する。

このリポジトリでは、見た目だけを合わせるのではなく、
要件定義・デザイン定義・実素材・リファレンス画像を正しく統合し、
Desktop / Mobileで一貫した高品質な1ページLPを完成させる。

## Source of truth

判断優先順位は次の通り。

1. `docs/Tandum_サンプルLP_要件定義書_v1.1.md`
2. `docs/Tandum_サンプルLP_デザイン定義書_v1.1.md`
3. ユーザーが用意した実際に使用する画像素材
4. ユーザーが用意したリファレンス画像
5. この `AGENTS.md`
6. `README.md`

矛盾がある場合は上位を優先する。

リファレンス画像は「見た目の参考」であり、要件定義書やデザイン定義書を上書きしない。

## Do not invent

以下を推測・創作しない。

- 店舗情報
- 料金
- 営業時間
- 定休日
- スタッフ情報
- 経歴
- 予約方法
- 口コミ
- 実績
- キャンペーン
- 施術効果
- SEO効果
- 店舗写真・施術写真として見せる架空画像

不明な情報が必要になった場合は、既存資料にないことを明示し、
その箇所を保守的に省略するかTODOとして残す。

## Image rules

- Instagram実写真が少ないため、AI生成画像をHero / Problem / Concept / Services / Style / Salon / FAQ / Access / Reservationの視覚補助として使用してよい。
- AI生成画像を「実際のお客様」「実際の施術実績」「Before/After」「実際のT&um店内」「実際のアクセス写真」として断定しない。
- StyleでAI画像を使う場合は「施術実績」「お客様事例」と表現せず、「Hair Design」「Style Image」等のイメージ訴求として扱う。
- Style内または近接箇所に「※一部イメージ画像を使用しています」等の注記を入れる。
- 実写真がある場合は、同用途ではAI画像より実写真を優先する。
- OwnerについてはAIで永野氏本人を再現しない。本人写真がなければテキスト中心にする。
- AI生成の店内画像はT&umの実店舗写真として扱わない。First Visit等で使う場合は雰囲気イメージとして扱う。
- AI生成の元町情景は実際の道順・店舗外観・アクセス証拠として扱わない。
- Googleマップや第三者サイトから画像を取得しない。
- 公式サイト上の画像も、提供素材に含まれていなければ勝手に使用しない。
- 画像のアスペクト比を崩さない。
- `object-fit: cover` と必要な `object-position` を使い、人物や髪の重要部分を切らない。
- 重い画像はWeb向けに最適化する。

## Design direction

Core concept:
**Quiet Confidence — 白髪を、静かに美しく。**

Design DNA:
- Warm Off-white
- Deep Brown
- Warm Neutral
- Serif + Sans typography
- Large whitespace
- Editorial layout
- Hair texture
- Calm / refined / mature
- 40〜60代女性、とくに50代が読みやすいUI

避ける:
- 黒＋金の典型的ラグジュアリー
- 若年層向け韓国風美容室
- ピンク中心の過度なフェミニン表現
- SaaSのようなカードUI乱用
- 派手なパララックス
- 意味のない巨大英字装飾
- 文字が細すぎる・小さすぎる表現

## Required page order

要件定義書を優先し、原則として以下の順序を維持する。

1. Header
2. Hero
3. Problem
4. Concept
5. Features
6. Gray Hair Design
7. Style
8. Owner
9. Price
10. First Visit
11. FAQ
12. Access
13. Reservation
14. Footer

セクションの削除・統合・大幅な順序変更は独断で行わない。

## CTA

Primary CTA:
**Web予約する**

- Desktop / Mobileとも予約導線を迷わせない。
- CTAを各セクションに乱発しない。
- Mobileでは必要に応じてSticky CTAを使う。
- Secondary CTAは資料で確認できるものだけを使用する。

## Implementation

基本:
- Next.js
- React
- TypeScript
- CSS
- Static Export

過剰な依存ライブラリを追加しない。

JavaScriptは主に以下に限定する。
- Mobile menu
- Scroll reveal
- Accordion
- Anchor navigation

可能な限りCSSで実装する。

## Component guideline

目安:

- `SiteHeader`
- `HeroSection`
- `ProblemSection`
- `ConceptSection`
- `FeaturesSection`
- `GrayHairDesignSection`
- `StyleGallery`
- `OwnerSection`
- `PriceSection`
- `FirstVisitSection`
- `FaqSection`
- `AccessSection`
- `ReservationSection`
- `SiteFooter`
- `SectionHeading`
- `PrimaryButton`
- `SecondaryButton`
- `Reveal`

細分化しすぎない。
読みやすさ・修正しやすさを優先する。

## Responsive

主確認幅:
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1440px

主ブレークポイント:
- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `>= 1024px`

端末名ではなく、レイアウトが崩れる地点を基準に微調整してよい。

PCデザインを縮小しただけのMobile版にしない。
Mobileでは情報順・余白・写真比率を再構成する。

## Accessibility

必須:
- 本文は原則16px以上
- 本文コントラストを十分確保
- 見出し階層を `h1 → h2 → h3` の順で維持
- 操作領域は最低44x44 CSS px程度
- `:focus-visible` を実装
- 色だけに依存して意味を伝えない
- 意味のある画像にalt
- 装飾画像は空alt
- Keyboard操作可能
- `prefers-reduced-motion` 対応

## Motion

Scroll revealは控えめにする。

目安:
- opacity: 0 → 1
- translateY: 16px → 0
- duration: 約560ms
- stagger: 60〜80ms

ユーザー操作を待たせるアニメーションは禁止。

## Sample-site requirements

これは正式商用サイトではなく営業提案用サンプル。

必須:
- `noindex`
- `nofollow`
- 営業提案用サンプルである旨をFooter等に明記
- LocalBusiness構造化データは原則入れない
- GA4 / Search Console /広告タグは不要

GitHub Pagesはサンプル公開用途に限って使用可。

## Quality gates

変更後は可能な範囲で必ず以下を実行する。

```bash
npm run lint
npm run build
```

該当スクリプトがない場合は、勝手に結果を成功扱いせずREADMEとpackage.jsonを確認する。

最終確認:
- 横overflowなし
- 画像404なし
- 外部リンク切れなし
- Header / menu / FAQ / CTAが動作
- 375 / 390 / 430 / 768 / 1024 / 1440pxで致命的崩れなし
- 文字切れなし
- Mobile Sticky CTAが本文を隠しすぎない
- AI画像が実際の施術実績・実店舗・本人写真と誤認される見せ方になっていない

## Working style

- まず資料と既存ファイルを確認してから編集する。
- 大きな変更は一度に広げすぎず、セクション単位で進める。
- 既存の良い実装を理由なく作り直さない。
- 要件を満たす最小限の実装を優先する。
- lint/buildエラーを残した状態で完了としない。
- ユーザー指定のデザインを、独断で「一般的なベストプラクティス」に置き換えない。

## Completion report

作業完了時は簡潔に以下を報告する。

1. 実装・変更した内容
2. 主なファイル
3. lint / build結果
4. レスポンシブ確認結果
5. 残っているTODOまたは確認事項
