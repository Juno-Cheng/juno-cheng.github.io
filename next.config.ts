// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/juno-cheng.github.io", // Adjusted for GitHub Pages
  output: "export", // Ensures static export for GitHub Pages
  images: {
    unoptimized: true, // Ensures images work correctly on GitHub Pages
  },
  webpack(config) {
    // Add SVGR loader to handle SVG imports as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
