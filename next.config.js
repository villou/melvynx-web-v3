/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/dev-res',
        destination: '/dev-debutant-ressource',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
