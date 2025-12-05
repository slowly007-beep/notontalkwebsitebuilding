import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-40 overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center text-center px-4 md:px-0">
        
        {/* Badge: 모바일에서도 잘 보이게 텍스트 크기 조정 */}
        <div className="inline-flex items-center rounded-full border border-[#151922]/10 bg-white/50 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium text-[#151922]/80 mb-8 hover:scale-105 transition-transform cursor-default shadow-sm">
          <Sparkles className="mr-2 h-3 w-3 md:h-4 md:w-4 text-[#E6C768]" />
          <span className="font-sans">교사를 위한 스마트한 노션 가이드</span>
        </div>

        {/* Main Title (여기가 핵심!) */}
        {/* 1. text-4xl: 모바일 폰트 크기를 줄여서 한 줄에 더 많이 들어가게 함 */}
        {/* 2. break-keep: 한국어 단어가 중간에 잘리지 않게 강제함 (word-break: keep-all) */}
        {/* 3. leading-tight: 줄 간격을 좁혀서 덩어리감 유지 */}
        <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 text-[#151922] animate-fade-in-up break-keep leading-tight">
          노션, 이제 <br className="hidden md:block" /> {/* PC에선 줄바꿈, 모바일에선 자연스럽게 이어지게 */}
          <span className="relative inline-block"> {/* whitespace-nowrap 대신 inline-block 사용 (화면 좁으면 덩어리째 줄바꿈) */}
             나만의 방식
             {/* 밑줄 효과 (반응형 높이 조절) */}
             <span className="absolute bottom-1 left-0 w-full h-2 md:h-6 bg-[#E6C768]/40 -z-10 rounded-full transform -rotate-1"></span>
          </span>
          으로
        </h1>

        {/* Sub Title */}
        <p className="max-w-2xl text-base md:text-xl text-gray-600 mb-12 leading-relaxed animate-fade-in-up break-keep" style={{ animationDelay: "0.1s" }}>
          단순한 메모앱을 넘어, 선생님의 업무 자동화 시스템까지.<br className="hidden md:block" />
          <strong className="text-[#151922]">NotionTalk</strong>에서 1,100명의 동료와 함께하세요.
        </p>

        {/* CTA Buttons (모바일에서 세로로 쌓이게 flex-col 유지) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up px-4 sm:px-0" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" className="h-12 md:h-14 px-8 rounded-2xl bg-[#151922] text-[#F0EEE9] hover:bg-black text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            무료로 시작하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="ghost" className="h-12 md:h-14 px-8 rounded-2xl bg-white/50 border border-[#151922]/5 text-[#151922] hover:bg-white/80 backdrop-blur-sm transition-all duration-300">
            커뮤니티 둘러보기
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-16 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-xs md:text-sm font-medium text-gray-500 mb-4">Trusted by teachers from</p>
          <div className="flex -space-x-3 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-white bg-gray-200 shadow-sm" style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`, backgroundSize: 'cover' }} />
            ))}
             <div className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-white bg-[#E6C768]/30 flex items-center justify-center text-[10px] md:text-xs font-bold text-[#151922] shadow-sm">
              +1k
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500">이미 <span className="font-bold text-[#151922]">1,100+명</span>의 선생님이 함께하고 있습니다</p>
        </div>
      </div>
    </section>
  )
}