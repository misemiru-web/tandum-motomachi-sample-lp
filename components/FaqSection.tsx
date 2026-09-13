"use client";

import { Plus } from "@phosphor-icons/react";
import { useState } from "react";
import styles from "../app/page.module.css";

const items = [
  {
    question: "白髪ぼかしと普通の白髪染めの違いは何ですか？",
    answer: "白髪ぼかしは、白髪を均一に隠すのではなく、ハイライトや明るさを取り入れて境目をなじませる考え方です。髪の状態やご希望に合わせて施術方法をご提案します。",
  },
  {
    question: "どのメニューを選べばよいか分かりません。",
    answer: "白髪の量や染めてきた履歴、理想の髪色によって適した選択肢は異なります。判断が難しい場合は、ご予約前にお電話でお問い合わせください。",
  },
  {
    question: "初めてでも予約できますか？",
    answer: "初めての方もWeb予約をご利用いただけます。髪のお悩みや希望するイメージを、来店時にお聞かせください。",
  },
  {
    question: "営業時間を教えてください。",
    answer: "営業時間は10:00〜21:00です。",
  },
  {
    question: "定休日はいつですか？",
    answer: "毎週日曜日です。",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.faqList}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div className={styles.faqItem} key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span><b>Q.</b>{item.question}</span>
                <Plus className={open ? styles.faqIconOpen : ""} aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} className={styles.faqAnswer} hidden={!open}>
              <p><b>A.</b>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
