import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "노션을 처음 써보는데 괜찮을까요?",
    a: "네, 기초 강의부터 준비되어 있어 누구나 쉽게 시작할 수 있습니다."
  },
  {
    q: "템플릿은 평생 소장인가요?",
    a: "네, 한 번 구매하거나 복제한 템플릿은 영구적으로 사용 가능합니다."
  },
  {
    q: "환불 정책은 어떻게 되나요?",
    a: "디지털 콘텐츠 특성상 구매 후 7일 이내 미사용 시에만 환불이 가능합니다."
  },
  {
    q: "커뮤니티 활동은 필수인가요?",
    a: "아니요, 눈팅만 하셔도 됩니다. 하지만 함께하면 더 빨리 성장할 수 있어요!"
  }
]

export default function FAQ() {
  return (
    <section className="py-24 container max-w-3xl">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">자주 묻는 질문</h2>
      
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border border-white/10 rounded-lg px-6 bg-white/5 data-[state=open]:border-brand/30 data-[state=open]:bg-white/10 transition-all">
            <AccordionTrigger className="text-lg hover:no-underline hover:text-brand py-6 font-medium text-left">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}