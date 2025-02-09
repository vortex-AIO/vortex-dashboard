"use client"
import { MeshGradient } from "@/components/(global)/GradientMesh"
import "@/styles/globals.css"
import { motion } from "framer-motion"
import Image from "next/image"
import { ReactNode, useEffect, useState } from "react"
import { HiBookOpen } from "react-icons/hi2"
import { IoTerminal } from "react-icons/io5"
import { RiDiscordLine } from "react-icons/ri"
import kazu from "../../../public/kazu.png"

const fetchShards = async () => {
    const response = await fetch(`https://api.kazu.bot/status`)
    if (!response.ok) {
        console.error("Failed to fetch shard data")
        return []
    }
    const data = await response.json()
    return data.shards.map((shard: any) => ({
        id: shard.id,
        guilds: parseInt(shard.guilds),
        users: parseInt(shard.users.replace(/,/g, "")),
        ping: parseFloat(shard.ping),
        uptime: shard.uptime
    }))
}

export default function Home() {
    const [shards, setShards] = useState<IShard[]>([])
    const [totalUsers, setTotalUsers] = useState<number>(0)
    const [totalGuilds, setTotalGuilds] = useState<number>(0)

    useEffect(() => {
        const fetchData = async () => {
            const fetchedShards = await fetchShards()

            if (fetchedShards.length === 0) {
                console.error("No shard data available")
            } else {
                const totalUsers = fetchedShards.reduce(
                    (acc: number, shard: IShard) => acc + shard.users,
                    0
                )
                const totalGuilds = fetchedShards.reduce(
                    (acc: number, shard: IShard) => acc + shard.guilds,
                    0
                )

                setTotalUsers(totalUsers)
                setTotalGuilds(totalGuilds)
            }

            setShards(fetchedShards)
        }

        fetchData()
    }, [])
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 90 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <>
            <MeshGradient />
            <div className="flex flex-col h-screen w-screen items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 500, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                    className="rounded-lg pb-3">
                    <Image src={kazu} alt="kazu" width={300} height={300} />
                </motion.div>
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeUpVariants}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.8,
                        delay: 0.5
                    }}
                    className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#caca90] via-white to-[#caca90] pb-3">
                    kazu
                </motion.h1>
                <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={fadeUpVariants}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.8,
                        delay: 0.7
                    }}
                    className="text-lg pb-10 -pt-5 font-medium text-[#6A6F71] text-center">
                    serving{" "}
                    <span className="text-[#D6D6D6] font-semibold">
                        {totalUsers.toLocaleString() || "???"}
                    </span>{" "}
                    users across{" "}
                    <span className="text-[#D6D6D6] font-semibold">
                        {totalGuilds.toLocaleString() || "???"}
                    </span>{" "}
                    servers
                </motion.span>
                <div className="flex flex-row gap-3 sm:flex-col sm:gap-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariants}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.8,
                                delay: 0.9
                            }}>
                            <SplashItem name="cmds" link="/commands" icon={<IoTerminal />} />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariants}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.8,
                                delay: 0.91
                            }}>
                            <SplashItem
                                name="discord"
                                link="https://discord.com/kazu"
                                icon={<RiDiscordLine />}
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariants}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.8,
                                delay: 0.92
                            }}>
                            <SplashItem
                                name="docs"
                                link="https://docs.kazu.bot/"
                                icon={<HiBookOpen />}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

const SplashItem = ({ name, link, icon }: { name: string; link: string; icon: ReactNode }) => {
    return (
        <a
            href={link}
            className="flex flex-row gap-2 w-[43vw] text-neutral-300 font-semibold shadow-lg items-center rounded-2xl py-[1rem] px-4 bg-[#1E1F1F] bg-opacity-90  border-opacity-10 hover:bg-opacity-50 hover:scale-105 transition-transform duration-500 sm:w-[150px]">
            {icon}
            {name}
        </a>
    )
}

interface IShard {
    id: string
    guilds: number
    users: number
    ping: number
    uptime: number
}
