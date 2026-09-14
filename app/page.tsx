import {
  ArrowRight,
  CalendarBlank,
  ChatCircleDots,
  Heart,
  Leaf,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { FaqSection } from "../components/FaqSection";
import { Reveal } from "../components/Reveal";
import { SiteHeader } from "../components/SiteHeader";
import styles from "./page.module.css";

const bookingUrl =
  "https://repitte.jp/reserve/store?token=43bf23a9c616575f8e656cccd8fc4461";

const services = [
  {
    number: "01",
    name: "白髪ぼかし",
    price: "¥15,400",
    description:
      "ハイライトや透明感のあるカラーで、白髪を自然になじませる選択肢です。",
  },
  {
    number: "02",
    name: "脱白髪染め",
    price: "¥19,800",
    description:
      "暗く染め続ける方法から離れ、白髪を活かした色の変化を楽しむための施術です。",
  },
  {
    number: "03",
    name: "全体カラー",
    price: "¥8,800",
    description:
      "髪全体の色を整え、肌のトーンや希望する雰囲気に合わせてご提案します。",
  },
  {
    number: "04",
    name: "カット",
    price: "¥7,150",
    description:
      "髪質や骨格、日々の扱いやすさを考えながら、今の自分に合う形へ整えます。",
  },
];

const prices = [
  ["カット", "¥7,150"],
  ["リタッチカラー", "¥7,700"],
  ["全体カラー", "¥8,800"],
  ["白髪ぼかし", "¥15,400"],
  ["脱白髪染め", "¥19,800"],
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={styles.eyebrow}>{children}<span aria-hidden="true" /></p>;
}

function BookingButton({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`${styles.primaryButton} ${light ? styles.lightButton : ""}`}
      href={bookingUrl}
      target="_blank"
      rel="noreferrer"
    >
      <CalendarBlank aria-hidden="true" weight="light" />
      <span>Web予約する</span>
      <ArrowRight aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <div className={styles.page} id="top">
      <SiteHeader bookingUrl={bookingUrl} />

      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={`${styles.container} ${styles.heroInner}`}>
            <Reveal className={styles.heroCopy}>
              <Eyebrow>MOTOMACHI / YOKOHAMA</Eyebrow>
              <h1 id="hero-title" className={styles.heroTitle}>
                <span>白髪を隠す毎日から、</span>
                <span>白髪を活かす楽しみへ。</span>
              </h1>
              <p className={styles.heroLead}>
                年齢とともに変わる髪に、やさしく向き合う。<br />
                T&umは、大人女性の白髪ケアと美しさに寄り添う、<br className={styles.desktopOnly} />
                元町・中華街のプライベートサロンです。
              </p>
              <BookingButton />
              <p className={styles.locationLine}>
                <MapPin aria-hidden="true" weight="fill" />
                元町・中華街駅 5番出口より徒歩約2分
              </p>
              <div className={styles.quietMessage}>
                <span>Quiet Confidence</span>
                <p>白髪を、静かに美しく。</p>
              </div>
            </Reveal>

            <Reveal className={styles.heroVisual} delay={80}>
              <Image
                src="/images/ai/hero/hero_gray_hair_portrait.jpg"
                alt="グレーヘアを活かした大人のヘアデザインイメージ"
                width={1448}
                height={1086}
                priority
                sizes="(max-width: 767px) 100vw, 58vw"
              />
              <svg
                className={styles.heroCurve}
                viewBox="0 0 160 1000"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0,0 C108,0 148,120 120,260 C86,425 22,520 55,690 C86,838 148,930 160,1000 L0,1000 Z" />
              </svg>
              <div className={styles.heroImageCopy} aria-hidden="true">
                <p>いくつになっても、<br />わたしらしく。</p>
                <span />
                <small>T&UM<br />HAIR SALON<br />IN YOKOHAMA</small>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.problem} aria-labelledby="problem-title">
          <div className={styles.container}>
            <div className={styles.problemIntro}>
              <Reveal>
                <Eyebrow>PROBLEM</Eyebrow>
                <h2 id="problem-title">こんなお悩みは<br />ありませんか？</h2>
                <p>
                  年齢とともに変わっていく髪のこと。<br />
                  ふとした瞬間に気になるお悩み、<br />
                  ひとりで抱えていませんか？
                </p>
              </Reveal>
              <Reveal className={styles.problemImage} delay={80}>
                <Image
                  src="/images/ai/problem/03_trouble_damaged_hair_closeup.jpg"
                  alt="髪の根元や質感について考えるイメージ"
                  width={1122}
                  height={1402}
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </Reveal>
            </div>

            <div className={styles.problemGrid}>
              {[
                ["01", "根元の白髪がすぐ気になる", "少し経つだけで目立ってきて、鏡を見るたびに気になる。"],
                ["02", "繰り返すカラーでダメージが気になる", "きれいに染めたいけれど、髪の傷みも気になってきた。"],
                ["03", "暗い白髪染めばかりで気分が上がらない", "いつも同じような色になってしまい、おしゃれを楽しめない。"],
                ["04", "年齢とともに髪質や似合う髪型が変わってきた", "今の自分に合う髪型がわからず、なんとなく決まらない。"],
              ].map(([number, title, text], index) => (
                <Reveal className={styles.problemItem} delay={index * 60} key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.concept} id="concept" aria-labelledby="concept-title">
          <div className={`${styles.container} ${styles.conceptInner}`}>
            <Reveal className={styles.conceptImage}>
              <Image
                src="/images/ai/concept/06_concept_botanical_still_life.jpg"
                alt="自然光に包まれた植物の静物イメージ"
                width={1448}
                height={1086}
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </Reveal>
            <Reveal className={styles.conceptCopy} delay={80}>
              <Eyebrow>CONCEPT</Eyebrow>
              <h2 id="concept-title">白髪は、これからの<br />私をつくる素材です。</h2>
              <p className={styles.lead}>
                白髪を無理に隠すのではなく、<br />
                その人らしい美しさへ変えていく。
              </p>
              <p>
                T&umは、大人女性の白髪悩みに向き合い、一人ひとりの髪や希望に合わせたデザインをご提案します。髪・頭皮への負担にも配慮しながら、丁寧なカウンセリングで、あなたらしい選択肢を一緒に見つけていきます。
              </p>
            </Reveal>
          </div>
        </section>

        <section className={styles.features} id="features" aria-labelledby="features-title">
          <div className={styles.container}>
            <Reveal className={styles.centerHeading}>
              <Eyebrow>FEATURES</Eyebrow>
              <h2 id="features-title">
                <span className={styles.mobileHeadingLine}>T&umが選ばれる</span>
                <span className={styles.mobileHeadingLine}>3つの特徴</span>
              </h2>
            </Reveal>
            <div className={styles.featureGrid}>
              {[
                ["01", "白髪ケアに向き合う専門性", "白髪を隠すだけにとどまらず、髪の変化をこれからの美しさにつなげる方法を考えます。"],
                ["02", "一人ひとりに合わせるカウンセリング", "白髪の状態、これまでのカラー、日々の過ごし方を伺い、選択肢を丁寧に整理します。"],
                ["03", "落ち着いて相談できる空間", "髪の悩みや希望を話しやすい、穏やかな時間を大切にしています。"],
              ].map(([number, title, text], index) => (
                <Reveal className={styles.featureItem} delay={index * 70} key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.grayDesign} id="gray-hair-design" aria-labelledby="design-title">
          <div className={`${styles.container} ${styles.designGrid}`}>
            <Reveal className={styles.designIntro}>
              <Eyebrow>GRAY HAIR DESIGN</Eyebrow>
              <h2 id="design-title">白髪を、<br />美しいデザインに。</h2>
              <p>
                隠すだけの白髪から、活かす白髪デザインへ。髪の状態や希望に合わせて、大人のための選択肢をご提案します。
              </p>
              <p className={styles.designTagline}>Quiet Confidence —<br />Age Gracefully, Be Yourself.</p>
              <div className={styles.serviceVisuals}>
                <Image
                  className={styles.consultationImage}
                  src="/images/ai/services/06_salon_consultation_scene.jpg"
                  alt="髪について相談するカウンセリングのイメージ"
                  width={1448}
                  height={1086}
                  sizes="(max-width: 767px) 65vw, 31vw"
                />
                <Image
                  className={styles.swatchImage}
                  src="/images/ai/services/07_hair_color_bowls_and_swatches.jpg"
                  alt="カラーの選択肢を表すカラースウォッチのイメージ"
                  width={1448}
                  height={1086}
                  sizes="(max-width: 767px) 42vw, 14vw"
                />
                <Image
                  className={styles.serviceHairImage}
                  src="/images/ai/services/08_service_translucent_brown_bob.jpg"
                  alt="透明感のあるブラウンボブのヘアデザインイメージ"
                  width={1122}
                  height={1402}
                  sizes="(max-width: 767px) 42vw, 14vw"
                />
              </div>
              <p className={styles.visualNote}>※画像は施術の考え方を伝えるイメージです。</p>
            </Reveal>

            <div className={styles.serviceList}>
              <p className={styles.serviceLead}>白髪は、これからの私をもっと美しくする。</p>
              {services.map((service, index) => (
                <Reveal className={styles.serviceRow} delay={index * 60} key={service.number}>
                  <span className={styles.serviceNumber}>{service.number}</span>
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                  <strong>{service.price}</strong>
                </Reveal>
              ))}
              <a className={styles.textButton} href="#price">
                料金一覧を見る <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className={styles.styleSection} id="style" aria-labelledby="style-title">
          <div className={`${styles.container} ${styles.styleGrid}`}>
            <Reveal className={styles.styleCopy}>
              <Eyebrow>STYLE</Eyebrow>
              <h2 id="style-title">歳を重ねるほど、<br />私らしい美しさが<br />見えてくる。</h2>
              <p>
                白髪を隠すのではなく、活かす。髪の個性を生かしながら、上品でやわらかな大人のヘアスタイルをご提案します。
              </p>
              <p className={styles.styleTagline}>HAIR DESIGN<br />FOR A MORE CONFIDENT YOU</p>
            </Reveal>

            <Reveal className={styles.styleLeadImage} delay={60}>
              <Image
                src="/images/ai/style/10_style_layered_brown_bob.jpg"
                alt="レイヤーを生かしたブラウンボブのヘアデザインイメージ"
                width={1122}
                height={1402}
                sizes="(max-width: 767px) 100vw, 33vw"
              />
            </Reveal>

            <div className={styles.styleSideImages}>
              <Reveal className={styles.styleWide} delay={100}>
                <Image
                  src="/images/ai/style/11_style_chestnut_bob_cream_sweater.jpg"
                  alt="チェスナットカラーのボブスタイルイメージ"
                  width={1122}
                  height={1402}
                  sizes="(max-width: 767px) 48vw, 31vw"
                />
              </Reveal>
              <Reveal delay={140}>
                <Image
                  src="/images/ai/style/12_style_bob_back_view.jpg"
                  alt="ボブスタイルを後ろから見たヘアデザインイメージ"
                  width={1122}
                  height={1402}
                  sizes="(max-width: 767px) 100vw, 16vw"
                />
              </Reveal>
              <Reveal delay={180}>
                <Image
                  src="/images/ai/style/13_style_ash_gray_bob_profile.jpg"
                  alt="アッシュグレーのショートボブのヘアデザインイメージ"
                  width={1122}
                  height={1402}
                  sizes="(max-width: 767px) 48vw, 16vw"
                />
              </Reveal>
            </div>
            <p className={styles.styleNote}>※掲載画像はヘアデザインのイメージです。</p>
          </div>
        </section>

        <section className={styles.owner} id="owner" aria-labelledby="owner-title">
          <div className={styles.ownerInner}>
            <Reveal>
              <Eyebrow>OWNER MESSAGE</Eyebrow>
              <h2 id="owner-title">髪を通して、<br />これからの毎日をもっと心地よく。</h2>
              <p className={styles.ownerLead}>
                一人ひとりに寄り添い、髪だけでなく、気持ちまで軽くなれるような時間を。
              </p>
              <p>
                2001年にスタイリストデビュー後、複数店舗で店長を経験。ヘアショー・コンテスト・講師活動などを経て、2024年にT&umを開業しました。長い経歴を並べることより、目の前の髪と丁寧に向き合うことを大切にしています。
              </p>
              <div className={styles.ownerName}>
                <span>T&um OWNER</span>
                <strong>永野 良一</strong>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.price} id="price" aria-labelledby="price-title">
          <div className={styles.priceInner}>
            <Reveal className={styles.priceHeading}>
              <Eyebrow>PRICE</Eyebrow>
              <h2 id="price-title">
                <span className={styles.headingLine}>わかりやすい料金で、</span>
                <span className={styles.headingLine}>安心してご相談ください。</span>
              </h2>
              <p>主なメニューの料金をご案内します。</p>
            </Reveal>
            <Reveal className={styles.priceList} delay={80}>
              {prices.map(([name, price]) => (
                <div className={styles.priceRow} key={name}>
                  <span>{name}</span>
                  <strong>{price}</strong>
                </div>
              ))}
              <p className={styles.priceNote}>※掲載料金は2026年9月13日時点で確認した公開料金です。</p>
              <BookingButton />
            </Reveal>
          </div>
        </section>

        <section className={styles.firstVisit} id="first-visit" aria-labelledby="visit-title">
          <div className={`${styles.container} ${styles.visitGrid}`}>
            <Reveal className={styles.visitCopy}>
              <Eyebrow>FIRST VISIT</Eyebrow>
              <h2 id="visit-title">はじめての方へ</h2>
              <p className={styles.lead}>
                髪のお悩みや理想のイメージを、ゆっくりとお聞かせください。落ち着いて相談できる時間を大切にしています。
              </p>
              <div className={styles.visitPoints}>
                <div>
                  <Leaf aria-hidden="true" weight="light" />
                  <span><strong>落ち着いた空間</strong>周りを気にせず、髪のことを相談しやすい時間を。</span>
                </div>
                <div>
                  <ChatCircleDots aria-hidden="true" weight="light" />
                  <span><strong>丁寧なカウンセリング</strong>髪のお悩みや希望をじっくりと伺います。</span>
                </div>
                <div>
                  <Heart aria-hidden="true" weight="light" />
                  <span><strong>無理のないご提案</strong>今の髪の状態やライフスタイルに寄り添います。</span>
                </div>
              </div>
            </Reveal>
            <Reveal className={styles.visitImage} delay={80}>
              <Image
                src="/images/ai/salon/15_first_visit_salon_interior.jpg"
                alt="落ち着いて相談できるサロン空間のイメージ"
                width={1448}
                height={1086}
                sizes="(max-width: 767px) 100vw, 52vw"
              />
              <p>※掲載画像は空間イメージです。T&umの実店舗写真ではありません。</p>
            </Reveal>
          </div>
        </section>

        <section className={styles.faq} id="faq" aria-labelledby="faq-title">
          <div className={`${styles.container} ${styles.faqGrid}`}>
            <Reveal className={styles.faqVisual}>
              <Eyebrow>FAQ</Eyebrow>
              <h2 id="faq-title">よくあるご質問</h2>
              <Image
                src="/images/ai/faq/16_faq_plant_and_books_still_life.jpg"
                alt="植物と本の落ち着いた静物イメージ"
                width={1448}
                height={1086}
                sizes="(max-width: 767px) 100vw, 32vw"
              />
            </Reveal>
            <Reveal delay={80}>
              <FaqSection />
            </Reveal>
          </div>
        </section>

        <section className={styles.access} id="access" aria-labelledby="access-title">
          <div className={`${styles.container} ${styles.accessGrid}`}>
            <Reveal className={styles.accessInfo}>
              <Eyebrow>ACCESS</Eyebrow>
              <h2 id="access-title">元町・中華街駅から<br />徒歩約2分。</h2>
              <p className={styles.accessStation}>
                <MapPin aria-hidden="true" weight="fill" />
                みなとみらい線<br />元町・中華街駅 5番出口より徒歩約2分
              </p>
              <dl>
                <div><dt>Salon</dt><dd>元町・中華街 白髪染めサロン<br />T&um【ティーアンドアム】</dd></div>
                <div><dt>Address</dt><dd>〒231-0861<br />神奈川県横浜市中区元町1-31<br />ラ・スピーガ元町 地下1階 002号</dd></div>
                <div><dt>Open</dt><dd>10:00〜21:00</dd></div>
                <div><dt>Closed</dt><dd>毎週日曜日</dd></div>
              </dl>
              <div className={styles.accessActions}>
                <a href="tel:0452707464"><Phone aria-hidden="true" />045-270-7464</a>
                <BookingButton />
              </div>
              {/* TODO: 正式なGoogle Maps URLが確認できたら導線を追加する。 */}
            </Reveal>
            <Reveal className={styles.accessImage} delay={80}>
              <Image
                src="/images/ai/access/17_access_motomachi_street_sign.jpg"
                alt="元町を想起させる街並みのイメージ"
                width={1448}
                height={1086}
                sizes="(max-width: 767px) 100vw, 50vw"
              />
              <p>※元町を想起させるイメージです。実際の道順・店舗外観ではありません。</p>
            </Reveal>
          </div>
        </section>

        <section className={styles.reservation} aria-labelledby="reservation-title">
          <Image
            className={styles.reservationBackground}
            src="/images/ai/reservation/18_cta_leaf_shadow_background.jpg"
            alt=""
            fill
            sizes="100vw"
          />
          <div className={styles.reservationOverlay} aria-hidden="true" />
          <div className={`${styles.container} ${styles.reservationInner}`}>
            <Reveal>
              <Eyebrow>RESERVATION</Eyebrow>
              <h2 id="reservation-title">
                <span className={styles.mobileHeadingLine}>自分に合う白髪との</span>
                <span className={styles.mobileHeadingLine}>付き合い方を、</span>
                <br className={styles.desktopHeadingBreak} />
                <span className={styles.mobileHeadingLine}>相談してみませんか。</span>
              </h2>
              <p>
                まずはお気軽にご予約ください。<br />
                あなたの髪とこれからを、一緒に考えていきます。
              </p>
              <BookingButton light />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerMain}`}>
          <a className={styles.footerLogo} href="#top" aria-label="T&um トップへ">
            T&um<small>Hair Salon · Motomachi</small>
          </a>
          <p>〒231-0861 神奈川県横浜市中区元町1-31<br />ラ・スピーガ元町 地下1階 002号</p>
          <nav aria-label="フッターナビゲーション">
            <a href="#concept">コンセプト</a>
            <a href="#gray-hair-design">施術メニュー</a>
            <a href="#style">スタイル</a>
            <a href="#owner">オーナーの想い</a>
            <a href="#price">料金</a>
            <a href="#first-visit">はじめての方へ</a>
            <a href="#faq">よくあるご質問</a>
            <a href="#access">アクセス</a>
          </nav>
          {/* TODO: 正式なInstagram URLが確認できたらリンクを追加する。 */}
        </div>
        <div className={`${styles.container} ${styles.footerBottom}`}>
          <p>本ページはミセミルWebによる営業提案用サンプルです。</p>
          <p>正式な店舗サイトではありません。</p>
        </div>
      </footer>
    </div>
  );
}
