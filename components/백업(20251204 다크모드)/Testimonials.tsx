import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "김노션",
    role: "프리랜서 디자이너",
    content: "노션톡 템플릿 덕분에 업무 효율이 200% 올랐습니다. 정말 감사합니다!",
    rating: 5,
  },
  {
    name: "이생산",
    role: "스타트업 PM",
    content: "커뮤니티에서 얻은 자동화 팁들이 실무에 큰 도움이 되었습니다.",
    rating: 5,
  },
  {
    name: "박기록",
    role: "대학생",
    content: "강의가 정말 체계적이에요. 노션 초보자에게 강력 추천합니다.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          유저들의 생생한 후기
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <Card key={idx} className="glass border-white/5 bg-gradient-to-br from-white/5 to-transparent hover:border-brand/20 transition-colors">
              <CardContent className="p-8">
                <div className="flex space-x-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand text-brand" />
                  ))}
                </div>
                <p className="text-lg mb-8 text-gray-300 leading-relaxed">"{item.content}"</p>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12 ring-2 ring-brand/20">
                    <AvatarImage src={`/avatars/${idx}.png`} />
                    <AvatarFallback className="bg-brand text-black font-bold">
                      {item.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}