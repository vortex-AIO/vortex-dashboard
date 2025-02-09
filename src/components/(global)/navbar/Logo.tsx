"use client"

import Image from "next/image"

const Logo = () => {
    return (
        <Image
            src="/logo.jpg"
            alt="Logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-12 h-auto rounded-full"
        />
    )
}

export default Logo
