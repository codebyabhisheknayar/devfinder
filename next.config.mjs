/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/docs',
    distDir: 'docs',
    images: {
        unoptimized: true,
        domains: ['avatars.githubusercontent.com'],
    },
};

export default nextConfig;
