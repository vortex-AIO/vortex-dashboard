"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import kazu from "../../../../public/kaxu.png"
import UserMenu from "./UserMenu"

interface NavbarProps {
    children?: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    const pathname = usePathname()
    const routes = useMemo(
        () => [
            {
                label: "Home",
                destination: "/",
                isActive: pathname === "/"
            },
            {
                label: "Commands",
                destination: "/commands",
                isActive: pathname === "/commands"
            },
            {
                label: "Story",
                destination: "/story",
                isActive: pathname === "/story"
            },
            {
                label: "Timeline",
                destination: "/timeline",
                isActive: pathname === "/timeline"
            }
        ],
        [pathname]
    )

    return (
        <header className="archive-header">
            <div className="archive-header-inner">
                <Link href="/" className="archive-brand" aria-label="Vortex home">
                    <Image
                        src={kazu}
                        alt=""
                        width={38}
                        height={38}
                        className="rounded-xl"
                    />
                    <span>vortex<span className="archive-brand-period">.</span></span>
                </Link>
                <nav className="archive-nav-links" aria-label="Main navigation">
                    {routes.map(item => (
                        <Link
                            key={item.label}
                            href={item.destination}
                            className={`archive-nav-link${item.isActive ? " is-active" : ""}`}
                            aria-current={item.isActive ? "page" : undefined}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <UserMenu />
            </div>
        </header>
    )
}

export default Navbar
