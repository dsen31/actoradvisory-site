import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ebwtcbfupujwmgmrnzwp.supabase.co",
        pathname: "/storage/v1/object/public/Assets/**",
      },
    ],
  },
};

export default nextConfig;
