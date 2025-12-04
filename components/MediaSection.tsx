import { Play } from "lucide-react"

export default function MediaSection() {
  return (
    <section className="py-20 container">
      {/* 외부 프레임: 밝은 유리 질감 */}
      <div className="relative rounded-3xl border border-white/60 bg-white/40 backdrop-blur-md p-3 shadow-2xl shadow-brand/5">
        <div className="aspect-video relative rounded-2xl overflow-hidden bg-[#1B2030] group isolate">
          {/* 비디오 내부 배경 */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B2030] via-[#2a3045] to-black opacity-80" />
          
          {/* 플레이 버튼 */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-brand blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative h-24 w-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                <Play className="h-8 w-8 text-white ml-1 fill-white" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent z-10">
             <h3 className="text-2xl font-bold text-white mb-2">NotionTalk 소개</h3>
             <p className="text-gray-300">노션으로 일하는 방식의 변화를 경험하세요</p>
          </div>
        </div>
      </div>
    </section>
  )
}