/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      // 1. 가이드 (Guide)
      {
        source: '/guide',
        destination: 'https://content.notiontalk.com/guide',
      },
      {
        source: '/guide/:path*',
        destination: 'https://content.notiontalk.com/guide/:path*',
      },

      // 2. 템플릿 (Templates)
      {
        source: '/templates',
        destination: 'https://content.notiontalk.com/templates',
      },
      {
        source: '/templates/:path*',
        destination: 'https://content.notiontalk.com/templates/:path*',
      },

      // 3. 자동화 (Automation)
      {
        source: '/automation',
        destination: 'https://content.notiontalk.com/automation',
      },
      {
        source: '/automation/:path*',
        destination: 'https://content.notiontalk.com/automation/:path*',
      },

      // 4. 커뮤니티 (Community)
      {
        source: '/community',
        destination: 'https://content.notiontalk.com/community',
      },
      {
        source: '/community/:path*',
        destination: 'https://content.notiontalk.com/community/:path*',
      },

      // 5. 팀 (Team)
      {
        source: '/team',
        destination: 'https://content.notiontalk.com/team',
      },
      {
        source: '/team/:path*',
        destination: 'https://content.notiontalk.com/team/:path*',
      },
    ];
  },
};

module.exports = nextConfig;