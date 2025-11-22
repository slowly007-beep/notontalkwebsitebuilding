import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const paperlogy = localFont({
  src: "../public/fonts/Paperlogy-8ExtraBold.ttf",
  weight: "800",
  variable: "--font-paperlogy",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "노션톡 | 교사를 위한 노션 사용법 & 무료 템플릿",
  description: "교사를 위한 노션 사용법과 무료 템플릿. 교무수첩, 학급관리, 생기부 누가기록까지 - 1,100명 선생님과 함께하는 노션 커뮤니티. Notion 공식 앰버서더의 무료 강의와 가이드를 만나보세요.",
  keywords: [
    "노션 사용법",
    "노션 활용법",
    "노션 템플릿",
    "노션 무료 템플릿",
    "노션 교무수첩",
    "교사 노션",
    "디지털 교무수첩",
    "노션 강의",
    "노션 학급관리",
    "노션 생기부",
    "노션톡",
    "NotionTalk",
  ],
  authors: [{ name: "노션톡" }],
  openGraph: {
    title: "노션톡 | 교사를 위한 노션 사용법 & 무료 템플릿",
    description: "교사를 위한 노션 사용법과 무료 템플릿. 교무수첩, 학급관리, 생기부 누가기록까지 - 1,100명 선생님과 함께하는 노션 커뮤니티.",
    url: "https://www.notiontalk.com",
    siteName: "노션톡",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "노션톡 | 교사를 위한 노션 사용법 & 무료 템플릿",
    description: "교사를 위한 노션 사용법과 무료 템플릿. 1,100명 선생님과 함께하는 노션 커뮤니티.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    naver: "29936f0eff6dcb2a75b696f7bb02eb3d24a90e4b",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={cn(
          paperlogy.variable,
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        {/* 배경 그라데이션 효과 */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-background to-background pointer-events-none" />
        {children}
      </body>
    </html>
  );
}