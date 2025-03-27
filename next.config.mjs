/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Disable problematic features for static export
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
  // Disable server-side features
  experimental: {
    appDir: true,
    serverActions: false,
  },
  // Ensure we're using the correct document
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default nextConfig; 