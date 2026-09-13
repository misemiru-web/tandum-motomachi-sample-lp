# T&um サンプルLP デザイン定義書 v1.1

**対象:** 元町・中華街 白髪染めサロン T&um【ティーアンドアム】  
**用途:** ミセミルWeb 営業提案用サンプルLP  
**基準:** T&um サンプルLP 要件定義書 v1.0  
**想定実装:** Next.js / React / TypeScript / CSS / Static Export  
**基準Viewport:** Desktop 1440px / Mobile 390px  
**対応範囲:** 375px〜1440px以上  
**作成日:** 2026-09-13

## 0. Design Principles

本LPは、「美容室らしくおしゃれにする」こと自体を目的にしない。

デザインの役割は、**白髪に悩む大人女性が、自分に関係のあるサロンだと認識し、T&umの考え方・技術・人柄・料金を安心して理解し、自然に予約へ進める状態をつくること**とする。

デジタル庁デザインシステムは、個別サービス側でブランドや用途に合わせてカラー・タイポグラフィ等を調整し、スタイルガイドを構築する考え方を示している。本定義書も、同デザインシステムの「見た目」を流用するのではなく、可読性・一貫性・レスポンシブ・アクセシビリティの品質基準として参照する。

## 1. Design Concept

### 1.1 Core Concept

**Quiet Confidence — 白髪を、静かに美しく。**

派手な若返りや「白髪を消す」美容表現ではなく、**年齢を重ねた髪を受け入れながら、上品に整えていく時間**をビジュアル化する。

「高級感」よりも、**信頼できる / 落ち着く / 丁寧 / 自然体 / 上質**を優先する。

### 1.2 Brand Impression

| 軸 | 方向 |
|---|---|
| 上品さ | 高 |
| 清潔感 | 高 |
| 温かさ | 中〜高 |
| モダン | 中〜高 |
| 高級感 | 中 |
| 親しみ | 中 |
| 女性らしさ | 中 |
| トレンド感 | 低〜中 |
| ポップさ | 低 |
| 派手さ | 低 |

「ラグジュアリーサロン」ではなく、**信頼できる大人のプライベートサロン**として見せる。

### 1.3 Design Keywords

**Soft Editorial / Mature / Natural / Calm / Personal / Refined / Hair Texture / Warm Neutral / Quiet Luxury**

日本語では、**余白・静けさ・髪の質感・自然体・温もり・大人・編集的・上質**を中心とする。

### 1.4 与えたい感情

**共感 → 安堵 → 興味 → 信頼 → 安心 → 行動**へ遷移させる。

### 1.5 避ける方向性

- 黒＋金を全面に使った典型的な「高級美容室」
- ピンク・花柄中心の過度にフェミニンなデザイン
- 20代向け韓国美容室のようなトレンド表現
- 真っ白＋極細フォントのみの可読性が低いデザイン
- カードを大量に並べるSaaS的UI
- 写真の上に長文を載せる構成
- 巨大英字を意味なく背景装飾として多用
- 過度なパララックス、ズーム、スクロール演出

## 2. Color System

以下はT&umの既存正式ブランドカラーではなく、本サンプルLP用の提案カラー。白髪・グレーヘア、肌、木、元町の落ち着いた雰囲気と調和する**Warm Neutral**を中心にする。

| Token | HEX | 用途 |
|---|---|---|
| `primary-900` | `#3D3330` | Primary CTA、濃色背景、見出し |
| `primary-950` | `#2F2A28` | Footer、Style背景、最濃色 |
| `secondary-500` | `#B8AAA0` | 装飾、淡いタグ、補助要素 |
| `accent-600` | `#865F50` | 小見出し、番号、リンクアクセント |
| `background` | `#F7F4EF` | ページ基本背景 |
| `surface` | `#FFFFFF` | 情報面、カード等 |
| `surface-muted` | `#EFE8DF` | Problem、Price等の背景差 |
| `text-primary` | `#2F2A28` | 本文・見出し |
| `text-secondary` | `#625B56` | 補助本文 |
| `border` | `#D7CEC4` | 区切り線 |
| `cta-primary` | `#3D3330` | 通常CTA |
| `cta-hover` | `#2F2725` | CTA Hover |
| `focus` | `#005FCC` | キーボードFocus |

