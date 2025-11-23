import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-center px-12">
        {/* 로고만 중앙 배치 */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-brand/10 p-2 rounded-lg group-hover:bg-brand/20 transition-colors">
            <BookOpen className="h-5 w-5 text-brand" /> 
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-foreground">NotionTalk</span>
        </Link>
      </div>
    </header>
  )
}