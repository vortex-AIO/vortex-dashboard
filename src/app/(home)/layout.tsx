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
                url: "https://vortex.playfairs.cc/kazu.png",
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
        <div className="home-lander min-h-screen font-satoshi">{children}</div>
    )
}
