// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com',
      'source.unsplash.com',
      'images.pexels.com',
      // Add more hostnames here if needed
    ],
  },
};

export default nextConfig;
