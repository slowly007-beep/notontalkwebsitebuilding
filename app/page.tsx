import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import MediaSection from "@/components/ui/MediaSection";
import Benefits from "@/components/ui/Benefits";
import GetStarted from "@/components/ui/GetStarted";
import Testimonials from "@/components/ui/Testimonials";
import FAQ from "@/components/ui/FAQ";
import FinalCTA from "@/components/ui/FinalCTA";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      {/* 1. 상단 네비게이션 */}
      <Header />
      
      {/* 2. 메인 히어로 섹션 */}
      <Hero />
      
      {/* 3. 소개 영상 섹션 */}
      <MediaSection />

      {/* 4. 핵심 기능 (벤토 그리드) */}
      <Benefits />

      {/* 5. 시작하기 가이드 (카드 3개) */}
      <GetStarted />

      {/* 6. 사용자 후기 */}
      <Testimonials />

      {/* 7. 자주 묻는 질문 */}
      <FAQ />

      {/* 8. 마지막 강조 배너 */}
      <FinalCTA />
      
      {/* 9. 푸터 */}
      <Footer />
    </main>
  );
}