### 使用比率目安

**Background 60% / Surface 20% / Deep Brown 12% / Accent・Taupe 8%**

Accentは装飾として限定的に使用し、Primaryより目立たせない。

### Contrast

本文については原則**4.5:1以上**を確保する。

## 3. Typography

### 3.1 Font Family

**Japanese Display / Heading:** Noto Serif JP  
用途：H1、H2、大きなコンセプトコピー、Reservationメッセージ。

**Japanese Body / UI:** Noto Sans JP  
用途：本文、料金、ナビゲーション、CTA、FAQ、店舗情報。

### 3.2 Typography Scale

| Style | Desktop | Mobile | Weight | Line-height |
|---|---:|---:|---:|---:|
| H1 | 56px | 36px | 600 | 1.25 / 1.35 |
| H2 | 40px | 30px | 600 | 1.35 / 1.4 |
| H3 | 24px | 22px | 600 | 1.5 |
| Lead | 20px | 18px | 400 | 1.8 |
| Body Large | 18px | 17px | 400 | 1.8 |
| Body | 17px | 16px | 400 | 1.75 |
| Nav | 16px | 16px | 500 | 1 |
| Button | 16px | 16px | 600 | 1 |
| Caption | 14px | 14px | 400〜500 | 1.6 |
| Eyebrow | 14px | 14px | 600 | 1.4 |

Caption 14pxは店舗補助情報や営業提案用サンプル表記等に限定し、主要本文には使用しない。

### 3.3 Responsive Typography

H1/H2は`clamp()`を使用可能。

```css
--font-h1: clamp(2.25rem, 1.5rem + 2.2vw, 3.5rem);
--font-h2: clamp(1.875rem, 1.5rem + 1.1vw, 2.5rem);
```

日本語本文の`letter-spacing`は原則`0.01em`程度まで。

## 4. Spacing / Layout

### 4.1 Spacing Scale

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 / 160px`

基本単位は8px。4px / 12pxは微調整のみ。

### 4.2 Section Spacing

Desktop標準：128px 0。Hero / Style / Reservationは128〜160px相当。Price / FAQ / Accessは96〜120px。

Mobile標準：80px 0。重要セクション96px前後、コンパクト64〜72px。

### 4.3 Container

```css
max-width: 1200px;
margin-inline: auto;
padding-inline: clamp(20px, 5vw, 80px);
```

本文のみのエリアは最大680px前後。

### 4.4 Grid

- Desktop ≥ 1024px：12 columns、gap 24〜32px
- Tablet 768〜1023px：6〜8カラム相当
- Mobile < 768px：4 columns / 実質1カラム中心、gap 16px

主なDesktop配分：Hero 5/7、Concept 6/6、Owner 5/7、Access 5/7。

## 5. Header / Navigation / CTA

### Desktop Header
- 高さ80px
- `position: sticky; top: 0; z-index: 50;`
- `background: rgba(247,244,239,.94)`
- `backdrop-filter: blur(12px)`は補助
- 下線1px
- 左：T&umロゴ
- 中央〜右：Concept / Menu / Style / Staff / Access
- 最右：Web予約

Primary CTA：高さ48〜52px、左右24px、radius 8px、背景`#3D3330`。

### Mobile Header
- 高さ64px
- Logo | Web予約 | Menu
- Web予約を消してハンバーガーだけにしない
- DrawerまたはHeader下Dropdown
- 各項目高さ48px以上
- 最下部にPrimary CTA

### Mobile Sticky CTA
- 高さ64〜72px
- `padding-bottom: env(safe-area-inset-bottom);`
- 常時巨大なバーで本文を圧迫しない

## 6. Photography Direction

### 6.1 基本トーン
自然光、柔らかいコントラスト、髪の質感が分かる、温かすぎないニュートラル。過度なフィルターを使用しない。

### 6.2 Hair / Style
- 後頭部だけに寄りすぎず髪型全体が分かる
- 白髪・カラーの質感が潰れない
- 4:5を基本
- `object-fit: cover`
- 必要に応じ`object-position`指定
- 実写真がある場合は同用途のAI画像より優先する
- AI生成画像をStyleに使用してよいが、施術実績・お客様事例としては扱わない
- AI Style画像はHair Design / Style Imageとして見せる
- セクション内または近接箇所に「※一部イメージ画像を使用しています」等の注記を置く

