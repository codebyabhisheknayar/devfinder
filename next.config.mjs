/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: '.',
    distDir: 'dist',
    assetPrefix: ".",
    images: {
        unoptimized: true,
        domains: ['avatars.githubusercontent.com'],
    },
};

export default nextConfig;
