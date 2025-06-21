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
        unoptimized: true
        // domains: ["i.imgur.com", "cdn.kazu.bot"]
    },
    matcher: ["/((?!_next|favicon.ico).*)"]
}

export default nextConfig;