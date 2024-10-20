/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: "custom",
        loaderFile: './imgLoader.js',
    },
};

export default nextConfig;
