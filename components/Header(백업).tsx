import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      {/* [Layout 변경점]
        1. mx-auto max-w-[1440px]: 블로그와 동일한 최대 너비 (기존 container 제거)
        2. px-12: 좌우 여백 48px로 통일
        3. grid grid-cols-[1fr_auto_1fr]: 좌(1)-중(자동)-우(1) 비율로 칼같이 정렬
      */}
      <div className="mx-auto grid h-16 w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-12">
        
        {/* 1. 로고 영역 (왼쪽 끝 정렬) */}
        <div className="justify-self-start">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-brand/10 p-2 rounded-lg group-hover:bg-brand/20 transition-colors">
              {/* 아이콘 크기 h-5 w-5 (20px)로 미세 조정하여 블로그와 통일 */}
              <BookOpen className="h-5 w-5 text-brand" /> 
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-foreground">NotionTalk</span>
          </Link>
        </div>

        {/* 2. 네비게이션 메뉴 (정중앙 정렬) */}
        {/* space-x-9 (36px)로 간격 조정, text-[15px]로 폰트 크기 통일 */}
        <nav className="hidden md:flex justify-self-center items-center space-x-9 text-[15px] font-medium">
          <Link href="/guide" className="text-muted-foreground hover:text-brand transition-colors">노션가이드</Link>
          <Link href="/templates" className="text-muted-foreground hover:text-brand transition-colors">템플릿</Link>
          <Link href="/automation" className="text-muted-foreground hover:text-brand transition-colors">자동화레시피</Link>
          <Link href="/community" className="text-muted-foreground hover:text-brand transition-colors">커뮤니티</Link>
          <Link href="/team" className="text-muted-foreground hover:text-brand transition-colors">만든이들</Link>
        </nav>

        {/* 3. 우측 액션 버튼 (오른쪽 끝 정렬) */}
        <div className="flex items-center space-x-5 justify-self-end">
          <Link href="/login" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            로그인
          </Link>
          {/* 그림자 효과 및 여백 블로그와 동일하게 미세 조정 */}
          <Button className="bg-brand text-black hover:bg-brand-hover font-semibold shadow-[0_0_15px_rgba(244,202,68,0.15)] hover:shadow-[0_0_25px_rgba(244,202,68,0.4)] transition-all duration-300 px-5">
            시작하기
          </Button>
        </div>
      </div>
    </header>
  )
}