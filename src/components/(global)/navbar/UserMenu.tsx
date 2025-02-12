"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { CgClose } from "react-icons/cg"
import { FaDiscord } from "react-icons/fa"
import { MdMenu } from "react-icons/md"

const UserMenu = () => {
    const router = useRouter()
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
                        className="fixed inset-0 bg-black bg-opacity-50 z-[50000] backdrop-blur-sm"
                        onClick={() => setIsBurgerMenuOpen(false)}
                    />
                    <BurgerMenu onClose={() => setIsBurgerMenuOpen(false)} />
                </>
            )}
            <div className="flex flex-row items-center justify-center space-x-2">
                <div className="block lg:hidden">
                    <MdMenu
                        size={32}
                        className="hover:cursor-pointer hover:text-kazu-main"
                        onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
                    />
                </div>
                <button
                    className="bg-kazu-discord border-none px-7 py-2 flex space-x-1 rounded-lg border border-dark-border items-center font-medium text-base transition-all duration-200 hover:-translate-y-1 text-white"
                    onClick={() => router.push("https://kazu.bot/discord")}>
                    <FaDiscord size={22} />
                    <span className="hidden font-normal sm:inline-block">Support</span>
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
                label: "Commands",
                destination: "/commands",
                isActive: pathname == "/commands"
            },
            {
                label: "Playfairs.cc",
                destination: "https://playfairs.cc",
                isActive: pathname == "https://playfairs.cc"
            },
            {
                label: "Docs",
                destination: "https://docs.kazu.bot",
                isActive: pathname == "https://docs.kazu.bot"
            },
            {
                label: "Invite",
                destination:
                    "https://discord.com/oauth2/authorize?client_id=1284037026672279635&permissions=8&integration_type=0&scope=bot",
                isActive:
                    pathname ==
                    "https://discord.com/oauth2/authorize?client_id=1284037026672279635&permissions=8&integration_type=0&scope=bot"
            },
            {
                label: "Status",
                destination: "/status",
                isActive: pathname == "/status"
            }
        ],
        [pathname]
    )
    return (
        <>
            <div className="fixed inset-0 z-[9999999999] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.7 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                        ease: "linear",
                        duration: 0.2
                    }}
                    className="bg-kazu-200 border -mt-40 border-kazu-card-border w-[90%] px-2 rounded-xl shadow-lg">
                    <div className="flex flex-row justify-between items-center gap-6 pt-10 px-4">
                        <h1 className="font-bold text-white text-4xl">Menu</h1>
                        <CgClose
                            size={24}
                            className="ml-auto hover:cursor-pointer hover:text-kazu-main"
                            onClick={onClose}
                        />
                    </div>
                    <div className="flex flex-col gap-4 px-4 pt-10 pb-10">
                        {routes.map(route => {
                            return (
                                <Link
                                    href={route.destination}
                                    key={route.label}
                                    onClick={onClose}
                                    className={`flex items-center h-14 bg-kazu-300 rounded-md ${
                                        route.isActive
                                            ? "text-kazu-main bg-kazu-200"
                                            : "text-kazu-700 hover:bg-kazu-dim hover:text-white"
                                    }`}>
                                    <span className="text-base font-medium pl-5">
                                        {route.label}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default UserMenu
