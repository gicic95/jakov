/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "api.jakov.rs",
      },
      {
        hostname: "api.ecommerce.smartofficemanager.com",
      },
      {
        hostname: "verify.etrustmark.rs",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
