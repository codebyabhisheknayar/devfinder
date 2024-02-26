/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production'
const nextConfig = {
    output: 'export',
    distDir: 'docs',
    assetPrefix: prod ? 'https://codebyabhisheknayar.github.io/devfinder' : '',
    images: {
        unoptimized: true,
        domains: ['avatars.githubusercontent.com'],
    },
};

export default nextConfig;
