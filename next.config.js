/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 1. [필수] 사이트 주소 끝에 무조건 슬래시(/)를 붙입니다.
  // (불렛과의 연결 호환성 및 무한 로딩 방지용)
  trailingSlash: true,

  // 2. [속도 향상] 캐시 설정 (기억력 높이기)
  async headers() {
    // 캐시 규칙: 60초간 저장(빠름), 10분간은 옛날 거 보여주며 백그라운드 업데이트
    const cacheHeaders = [
      {
        key: 'Cache-Control',
        value: 'public, s-maxage=60, stale-while-revalidate=600',
      },
    ];

    return [
      // 각 메뉴별로 캐시 규칙 적용
      { source: '/guide/:path*', headers: cacheHeaders },
      { source: '/templates/:path*', headers: cacheHeaders },
      { source: '/automation/:path*', headers: cacheHeaders },
      { source: '/community/:path*', headers: cacheHeaders },
      { source: '/team/:path*', headers: cacheHeaders },
    ];
  },

  // 3. [경로 연결] 리라이트 설정 (불렛으로 토스)
  async rewrites() {
    return [
      // ==============================================
      // 1. 가이드 (Guide)
      // ==============================================
      {
        source: '/guide',
        destination: 'https://content.notiontalk.com/guide/',
      },
      {
        source: '/guide/:slug*',
        destination: 'https://content.notiontalk.com/guide/:slug*/',
      },

      // ==============================================
      // 2. 템플릿 (Templates)
      // ==============================================
      {
        source: '/templates',
        destination: 'https://content.notiontalk.com/templates/',
      },
      {
        source: '/templates/:slug*',
        destination: 'https://content.notiontalk.com/templates/:slug*/',
      },

      // ==============================================
      // 3. 자동화 (Automation)
      // ==============================================
      {
        source: '/automation',
        destination: 'https://content.notiontalk.com/automation/',
      },
      {
        source: '/automation/:slug*',
        destination: 'https://content.notiontalk.com/automation/:slug*/',
      },

      // ==============================================
      // 4. 커뮤니티 (Community)
      // ==============================================
      {
        source: '/community',
        destination: 'https://content.notiontalk.com/community/',
      },
      {
        source: '/community/:slug*',
        destination: 'https://content.notiontalk.com/community/:slug*/',
      },

      // ==============================================
      // 5. 팀 (Team)
      // ==============================================
      {
        source: '/team',
        destination: 'https://content.notiontalk.com/team/',
      },
      {
        source: '/team/:slug*',
        destination: 'https://content.notiontalk.com/team/:slug*/',
      },
    ];
  },
};

module.exports = nextConfig;