import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: 'https',
        hostname: 'fedskillstest.ct.digital',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
