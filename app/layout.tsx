import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const sans = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Noto_Serif_JP({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "元町・中華街の白髪ケアサロン T&um｜白髪ぼかし・脱白髪染め",
  description:
    "元町・中華街駅から徒歩約2分。白髪を隠すだけではなく、その人らしく活かすヘアデザインを提案するT&umの営業提案用サンプルLPです。",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
