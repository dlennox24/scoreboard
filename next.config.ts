/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: 'build',
  output: 'export',
  trailingSlash: true,
  reactStrictMode: false,
  webpack: (config: { module: { rules: { test: RegExp; use: string }[] } }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};

export default nextConfig;
