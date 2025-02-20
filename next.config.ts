/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  distDir: "out", // Output folder (default for `next export`)
  images: {
    unoptimized: true, // Disable Next.js image optimization (not supported on GitHub Pages)
  },
  basePath: "/auth_", // Set base path to match GitHub Pages repo name
  assetPrefix: "/auth_", // Ensures assets load correctly
};

module.exports = nextConfig;
