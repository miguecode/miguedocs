import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs/artificial-intelligence/inteligencia-Artificial-en-desarrollo',
        destination: '/docs/artificial-intelligence/ia-en-el-desarrollo',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
