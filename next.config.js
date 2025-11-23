/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // ★ 핵심 해결책: 모든 주소 끝에 자동으로 '/'를 붙여줍니다.
  // 이렇게 하면 Vercel과 불렛 사이의 주소 오해를 없앨 수 있습니다.
  trailingSlash: false, 

  async rewrites() {
    return [
      // 1. 가이드
      {
        source: '/guide',
        destination: 'https://content.notiontalk.com/guide/', // 뒤에 / 붙임
      },
      {
        source: '/guide/:path*',
        destination: 'https://content.notiontalk.com/guide/:path*',
      },

      // 2. 템플릿
      {
        source: '/templates',
        destination: 'https://content.notiontalk.com/templates/', // 뒤에 / 붙임
      },
      {
        source: '/templates/:path*',
        destination: 'https://content.notiontalk.com/templates/:path*',
      },

      // 3. 자동화
      {
        source: '/automation',
        destination: 'https://content.notiontalk.com/automation/', // 뒤에 / 붙임
      },
      {
        source: '/automation/:path*',
        destination: 'https://content.notiontalk.com/automation/:path*',
      },

      // 4. 커뮤니티
      {
        source: '/community',
        destination: 'https://content.notiontalk.com/community/', // 뒤에 / 붙임
      },
      {
        source: '/community/:path*',
        destination: 'https://content.notiontalk.com/community/:path*',
      },

      // 5. 팀
      {
        source: '/team',
        destination: 'https://content.notiontalk.com/team/', // 뒤에 / 붙임
      },
      {
        source: '/team/:path*',
        destination: 'https://content.notiontalk.com/team/:path*',
      },
    ];
  },
};

module.exports = nextConfig;