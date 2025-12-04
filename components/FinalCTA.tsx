import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-24 container">
      <Card className="relative overflow-hidden border-none bg-brand shadow-[0_20px_50px_rgba(244,202,68,0.3)] rounded-[2rem]">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-yellow-400 to-orange-400"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

        <CardContent className="relative z-10 flex flex-col items-center text-center p-16 md:p-24 space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-[#1B2030] tracking-tight">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-[#1B2030]/80 max-w-2xl font-medium">
            고민하는 시간에도 다른 사람들은 성장하고 있습니다.<br />
            NotionTalk과 함께 생산성의 한계를 뛰어넘으세요.
          </p>
          <Button size="lg" className="h-14 px-10 bg-[#1B2030] text-white hover:bg-black text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent">
            무료로 시작하기 <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}