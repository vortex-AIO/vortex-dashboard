"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { CgClose } from "react-icons/cg"
import { MdMenu } from "react-icons/md"

const UserMenu = () => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1025) {
                setIsBurgerMenuOpen(false)
            }
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (
        <>
            {isBurgerMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 z-[50000] bg-black/70 backdrop-blur-sm"
                        onClick={() => setIsBurgerMenuOpen(false)}
                    />
                    <BurgerMenu onClose={() => setIsBurgerMenuOpen(false)} />
                </>
            )}
            <div className="archive-user-menu">
                <button
                    className="archive-menu-toggle"
                    type="button"
                    aria-label={isBurgerMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isBurgerMenuOpen}
                    onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>
                    {isBurgerMenuOpen ? <CgClose size={23} /> : <MdMenu size={25} />}
                </button>
            </div>
        </>
    )
}

const BurgerMenu = ({ onClose }: { onClose: () => void }) => {
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
            }
        ],
        [pathname]
    )
    return (
        <>
            <div             className="fixed inset-0 z-[9999999999] flex items-center justify-center px-5">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.7 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                        ease: "linear",
                        duration: 0.2
                    }}
                    className="archive-mobile-menu">
                    <div className="flex items-center justify-between gap-6 px-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">Navigate</h2>
                        <button
                            type="button"
                            className="archive-menu-close"
                            aria-label="Close navigation menu"
                            onClick={onClose}>
                            <CgClose size={23} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-2 px-4 pb-5 pt-5">
                        {routes.map(route => (
                            <Link
                                href={route.destination}
                                key={route.label}
                                onClick={onClose}
                                className={`archive-mobile-link${route.isActive ? " is-active" : ""}`}>
                                {route.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default UserMenu
