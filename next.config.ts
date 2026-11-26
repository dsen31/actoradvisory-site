import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/resources.html": ["./app/resources-content.html"],
    "/resources/your-team-has-ai-tools": ["./app/ai-adoption-article.html"],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ebwtcbfupujwmgmrnzwp.supabase.co",
        pathname: "/storage/v1/object/public/Assets/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [{ source: "/", destination: "/index.html" }];
  },
};

export default nextConfig;
