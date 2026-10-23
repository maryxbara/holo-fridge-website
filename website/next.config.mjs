/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // WebP only — AVIF encode of hero-home.jpg hangs on Render's sharp/libvips
    // build, so browsers that prefer AVIF get a blank phone mockup.
    formats: ["image/webp"],
  },
};

export default nextConfig;
