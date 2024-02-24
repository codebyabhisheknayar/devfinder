/** @type {import('next').NextConfig} */

const isGithubActions = process.env.ACTIONS || false;
const repo = isGithubActions ? process.env.REPOSITORY.replace(/.*?\//, "") : "";

const assetPrefix = isGithubActions ? `/${repo}/` : "";
const basePath = isGithubActions ? `/${repo}` : "";

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    assetPrefix: assetPrefix,
    basePath: basePath,
    distDir: 'docs',
    images: {
        unoptimized: true,
        domains: ['avatars.githubusercontent.com'],
    },
};

export default nextConfig;
