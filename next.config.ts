import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otimização de imagens - Otimizado para mobile
  images: {
    formats: ["image/avif", "image/webp"],
    // Reduzido deviceSizes para mobile: removidos tamanhos muito grandes (2048, 3840)
    // Mobile geralmente não precisa de imagens maiores que 1200px
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Otimizado imageSizes para reduzir variações desnecessárias
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 ano para imagens
    // Desabilita otimização de imagens estáticas pequenas (melhora performance)
    dangerouslyAllowSVG: false,
  },
  // Compressão
  compress: true,
  // Headers de segurança e performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Accept-CH",
            value: "DPR, Viewport-Width, Width",
          },
        ],
      },
      {
        // Cache headers para HTML (páginas)
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Cache headers para outras páginas HTML
        source: "/:path",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Cache headers para assets estáticos
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache headers para imagens
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache headers para fontes
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
