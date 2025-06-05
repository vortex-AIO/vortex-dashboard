import type { Metadata, Viewport } from "next"
import "../../styles/globals.css"

export const viewport: Viewport = {
    themeColor: "transparent"
}

export const metadata: Metadata = {
    title: "vortex",
    description:
        "Vortex, an all-in-one Discord Bot designed to manage and elevate your Discord Server experience.",
    twitter: {
        site: "https://vortex.bot/",
        card: "player"
    },
    openGraph: {
        url: "https://playfairs.cc.cc/",
        type: "website",
        title: "vortex",
        siteName: "vortex",
        description:
            "Vortex, an all-in-one Discord Bot designed to manage and elevate your Discord Server experience.",
        images: [
            {
                url: "https://www.playfairs.cc/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkazu.0e5e847e.png&w=384&q=75",
                width: 500,
                height: 500,
                alt: "vortex"
            }
        ]
    }
}

export default function vortexMain({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`bg-vortex-100 font-satoshi`}>{children}</body>
        </html>
    )
}
