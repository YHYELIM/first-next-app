/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  // output: 'export', // 정적 HTML 내보내기 활성화
  images: {
    unoptimized: true, // 정적 내보내기와 함께 사용하려면 필요
  },
  trailingSlash: true, // 모바일 호환성을 위해 권장
  // Capacitor에서는 기본 경로가 필요할 수 있음
  basePath: '',
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
