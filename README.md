# NotionTalk Landing Page

NotionTalk 공식 랜딩 페이지 - 노션 자기화부터 자동화까지

## 🎯 프로젝트 개요

이 프로젝트는 NotionTalk의 메인 랜딩 페이지로, 11가지 필수 랜딩 페이지 요소를 모두 포함한 **기능 완성형 구조**입니다.

### 포함된 11가지 필수 요소

1. ✅ **SEO 최적화 URL** - `/community`, `/templates`, `/automation`, `/blog`, `/courses`
2. ✅ **로고** - Header에 NotionTalk 로고 배치
3. ✅ **SEO 최적화 제목/부제** - Hero 섹션의 메인 카피
4. ✅ **Primary CTA** - Hero의 "무료로 시작하기" 버튼
5. ✅ **소셜 프루프** - 1,100명 회원, 공식 앰버서더 배지
6. ✅ **이미지/비디오** - MediaSection (placeholder 포함)
7. ✅ **핵심 혜택** - Benefits 섹션 (6개 카드)
8. ✅ **고객 후기** - Testimonials 섹션 (6개 placeholder)
9. ✅ **FAQ** - Accordion UI로 8개 질문
10. ✅ **Final CTA** - 하단 전환 섹션
11. ✅ **Footer** - 연락처, SNS 링크, 협업 폼

## 🛠 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI (Radix UI 기반)
- **Icons**: Lucide React

## 📦 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
notiontalk-landing-v2/
├── app/
│   ├── layout.tsx          # SEO 메타데이터, 루트 레이아웃
│   ├── page.tsx            # 메인 랜딩 페이지
│   └── globals.css         # 글로벌 스타일
├── components/
│   ├── ui/                 # ShadCN UI 컴포넌트
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   └── input.tsx
│   ├── Header.tsx          # 헤더 (로고, 네비게이션)
│   ├── Hero.tsx            # Hero 섹션
│   ├── GetStarted.tsx      # 시작하기 선택 섹션
│   ├── MediaSection.tsx    # 이미지/비디오 섹션
│   ├── Benefits.tsx        # 핵심 혜택 섹션
│   ├── Testimonials.tsx    # 고객 후기 섹션
│   ├── FAQ.tsx             # FAQ 섹션
│   ├── FinalCTA.tsx        # 최종 CTA 섹션
│   └── Footer.tsx          # Footer (협업 폼 포함)
├── lib/
│   └── utils.ts            # 유틸리티 함수
└── public/                 # 정적 파일 (이미지 등)
```

## 🎨 브랜드 컬러

- **Primary Brand Color**: `#f4ca44` (브랜드 옐로우)
- **Dark Background**: 다크 계열 (tailwind dark mode)

## ✏️ 커스터마이징 가이드

### 텍스트 콘텐츠 수정

1. **Hero 섹션 카피**: `components/Hero.tsx`
2. **혜택 설명**: `components/Benefits.tsx`
3. **FAQ**: `components/FAQ.tsx`

### 실제 후기 추가

`components/Testimonials.tsx`의 `testimonials` 배열을 실제 고객 후기로 교체:

```typescript
{
  name: "실제 이름",
  role: "역할",
  image: "/testimonials/실제이미지.jpg",
  content: "실제 후기 내용",
  rating: 5
}
```

### 이미지/비디오 추가

1. 이미지를 `public/` 폴더에 추가
2. `components/MediaSection.tsx`에서 placeholder를 실제 이미지로 교체
3. Next.js `Image` 컴포넌트 사용 권장:

```tsx
import Image from "next/image"

<Image 
  src="/images/demo.jpg" 
  alt="설명"
  width={800}
  height={600}
  priority // 첫 화면이면 추가
/>
```

### 협업 폼 연동

`components/Footer.tsx`의 협업 폼을 실제 폼 서비스와 연동:
- Google Forms
- Tally
- Typeform
- 또는 자체 API 엔드포인트

## 🎯 다음 단계: 디자인 적용

이 프로젝트는 **기능 완성형 구조**로 제작되었습니다. 다음 단계는:

### 프론트엔드 디자인 AI에게 전달할 내용

1. **현재 상태**: 모든 기능과 콘텐츠가 작동하는 프로토타입
2. **필요 작업**: Tailwind CSS 클래스 수정으로 디자인 개선
3. **브랜드 가이드**:
   - 메인 컬러: `#f4ca44`
   - 배경: 다크 계열의 세련된 톤
   - 폰트: Inter (현재 적용됨)
4. **참고 사항**:
   - 컴포넌트 구조는 유지
   - className만 수정하여 스타일 변경
   - 반응형은 이미 구현됨 (sm, md, lg 브레이크포인트)

### 디자인 AI에게 요청할 사항

- 섹션별 여백과 간격 조정
- 타이포그래피 개선 (크기, 굵기, 행간)
- 색상 팔레트 적용 (브랜드 컬러 기반)
- 호버 효과와 인터랙션 추가
- 그림자와 테두리 스타일링
- 카드 디자인 고급화
- 애니메이션 효과 추가 (선택사항)

## 📝 체크리스트

### 콘텐츠 업데이트 필요
- [ ] Hero 섹션 최종 카피 확정
- [ ] 실제 고객 후기 6개 추가
- [ ] 이미지/비디오 소스 준비 및 업로드
- [ ] SNS 링크 URL 업데이트
- [ ] 협업 폼 연동
- [ ] 이메일 주소 업데이트

### 기술적 개선 (선택사항)
- [ ] 이미지 최적화 (WebP 변환)
- [ ] 로딩 스피너 추가
- [ ] 폼 유효성 검증
- [ ] Google Analytics 연동
- [ ] 404 페이지 생성
- [ ] 각 서비스 페이지 생성 (/community, /templates 등)

## 🚀 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 기타 플랫폼
- Netlify
- AWS Amplify
- Cloudflare Pages

## 📞 문의

프로젝트 관련 문의: contact@notiontalk.com

---

**만든이**: NotionTalk  
**라이센스**: Private
