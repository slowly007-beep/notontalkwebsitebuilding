/* [수정 사항]
  모든 import 경로에서 '/ui'를 제거했습니다.
  예: "@/components/ui/Header" -> "@/components/Header"
*/

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MediaSection from "@/components/MediaSection";
import Benefits from "@/components/Benefits";
import GetStarted from "@/components/GetStarted";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

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