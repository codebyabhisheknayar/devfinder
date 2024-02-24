/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    images: {
        unoptimized: true,
        domains: ['avatars.githubusercontent.com'],
    },
};

export default nextConfig;
