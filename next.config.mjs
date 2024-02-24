/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: basePath,
    images: {
        unoptimized: true,
        domains: ['avatars.githubusercontent.com'],
    },
};

export default nextConfig;
