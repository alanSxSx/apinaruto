/** @type {import('next').NextConfig} */
const nextConfig = {}

const path = require('path');

module.exports = {
  // ... outras configurações ...
  images: {
    domains: ['static.wikia.nocookie.net'],
  },
  webpack: (config, { isServer }) => {
    // Para garantir que o Next.js reconheça o diretório 'app' dentro de 'src'
    if (!isServer) {
      config.resolve.modules.push(path.resolve('./src/app'));
    }

    return config;
  },
};
