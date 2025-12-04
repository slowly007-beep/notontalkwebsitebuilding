import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-40 overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center text-center">
        
        {/* Badge: Glassmorphism Style */}
        <div className="inline-flex items-center rounded-full border border-black/5 bg-white/50 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-gray-800 mb-8 hover:scale-105 transition-transform cursor-default shadow-sm">
          <Sparkles className="mr-2 h-4 w-4 text-brand-hover" />
          <span className="font-sans">교사를 위한 스마트한 노션 가이드</span>
        </div>

        {/* 메인 타이틀: Big & Bold & Tight */}
        <h1 className="max-w-5xl text-6xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 text-[#1B2030] animate-fade-in-up">
          노션, 이제 <br className="hidden md:block" />
          <span className="relative whitespace-nowrap">
             나만의 방식
             {/* 강조 밑줄 효과 */}
             <span className="absolute bottom-2 left-0 w-full h-3 md:h-6 bg-brand/40 -z-10 rounded-full transform -rotate-1"></span>
          </span>으로
        </h1>

        {/* 서브 타이틀 */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          단순한 메모앱을 넘어, 선생님의 업무 자동화 시스템까지.<br />
          <strong className="text-gray-900">NotionTalk</strong>에서 1,100명의 동료와 함께하세요.
        </p>

        {/* CTA 버튼 그룹 */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {/* Primary: Solid Dark Button (Aave Style) */}
          <Button size="lg" className="h-14 px-8 rounded-2xl bg-[#1B2030] text-white hover:bg-black text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            무료로 시작하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          {/* Secondary: Glass Button */}
          <Button size="lg" variant="ghost" className="h-14 px-8 rounded-2xl bg-white/50 border border-black/5 text-gray-800 hover:bg-white/80 backdrop-blur-sm transition-all duration-300">
            커뮤니티 둘러보기
          </Button>
        </div>

        {/* Social Proof (하단) */}
        <div className="mt-16 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-sm font-medium text-gray-500 mb-4">Trusted by teachers from</p>
          <div className="flex -space-x-3 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 shadow-sm" style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`, backgroundSize: 'cover' }} />
            ))}
             <div className="h-10 w-10 rounded-full border-2 border-white bg-brand/20 flex items-center justify-center text-xs font-bold text-gray-700 shadow-sm">
              +1k
            </div>
          </div>
          <p className="text-sm text-gray-500">이미 <span className="font-bold text-gray-900">1,100+명</span>의 선생님이 함께하고 있습니다</p>
        </div>
      </div>
    </section>
  )
}