import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* 배경 Glow 효과 */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand/10 blur-[100px] rounded-full pointer-events-none opacity-50" />
      
      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Coming Soon 뱃지 */}
        <div className="inline-flex items-center rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-medium text-brand mb-8 hover:bg-brand/10 transition-colors cursor-default animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Calendar className="mr-2 h-4 w-4" />
          <span className="font-sans">곧 만나요</span>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          노션, 이제 <br className="hidden md:block" />
          <span className="text-gradient-brand">나만의 방식</span>으로
        </h1>

        {/* 서브 타이틀 */}
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          선생님을 위한 더 나은 노션 경험을 준비하고 있습니다.
        </p>
        
        <p className="max-w-2xl text-base text-muted-foreground/80 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-250">
          NotionTalk 커뮤니티에서 먼저 소식을 받아보세요.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button 
            size="lg" 
            asChild
            className="h-12 px-8 bg-brand text-black hover:bg-brand-hover text-base font-bold shadow-[0_0_20px_rgba(244,202,68,0.3)] hover:scale-105 transition-all duration-300"
          >
            <Link href="https://www.threads.com/@iooo_tttt" target="_blank" rel="noopener noreferrer">
              Threads에서 소식 받기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            asChild
            className="h-12 px-8 border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm hover:scale-105 transition-all duration-300"
          >
            <Link href="https://open.kakao.com/o/gpSvPKGg" target="_blank" rel="noopener noreferrer">
              오픈카톡 참여하기
            </Link>
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
