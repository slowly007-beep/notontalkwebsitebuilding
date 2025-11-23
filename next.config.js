/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // 1. 가이드 페이지 (메인)
      {
        source: '/guide',
        destination: 'https://content.notiontalk.com/guide',
      },
      // 2. 가이드 하위 페이지들 (예: /guide/post-1)
      {
        source: '/guide/:path*',
        destination: 'https://content.notiontalk.com/guide/:path*',
      },
      // 3. 커뮤니티 페이지 (메인)
      {
        source: '/community',
        destination: 'https://content.notiontalk.com/community',
      },
      // 4. 커뮤니티 하위 페이지들
      {
        source: '/community/:path*',
        destination: 'https://content.notiontalk.com/community/:path*',
      },
    ]
  },
}

module.exports = nextConfig