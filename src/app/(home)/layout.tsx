import type { Metadata, Viewport } from "next"
import "../../styles/globals.css"

export const viewport: Viewport = {
    themeColor: "transparent"
}

export const metadata: Metadata = {
    title: "heresy",
    description: "The only aesthetic multi-functional discord bot you need.",
    twitter: {
        site: "https://heresy.bot/",
        card: "player"
    },
    openGraph: {
        url: "https://heresy.cc/",
        type: "website",
        title: "heresy",
        siteName: "heresy.cc",
        description: "The only aesthetic multi-functional discord bot you need.",
        images: [
            {
                url: "/heresy.png",
                width: 500,
                height: 500,
                alt: "heresy"
            }
        ]
    }
}

export default function heresyMain({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`bg-heresy-100 font-satoshi`}>{children}</body>
        </html>
    )
}
