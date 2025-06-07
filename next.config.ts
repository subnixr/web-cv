import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // SSG for static hosting
    output: 'export',
    images: {
        unoptimized: true,
    },
    // end of SSG export options
};

export default nextConfig;
