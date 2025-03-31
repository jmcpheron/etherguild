const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isStaticExport ? 'export' : undefined,
  distDir: isStaticExport ? 'out' : '.next',
  images: isStaticExport ? {
    unoptimized: true,
  } : {},
  // In static export mode, we need to exclude API routes
  exportPathMap: async function (defaultPathMap) {
    if (isStaticExport) {
      // Filter out API routes
      const filteredMap = {};
      for (const [path, page] of Object.entries(defaultPathMap)) {
        if (!path.startsWith('/api/')) {
          filteredMap[path] = page;
        }
      }
      return filteredMap;
    }
    return defaultPathMap;
  },
  // These won't work in static export, but kept for non-static builds
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/sdCzcnMHVb",
        permanent: true,
      },
    ];
  },
  // Disable API routes in static export
  rewrites: async () => {
    if (isStaticExport) {
      return {
        beforeFiles: [
          {
            source: '/api/:path*',
            destination: '/404',
          }
        ]
      };
    }
    return [];
  }
};

module.exports = nextConfig;
