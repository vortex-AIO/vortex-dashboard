/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: "/",
                destination: "/index.html"
            }
        ]
    },
    images: {
        domains: ["i.imgur.com", "cdn.kazu.bot"]
    }
}

export default nextConfig
