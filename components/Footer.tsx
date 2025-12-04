import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-[#1B2030] mb-4">NotionTalk</h3>
            <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">
              노션의 모든 가능성을 연구하고 공유하는 커뮤니티입니다. 
              개인의 생산성 향상부터 팀의 업무 자동화까지 함께합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#1B2030] transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-[#1B2030] transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-[#1B2030] transition-colors">YouTube</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-[#1B2030] mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-hover transition-colors">템플릿 갤러리</a></li>
              <li><a href="#" className="hover:text-brand-hover transition-colors">온라인 강의</a></li>
              <li><a href="#" className="hover:text-brand-hover transition-colors">커뮤니티</a></li>
              <li><a href="#" className="hover:text-brand-hover transition-colors">컨설팅 문의</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[#1B2030] mb-4">뉴스레터 구독</h4>
            <form className="space-y-2">
              <Input placeholder="이메일 주소" className="bg-gray-50 border-gray-200 focus:border-brand focus:ring-brand text-black" />
              <Button className="w-full bg-[#1B2030] hover:bg-black text-white transition-colors">
                구독하기
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 NotionTalk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}