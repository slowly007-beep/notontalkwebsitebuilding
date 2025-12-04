import { Play } from "lucide-react"

export default function MediaSection() {
  return (
    <section className="py-20 container">
      <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-2">
        <div className="aspect-video relative rounded-xl overflow-hidden bg-gray-900/50 group">
          {/* 배경 효과 */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-80" />
          
          {/* 중앙 플레이 버튼 및 콘텐츠 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-brand blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative h-20 w-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Play className="h-8 w-8 text-brand ml-1 fill-brand" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
             <h3 className="text-2xl font-bold text-white mb-2">NotionTalk 소개</h3>
             <p className="text-muted-foreground">노션으로 일하는 방식의 변화를 경험하세요</p>
          </div>
        </div>
      </div>
    </section>
  )
}