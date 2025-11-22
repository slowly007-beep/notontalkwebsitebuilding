import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-brand/10 p-2 rounded-lg group-hover:bg-brand/20 transition-colors">
            <BookOpen className="h-6 w-6 text-brand" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight">NotionTalk</span>
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/guide" className="text-muted-foreground hover:text-brand transition-colors">노션가이드</Link>
          <Link href="/templates" className="text-muted-foreground hover:text-brand transition-colors">템플릿</Link>
          <Link href="/automation" className="text-muted-foreground hover:text-brand transition-colors">자동화레시피</Link>
          <Link href="/community" className="text-muted-foreground hover:text-brand transition-colors">커뮤니티</Link>    
          <Link href="/team" className="text-muted-foreground hover:text-brand transition-colors">만든이들</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/login" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            로그인
          </Link>
          <Button className="bg-brand text-black hover:bg-brand-hover font-semibold shadow-[0_0_20px_rgba(244,202,68,0.2)] hover:shadow-[0_0_30px_rgba(244,202,68,0.4)] transition-all duration-300">
            시작하기
          </Button>
        </div>
      </div>
    </header>
  )
}