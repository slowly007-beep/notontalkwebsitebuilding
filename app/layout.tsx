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
  title: "NotionTalk - 노션의 모든 것",
  description: "노션 자기화부터 자동화까지, NotionTalk에서 시작하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={cn(
          paperlogy.variable,
          "min-h-screen bg-background font-sans antialiased"
        )}>
        {/* 배경 그라데이션 효과 */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-background to-background pointer-events-none" />
        {children}
      </body>
    </html>
  );
}