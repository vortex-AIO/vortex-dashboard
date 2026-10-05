/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    images: {
        unoptimized: true,
        domains: ["i.imgur.com", "cdn.kazu.bot"]
    },
}

export default nextConfig;