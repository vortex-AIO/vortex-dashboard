import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
    themeColor: "transparent"
}

export const metadata: Metadata = {
    title: "vortex",
    description: "The only aesthetic multi-functional discord bot you need.",
    twitter: {
        site: "https://vortex.vercel.app/",
        card: "player"
    },
    openGraph: {
        url: "https://vortex.vercel.app/",
        type: "website",
        title: "vortex",
        siteName: "vortex.bot",
        description: "The only aesthetic multi-functional discord bot you need.",
        images: [
            {
                url: "https://cdn.kazu.bot/kazu.png",
                width: 500,
                height: 500,
                alt: "vortex"
            }
        ]
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`font-satoshi flex flex-col m-h-screen justify-between`}>
                {children}
            </body>
        </html>
    )
}
