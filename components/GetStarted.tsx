import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Zap, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: <Users className="h-8 w-8 text-[#1B2030]" />,
    title: "커뮤니티 참여",
    desc: "1,100+명의 노션 유저들과 함께 성장하세요.",
    action: "참여하기"
  },
  {
    icon: <Zap className="h-8 w-8 text-[#1B2030]" />,
    title: "템플릿 복제",
    desc: "검증된 고퀄리티 템플릿을 즉시 사용하세요.",
    action: "템플릿 보기"
  },
  {
    icon: <BookOpen className="h-8 w-8 text-[#1B2030]" />,
    title: "강의 수강",
    desc: "기초부터 마스터까지 체계적으로 배우세요.",
    action: "강의실 입장"
  }
]

export default function GetStarted() {
  return (
    <section className="py-24 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-[#1B2030]">어떻게 시작할까요?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            가장 필요한 것부터 선택하세요. NotionTalk이 도와드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <Card key={idx} className="bg-white/60 backdrop-blur-xl border border-white/60 hover:border-brand/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] group">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <CardTitle className="text-2xl mb-2 text-[#1B2030]">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {step.desc}
                </p>
                <Button variant="link" className="p-0 text-[#1B2030] font-bold group-hover:translate-x-2 transition-transform">
                  {step.action} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}