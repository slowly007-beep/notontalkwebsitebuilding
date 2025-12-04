import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Layers, Zap, Target, Share2, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"

const benefits = [
  {
    icon: <Layers className="h-6 w-6" />,
    title: "올인원 워크스페이스",
    desc: "문서, 데이터베이스, 협업을 한 곳에서 관리하세요.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "초고속 동기화",
    desc: "모든 기기에서 실시간으로 데이터가 동기화됩니다.",
    className: "md:col-span-1",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "목표 관리",
    desc: "OKR과 프로젝트 진행상황을 시각적으로 추적하세요.",
    className: "md:col-span-1",
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "간편한 공유",
    desc: "링크 하나로 웹사이트처럼 페이지를 공유하세요.",
    className: "md:col-span-1",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "모바일 최적화",
    desc: "이동 중에도 완벽한 편집 경험을 제공합니다.",
    className: "md:col-span-1",
  },
]

export default function Benefits() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-[#1B2030]">
            왜 <span className="text-brand-hover">NotionTalk</span>인가요?
          </h2>
          <p className="text-gray-600 text-lg">
            수천 명의 유저가 선택한 이유를 확인해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {benefits.map((benefit, idx) => (
            <Card 
              key={idx} 
              className={cn(
                "bg-white/40 backdrop-blur-md border border-white/60 p-6 hover:bg-white/60 transition-all duration-300 group overflow-hidden relative shadow-sm hover:shadow-lg",
                benefit.className
              )}
            >
              <CardHeader className="relative z-10 p-0 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4 text-[#1B2030] shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <CardTitle className={cn(
                    "mb-3 font-sans text-[#1B2030]",
                    benefit.className?.includes("col-span-2") ? "text-3xl" : "text-xl"
                  )}>
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {benefit.desc}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}