### 6.3 Owner
推奨比率3:4。許可済みOwner写真がなければAIで永野氏を再現しない。Ownerセクションはテキスト中心に変更する。

### 6.4 Salon
推奨4:3 / 3:2。実写真がない場合はAI生成のサロン雰囲気画像を使用してよい。

ただしT&umの実際の店内写真として見せない。First Visit等の雰囲気補助として使用し、必要に応じ「イメージ」表記を付ける。

### 6.5 AI Visual
今回はInstagram実写真が少ないため、AI画像を世界観補助に加えて、Hero / Problem / Gray Hair Design / Style / First Visit / FAQ / Access / Reservationの主要ビジュアルとして使用してよい。

ただしAI画像を実際のお客様、実施術実績、Before / After、実店舗、永野氏本人、実際のアクセス証拠として扱わない。

### 6.6 Shape
Hero 20px、一般写真12〜16px、Style実績8〜12px。丸すぎるカードUIは使用しない。

## 7. Section Design

### 7.1 Header
Sticky Header。Heroに重ねず独立した面として扱い、画像品質に左右されずナビゲーションと予約導線の可読性を一定に保つ。

### 7.2 Hero
**Editorial Split Hero**。文章と髪のビジュアルを同等に扱う。

Desktop：12カラムで左5 / 右7。左にEyebrow、H1、2〜3行Lead、Primary CTA、駅徒歩情報。右に4:5程度の大型縦写真。Hero高さ700〜820px程度。Textは写真上に載せない。

H1方向性：**「白髪を隠す毎日から、白髪を活かす楽しみへ。」**

Mobile：**Copy → CTA → Image**。画像を先頭にしない。100vh固定しない。390px時H1 36px、CTAは幅100%または260px程度、Image 4:5、下余白80px。

Hero Image Priority：1. 提供済み実写真でHero品質を満たすもの、2. 提供済みAI Hero画像。AI使用時は実際のお客様・施術例と認識させない。

### 7.3 Problem
背景`#EFE8DF`。中央寄せ。大きな問いかけ＋4つの悩み。カード4枚にはせず、Desktopは2×2の短文Grid＋罫線、Mobileは縦並び。

### 7.4 Concept
背景White。Desktopは6/6 split、写真と文章を左右配置。文章側はEyebrow → H2 → Lead → Body。Mobileは画像 → テキスト、間隔32px以上。

### 7.5 Features
3項目。カード3枚感を弱くし、Desktopは3 columns、上部に細いAccent Lineまたは番号。Mobileは縦方向。

### 7.6 Gray Hair Design
Heroに次ぐ主要セクション。一般的な料金カードGridではなく、**Editorial Service Index**。

Desktop：左4 columnsにタイトル、イントロ、Concept Visual。右7 columnsに4サービスを縦配置。各Row約140〜170px。

例：

```text
01  白髪ぼかし        ¥15,400
    short description
────────────────────
02  脱白髪染め        ¥19,800
    short description
────────────────────
```

Hover時は番号を少し濃く、Arrowを2〜4px移動、背景をごく薄く変化。

Mobile：タイトル → intro → service rows。各ServiceはNumber / Name / Price / Description。Priceを過度に大きくしない。

### 7.7 Style
実写真が少ないため、提供済みAI生成ヘア画像を含めて構成する。

このセクションの役割は「実績証明」ではなく、T&umが提案する方向性を視覚化するHair Design Imageとする。

背景`#2F2A28`、文字`#F7F4EF`。

Desktop：3〜5枚。大1枚＋中2枚＋必要に応じ小2枚。完全MasonryではなくCSS Gridで再現可能なEditorial Grid。Lead image 7 columns、Side images 5 columnsで2段を基本。gap 16〜24px。

Mobile：Lead image 100%。残りは2-columnまたは1-column。内容が小さく見える場合は1-column。Carouselを必須UIにしない。

AI画像を使用する場合は、セクション内または直下に「※一部イメージ画像を使用しています」等の注記を入れる。「施術実績」「お客様事例」「Before / After」という見出し・ラベルは使わない。

