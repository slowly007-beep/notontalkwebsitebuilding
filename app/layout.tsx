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
  title: "노션톡 | 교사를 위한 노션 가이드",
  description: "교사를 위한 노션 사용법과 무료 템플릿 커뮤니티",
  // ... (나머지 메타데이터는 기존과 동일하게 유지)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          paperlogy.variable,
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden"
        )}
      >
        {/* Aave Style Animated Mesh Background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#F6F6F8]">
           {/* Blob 1: Brand Yellow */}
           <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob" />
           {/* Blob 2: Soft Purple (Aave Vibe) */}
           <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-300/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000" />
           {/* Blob 3: Soft Blue */}
           <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-blue-300/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000" />
        </div>
        
        {children}
      </body>
    </html>
  );
}