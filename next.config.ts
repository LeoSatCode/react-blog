import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.postimg.cc"],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
