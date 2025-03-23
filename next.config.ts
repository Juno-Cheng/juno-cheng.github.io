import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export for GitHub Pages
  basePath: '/juno-cheng.github.io', 
  images: {
    unoptimized: true, // Disables Image Optimization API (required for static export)
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