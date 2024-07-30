/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
