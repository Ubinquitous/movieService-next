const API_KEY = `f5eef3421c602c6cb7ea224104795888&targetDt=20120101`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/redirect/:path*',
        destination: 'newRedirect/:path*',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${API_KEY}`
      }
    ];
  },
}

module.exports = nextConfig
