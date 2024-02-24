/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    distDir: 'docs',
    assetPrefix: "https://codebyabhisheknayar.github.io/devfinder",
    images: {
        unoptimized: true,
        domains: ['avatars.githubusercontent.com'],
    },
};

export default nextConfig;
