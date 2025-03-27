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
  // Configure for App Router
  experimental: {
    appDir: true,
    serverActions: false,
  },
  // Disable pages directory
  useFileSystemPublicRoutes: false,
};

export default nextConfig; 