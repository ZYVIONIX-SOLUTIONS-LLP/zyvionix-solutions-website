import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for cPanel/public_html hosting
  output: "export",

  // Core performance flags
  reactStrictMode: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Required for static export when using next/image
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  // Optional: makes routes like /services/ generate /services/index.html
  trailingSlash: true,

  // Compiler options for production optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default nextConfig;