### 7.8 Owner
背景Warm White。Desktopは写真5 / Text7。Owner写真がない場合はText7〜8 columnsを中央寄せ。経歴は年表化せず3〜4行程度。

### 7.9 Price
背景`#EFE8DF`。Cardではなく**Simple Price List**。Desktop最大幅800〜900px。価格は右揃え。Mobileでも横スクロールさせない。

### 7.10 First Visit
初回来店の不安を和らげる。3ステップ程度のFlowは、正式な施術工程を確認できる場合のみ使用。未確認なら「初めての方へ」というテキスト中心セクションに留める。

### 7.11 FAQ
幅760〜820px。Accordion可。各項目のクリック領域は最低44px以上。質問行全体を操作領域にする。

### 7.12 Access
背景White。Desktop 5/7。左に店舗情報、右にMap。Mobileは店舗情報 → Map。住所より先に「元町・中華街駅 5番出口 徒歩約2分」を視覚的に把握できる構成。CTAはGoogle Maps / 電話 / Web予約、PrimaryはWeb予約。

### 7.13 Reservation
Heroと並ぶ重要セクション。背景`#3D3330`、Full Bleed。DesktopはText 7 columns、Visual 4〜5 columns。H2はNoto Serif JP、文字`#F7F4EF`。Primary CTAは白背景＋濃茶文字、Secondaryは透明＋Light Border。

MobileはVisualを下部へ移動または省略。H2 → Supporting Copy → CTAを第一View内になるべく収める。ボタン幅100%、Primary / Secondary間12px。

### 7.14 Footer
Reservationから自然につなぐ。背景`#2F2A28`、テキストOff White。Logo / Address / Tel / Instagram / Reservation / Sample notationを掲載。

## 8. Interaction

### Scroll Reveal
- opacity: 0 → 1
- translateY: 16px → 0
- duration: 560ms
- easing: `cubic-bezier(.22, .61, .36, 1)`
- stagger: 60〜80ms

### Hover
- CTA：背景濃度変更、`translateY(-1px)`まで、200〜250ms
- Text Link：UnderlineまたはArrow Shift
- Images：リンク要素の場合のみ`scale(1.015〜1.02)`

### Menu
Mobile menu開閉200〜280ms。背景Fade＋Menu translate。Close button、Navigation selection、Escapeで閉じられること。

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 9. Accessibility / Usability

- 本文コントラスト4.5:1以上
- 主要本文16px未満にしない
- 本文行高1.5以上、原則1.7〜1.8
- ボタン・メニュー・Accordionは44×44 CSS px以上の操作領域
- `focus-visible`を明示
- 見出し階層H1 → H2 → H3を維持
- 施術例は内容が分かるalt、装飾AI画像は`alt=""`
- 状態を色だけで表現しない

推奨Focus：

```css
:focus-visible {
  outline: 3px solid #005FCC;
  outline-offset: 3px;
}
```

## 10. Design Do / Don't

| DO | DON'T |
|---|---|
| 大きな余白を使う | 情報を詰め込む |
| Warm Neutralを中心にする | 真っ黒＋金に寄せる |
| 白髪・髪質感を主役にする | 派手な美容素材を大量配置 |
| SerifとSansを役割分担する | 極細フォントだけで構成 |
| 実写真は事実証拠、AIはHair Design Imageとして役割を分ける | AI画像を施術実績・お客様事例として見せる |
| Ownerの人柄・安心を伝える | 経歴を長々と羅列 |
| 料金をシンプルに明示する | カードUIで価格を煽る |
| CTAに十分な余白を持たせる | 各セクションに予約ボタンを乱立 |
| 自然で控えめなMotion | パララックスや派手なズーム |
| Mobileで文章→写真の順を意識 | PCレイアウトを縮小するだけ |

## 11. Implementation Tokens

```css
:root {
  --color-bg: #F7F4EF;
  --color-surface: #FFFFFF;
  --color-surface-muted: #EFE8DF;
  --color-primary: #3D3330;
  --color-primary-dark: #2F2A28;
  --color-secondary: #B8AAA0;
  --color-accent: #865F50;
  --color-text: #2F2A28;
  --color-text-muted: #625B56;
  --color-border: #D7CEC4;
  --color-focus: #005FCC;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --container: 1200px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
  --space-40: 160px;
  --section-space: clamp(72px, 8vw, 128px);
}
```

