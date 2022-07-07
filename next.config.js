/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  env: {
    daoCreatorAddress: '0xc3804990917bce66e4960ec7a036227551f8b9f4',
  },
};
module.exports = nextConfig
