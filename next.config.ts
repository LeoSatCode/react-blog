import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Se desejar manter o modo estrito
  images: {
    domains: ["i.postimg.cc"] // Adicione aqui o domínio permitido
  },
};

export default nextConfig;