## 12. Component Architecture

```text
SiteHeader
HeroSection
ProblemSection
ConceptSection
FeaturesSection
GrayHairDesignSection
StyleGallery
OwnerSection
PriceSection
FirstVisitSection
FaqSection
AccessSection
ReservationSection
SiteFooter
SectionHeading
PrimaryButton
SecondaryButton
Reveal
```

ページ固有の小コンポーネントを細分化しすぎず、読みやすいコード・修正のしやすさを優先する。

## 13. Product Design / Codex Handoff

### Product Designへ渡す情報
1440px Desktop / 390px Mobileを主軸に検証する。最低限、Heroのコピー量と写真比率、Serif / Sansの見え方、余白感、Dark Style Sectionの強さ、Gray Hair Designのサービス一覧、Reservation CTA、Mobile Sticky CTA、実写真 / AIの区別を確定する。

### Codexへ渡す情報
- 本書のColor / Typography / Spacing Tokens
- Breakpoint
- Component Architecture
- 各セクションのDesktop/Mobile配置
- Motion仕様
- Accessibility要件
- 画像asset一覧と実写真 / AI区分

### 個別リファレンス画像を作る価値が高いセクション
1. Hero
2. Gray Hair Design
3. Style
4. Reservation
5. Owner（Owner写真が確保できた場合）

## 14. Required Image Assets

| Asset | 優先度 | 用途 |
|---|---:|---|
| T&umロゴ | 高 | Header / Footer |
| Style用画像（実写真＋AI） | 最重要 | Hero / Style。AIはHair Design Imageとして扱う |
| 永野氏写真 | 高 | Owner |
| 店内写真 | 中 | Concept / First Visit |
| 外観写真 | 低〜中 | Access |
| AI Hair Texture | 中 | Concept / Gray Hair Design |
| AI Abstract Visual | 中 | Reservation等 |

素材不足時に公式サイト画像を自動的に転用しない。許可済みInstagram素材を第一優先とする。

## 15. Breakpoint Specification

```css
/* Mobile */
0px - 767px

/* Tablet */
768px - 1023px

/* Desktop */
1024px+
```

375 / 390 / 430 / 768 / 1024 / 1440pxで最終確認する。

## 16. 最終アートディレクション

T&umのサンプルLPは、**「白髪染め専門店の広告ページ」ではなく、「大人女性の髪について静かに相談できる場所を紹介するEditorial Web」**として仕上げる。

ビジュアルの中心は、**Warm Off-white × Deep Brown × Serif Typography × Hair Texture × Large Whitespace**。

Heroでは世界観、Gray Hair Designでは情報整理、Styleではヘアデザインの方向性、Ownerでは人、Priceでは透明性、Reservationでは安心感を担わせ、セクションごとの視覚的役割を変えながら、色・タイポグラフィ・余白で一貫させる。これをDesktop / Mobile双方の共通デザインDNAとする。

## 17. Product Designで視覚検証すべき項目

1. Heroが「50代前後の大人女性向け」と自然に伝わるか
2. 上品さが「暗い・老けた」印象になっていないか
3. Noto Serif JPとNoto Sans JPの組み合わせがT&umに合うか
4. Hero / Gray Hair Design / Style / Reservationで十分な視覚的変化があるか
5. AI画像中心でもStyleが「実績」と誤認されず、Hair Design Imageとして成立するか
6. 390pxで文字・料金・CTAが小さくならず読みやすいか
7. AI画像が実際の施術・店舗写真と誤認される構成になっていないか
8. 予約CTAが目立つ一方、押し売り感が出ていないか

## 18. 参考一次資料

- デジタル庁 デザインシステム: https://design.digital.go.jp/dads/
- Typography: https://design.digital.go.jp/dads/foundations/typography/
- Color: https://design.digital.go.jp/dads/foundations/color/
- Spacing: https://design.digital.go.jp/dads/foundations/spacing/
- Layout: https://design.digital.go.jp/dads/foundations/layout/
- Button: https://design.digital.go.jp/dads/components/button/
