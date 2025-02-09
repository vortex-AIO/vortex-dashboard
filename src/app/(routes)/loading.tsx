"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import kazu from "../../../public/kazu.png"

export default function Loading({ onComplete }: { onComplete: () => void }) {
    const [isAtCenter, setIsAtCenter] = useState(false)

    const handleAnimationComplete = () => {
        setIsAtCenter(true)
        setTimeout(onComplete, 1000)
    }

    return (
        <div className="fixed inset-0 flex h-screen justify-center flex-col items-center bg-[#0c0d0d] z-[99]">
            <motion.div
                initial={{ opacity: 0, y: 500, scale: 0.4 }}
                animate={
                    isAtCenter
                        ? {
                              opacity: 1,
                              y: 0,
                              scale: [0.4, 0.5, 0.4],
                              transition: {
                                  duration: 1.5,
                                  repeat: Infinity,
                                  repeatType: "mirror"
                              }
                          }
                        : {
                              opacity: 1,
                              y: 0,
                              scale: [0.4, 0.8, 0.4],
                              transition: { duration: 1.5, ease: "easeInOut" }
                          }
                }
                onAnimationComplete={isAtCenter ? undefined : handleAnimationComplete}
                className="rounded-2xl">
                <Image src={kazu} alt="kazu" width={300} height={300} className="rounded-2xl" />
            </motion.div>
        </div>
    )
}
