import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/vathys.github.com",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
