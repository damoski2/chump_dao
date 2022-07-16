/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  env: {
    daoCreatorAddress: '0xc3804990917bce66e4960ec7a036227551f8b9f4',
    timelineAddress: '0x2468120D2855Ac4C081159FFD7564b3F9cE4DC7A',
    timeLineSymbol: 'TL',
    tokenDecimals: 18,
    tokenName: 'Timeline',
    tokenImage: 'https://res.cloudinary.com/oyindacodes/image/upload/v1648117644/mainLogo_syzqi8.svg'
  },
};
module.exports = nextConfig
