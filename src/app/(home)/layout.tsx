import type { Metadata, Viewport } from "next"
import "../../styles/globals.css"

export const viewport: Viewport = {
    themeColor: "transparent"
}

export const metadata: Metadata = {
    title: "vortex",
    description: "The only aesthetic multi-functional discord bot you need.",
    twitter: {
        site: "https://vortex.bot/",
        card: "player"
    },
    openGraph: {
        url: "https://playfairs.cc.cc/",
        type: "website",
        title: "playfairs.cc",
        siteName: "playfairs.cc.cc",
        description: "The only aesthetic multi-functional discord bot you need.",
        images: [
            {
                url: "/vortex.png",
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
