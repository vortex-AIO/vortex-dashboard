import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
    themeColor: "transparent"
}

export const metadata: Metadata = {
    title: "heresy",
    description: "The only aesthetic multi-functional discord bot you need.",
    twitter: {
        site: "https://heresy.vercel.app/",
        card: "player"
    },
    openGraph: {
        url: "https://heresy.vercel.app/",
        type: "website",
        title: "heresy",
        siteName: "heresy.bot",
        description: "The only aesthetic multi-functional discord bot you need.",
        images: [
            {
                url: "https://cdn.kazu.bot/kazu.png",
                width: 500,
                height: 500,
                alt: "heresy"
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
