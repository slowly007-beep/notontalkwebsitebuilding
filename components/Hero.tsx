'use client';

import React, { useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

// ----------------------------------------------------------------------
// [중요] 실제 Next.js 프로젝트에서는 아래 주석을 풀고 사용하세요.
// (배포 시에는 아래 두 줄의 주석을 풀고, 밑에 있는 임시 컴포넌트들을 지우는 것이 정석입니다.)
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// [미리보기 및 빌드 에러 방지용 목업 컴포넌트]
// TypeScript 환경에서도 에러가 나지 않도록 타입을 명시했습니다.
// ----------------------------------------------------------------------

// Link 컴포넌트 타입 정의
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link = ({ href, children, className, ...props }: LinkProps) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

// Button 컴포넌트 타입 정의
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "lg" | "sm";
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button = ({ 
  variant = "default", 
  size = "default", 
  className, 
  asChild, 
  children, 
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants: Record<string, string> = {
    default: "bg-[#151922] text-[#F0EEE9] hover:bg-black",
    ghost: "bg-white/50 border border-[#151922]/5 text-[#151922] hover:bg-white/80 backdrop-blur-sm",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
  };
  
  const sizes: Record<string, string> = {
    default: "h-10 px-4 py-2",
    lg: "h-12 md:h-14 px-8 rounded-2xl",
    sm: "h-9 rounded-md px-3"
  };
  
  const appliedClass = `${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className || ""}`;

  return asChild ? (
    <div className={appliedClass}>{children}</div>
  ) : (
    <button className={appliedClass} {...props}>{children}</button>
  );
};
// ----------------------------------------------------------------------

export default function Hero() {
  
  // [검색 제외 설정]
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    // 배경색을 디자인 철학에 맞춰 밝은 톤으로 변경
    <div className="bg-[#F9F9F9] min-h-screen text-[#151922] font-sans selection:bg-[#E6C768]/30">
        
      {/* 애니메이션 및 폰트 스타일 정의 */}
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        
        body { font-family: 'Pretendard', sans-serif; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0; /* 시작 전 숨김 */
        }

        /* 한국어 줄바꿈 최적화 */
        .break-keep { word-break: keep-all; }
      `}</style>

      <section className="relative pt-32 pb-40 overflow-hidden">
        
        {/* 배경 장식 요소 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-white to-transparent -z-10" />

        <div className="container mx-auto relative z-10 flex flex-col items-center text-center px-4 md:px-0">
          
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-[#151922]/10 bg-white/50 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium text-[#151922]/80 mb-8 hover:scale-105 transition-transform cursor-default shadow-sm animate-fade-in-up">
            <Sparkles className="mr-2 h-3 w-3 md:h-4 md:w-4 text-[#E6C768]" />
            <span className="font-sans">교사를 위한 스마트한 노션 가이드</span>
          </div>

          {/* Main Title */}
          <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 text-[#151922] animate-fade-in-up break-keep leading-tight delay-100" style={{ animationDelay: "0.1s" }}>
            노션, 이제 <br className="hidden md:block" />
            <span className="relative inline-block">
               나만의 방식
               <span className="absolute bottom-1 left-0 w-full h-2 md:h-6 bg-[#E6C768]/40 -z-10 rounded-full transform -rotate-1"></span>
            </span>
            으로
          </h1>

          {/* Sub Title */}
          <p className="max-w-2xl text-base md:text-xl text-gray-600 mb-12 leading-relaxed animate-fade-in-up break-keep delay-200" style={{ animationDelay: "0.2s" }}>
            단순한 메모앱을 넘어, 선생님의 업무 자동화 시스템까지.<br className="hidden md:block" />
            <strong className="text-[#151922]">NotionTalk</strong>에서 1,100명의 동료와 함께하세요.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up px-4 sm:px-0 delay-300" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              asChild
              className="h-12 md:h-14 px-8 rounded-2xl bg-[#151922] text-[#F0EEE9] hover:bg-black text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Link href="https://open.kakao.com/o/gpSvPKGg" target="_blank" rel="noopener noreferrer" className="flex items-center">
                오픈카톡 참여하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost" 
              asChild
              className="h-12 md:h-14 px-8 rounded-2xl bg-white/50 border border-[#151922]/5 text-[#151922] hover:bg-white/80 backdrop-blur-sm transition-all duration-300"
            >
              <Link href="https://www.threads.com/@iooo_tttt" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Threads 둘러보기
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex flex-col items-center animate-fade-in-up delay-500" style={{ animationDelay: "0.4s" }}>
            <p className="text-xs md:text-sm font-medium text-gray-500 mb-4">Trusted by teachers from</p>
            <div className="flex -space-x-3 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-white bg-gray-200 shadow-sm relative overflow-hidden"
                >
                   <img 
                     src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${i * 123}`} 
                     alt="avatar"
                     className="w-full h-full object-cover"
                   />
                </div>
              ))}
               <div className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-white bg-[#E6C768]/30 flex items-center justify-center text-[10px] md:text-xs font-bold text-[#151922] shadow-sm z-10">
                +1k
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-500">이미 <span className="font-bold text-[#151922]">1,100+명</span>의 선생님이 함께하고 있습니다</p>
          </div>

        </div>
      </section>
    </div>
  )
}