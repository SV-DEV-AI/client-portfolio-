import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'morphedstudios.in',
          },
        ],
        destination: 'https://www.morphedstudios.co.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
