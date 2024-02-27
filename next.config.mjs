// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "source.unsplash.com",
      },
      {
        hostname: "images.pexels.com",
      },
    ],
  },
 
};

export default nextConfig;
