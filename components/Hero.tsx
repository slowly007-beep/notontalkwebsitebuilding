import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* 배경 Glow 효과 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand/10 blur-[100px] rounded-full pointer-events-none opacity-50" />
      
      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* 뱃지 */}
        <div className="inline-flex items-center rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-medium text-brand mb-8 hover:bg-brand/10 transition-colors cursor-default animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Sparkles className="mr-2 h-4 w-4" />
          <span className="font-sans">노션의 모든 가능성을 발견하세요</span>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          노션, 이제 <br className="hidden md:block" />
          <span className="text-gradient-brand">나만의 방식</span>으로
        </h1>

        {/* 서브 타이틀 */}
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          단순한 메모앱을 넘어 업무 자동화 시스템까지.<br />
          NotionTalk 커뮤니티와 함께 성장하세요.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button size="lg" className="h-12 px-8 bg-brand text-black hover:bg-brand-hover text-base font-bold shadow-[0_0_20px_rgba(244,202,68,0.3)] hover:scale-105 transition-all duration-300">
            무료로 시작하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm hover:scale-105 transition-all duration-300">
            커뮤니티 둘러보기
          </Button>
        </div>

        {/* 소셜 프루프 */}
        <div className="mt-12 flex items-center space-x-4 text-sm text-muted-foreground animate-in fade-in zoom-in duration-1000 delay-500">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-gray-800" />
            ))}
          </div>
          <p>이미 <span className="font-bold text-white">1,100+명</span>이 함께하고 있습니다</p>
        </div>
      </div>
    </section>
  )
}