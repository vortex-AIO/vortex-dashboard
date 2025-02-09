import type { Metadata, Viewport } from "next"
import "../../styles/globals.css"

export const viewport: Viewport = {
    themeColor: "transparent"
}

export const metadata: Metadata = {
    title: "kazu",
    description: "The only aesthetic multi-functional discord bot you need.",
    twitter: {
        site: "https://kazu.bot/",
        card: "player"
    },
    openGraph: {
        url: "https://kazu.bot/",
        type: "website",
        title: "kazu",
        siteName: "kazu.bot",
        description: "The only aesthetic multi-functional discord bot you need.",
        images: [
            {
                url: "https://cdn.kazu.bot/kazu.png",
                width: 500,
                height: 500,
                alt: "kazu"
            }
        ]
    }
}

export default function kazuMain({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`bg-kazu-100 font-satoshi`}>{children}</body>
        </html>
    )
}
