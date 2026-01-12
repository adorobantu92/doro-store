/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      // Add your image CDN domain here when ready
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.yourstore.ro',
      // },
    ],
  },
  // Enable static export for initial deployment (remove for dynamic features)
  // output: 'export',
}

module.exports = nextConfig
