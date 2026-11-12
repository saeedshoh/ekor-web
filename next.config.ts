import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Самодостаточная сборка для Docker-образа (server.js + минимум node_modules)
  output: 'standalone',
  poweredByHeader: false,
  // Браузер ходит на /api своего домена, Next проксирует в бэкенд — CORS не нужен
  async rewrites() {
    return [{ source: '/api/:path*', destination: `${process.env.API_ORIGIN || 'http://46.8.71.194:8000'}/api/:path*` }];
  },
};

export default nextConfig;
