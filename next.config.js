/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 1. [필수] 사이트 주소 끝에 무조건 슬래시를 붙입니다. (불렛과 규칙 통일)
  trailingSlash: true,

  async rewrites() {
    return [
      // ==============================================
      // 1. 템플릿 (Templates)
      // ==============================================
      {
        // 사용자가 /templates 로 들어오면
        source: '/templates',
        // 불렛의 /templates/ 로 연결 (슬래시 필수!)
        destination: 'https://content.notiontalk.com/templates/', 
      },
      {
        // 사용자가 /templates/제목 으로 들어오면
        source: '/templates/:slug*',
        // 불렛의 /templates/제목/ 으로 연결 (★여기가 핵심! 뒤에 슬래시 추가★)
        destination: 'https://content.notiontalk.com/templates/:slug*/', 
      },

      // ==============================================
      // 2. 가이드 (Guide)
      // ==============================================
      {
        source: '/guide',
        destination: 'https://content.notiontalk.com/guide/',
      },
      {
        source: '/guide/:slug*',
        destination: 'https://content.notiontalk.com/guide/:slug*/', // 여기도 슬래시 추가
      },

      // ==============================================
      // 3. 커뮤니티, 팀 등 나머지
      // ==============================================
      {
        source: '/community',
        destination: 'https://content.notiontalk.com/community/',
      },
      {
        source: '/community/:slug*',
        destination: 'https://content.notiontalk.com/community/:slug*/',
      },
      // 필요한 만큼 추가하세요
    ];
  },
};

module.exports = nextConfig;