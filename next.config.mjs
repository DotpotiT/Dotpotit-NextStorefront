// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // Use remotePatterns instead of domains
      domains: ['res.cloudinary.com'],
    },
  };
  
  export default nextConfig;
  