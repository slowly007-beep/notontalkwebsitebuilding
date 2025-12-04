import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto grid h-16 w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12">
        
        {/* 1. 로고 영역 */}
        <div className="justify-self-start">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-brand/10 p-2 rounded-lg group-hover:bg-brand/20 transition-colors">
              <BookOpen className="h-5 w-5 text-black" /> 
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-[#1B2030]">NotionTalk</span>
          </Link>
        </div>

        {/* 2. 네비게이션 */}
        <nav className="hidden md:flex justify-self-center items-center space-x-9 text-[15px] font-medium">
          {["노션가이드", "템플릿", "자동화레시피", "커뮤니티", "만든이들"].map((item) => (
            <Link key={item} href={`/${item}`} className="text-gray-600 hover:text-[#1B2030] hover:font-semibold transition-all">
              {item}
            </Link>
          ))}
        </nav>

        {/* 3. 액션 버튼 */}
        <div className="flex items-center space-x-4 justify-self-end">
          <Link href="/login" className="hidden md:block text-sm font-medium text-gray-600 hover:text-black transition-colors">
            로그인
          </Link>
          <Button className="bg-[#1B2030] text-white hover:bg-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-5 rounded-xl">
            시작하기
          </Button>
          {/* 모바일 메뉴 버튼 */}
          <button className="md:hidden p-2 text-gray-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}