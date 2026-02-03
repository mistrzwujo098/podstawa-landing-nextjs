/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/matura',
  assetPrefix: '/matura',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
