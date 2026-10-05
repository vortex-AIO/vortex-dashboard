import { Footer } from "@/components/(global)/Footer"
import Navbar from "@/components/(global)/navbar/Navbar"
import type { Metadata, Viewport } from "next"
import { Manrope } from "next/font/google"

const manrope = Manrope({ subsets: ["latin"] })

export const viewport: Viewport = {
    themeColor: "transparent"
}

export const metadata: Metadata = {
    title: "vortex",
    description:
        "Vortex, an all-in-one Discord Bot designed to manage and elevate your Discord Server experience.",
    twitter: {
        site: "https://vortex.playfairs.cc",
        card: "player"
    },
    openGraph: {
        url: "https://vortex.playfairs.cc",
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

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="archive-site flex min-h-screen flex-col">
            <Navbar />
            <main className="archive-main flex-1">{children}</main>
            <Footer />
        </div>
    )
}
