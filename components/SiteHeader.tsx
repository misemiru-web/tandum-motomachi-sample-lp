"use client";

import { CalendarBlank, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import styles from "./SiteHeader.module.css";

const navItems = [
  ["コンセプト", "#concept"],
  ["特徴", "#features"],
  ["施術メニュー", "#gray-hair-design"],
  ["スタイル", "#style"],
  ["オーナーの想い", "#owner"],
  ["料金", "#price"],
  ["はじめての方へ", "#first-visit"],
  ["よくあるご質問", "#faq"],
  ["アクセス", "#access"],
];

export function SiteHeader({ bookingUrl }: { bookingUrl: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#top" aria-label="T&um トップへ">
          <span>T&um</span>
          <small>Hair Salon · Motomachi</small>
        </a>

        <nav className={styles.desktopNav} aria-label="メインナビゲーション">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <a className={styles.booking} href={bookingUrl} target="_blank" rel="noreferrer">
          <CalendarBlank aria-hidden="true" weight="light" />
          <span>Web予約する</span>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className={`${styles.mobileMenu} ${open ? styles.open : ""}`} hidden={!open}>
        <nav aria-label="モバイルナビゲーション">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className={styles.mobileBooking} href={bookingUrl} target="_blank" rel="noreferrer">
            <CalendarBlank aria-hidden="true" weight="light" />
            Web予約する
          </a>
        </nav>
      </div>
    </header>
  );
}
