/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Prevents build errors when CSR pages lack Suspense boundaries
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

module.exports = nextConfig
