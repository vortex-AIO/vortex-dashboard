import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

export default function BackToTopButton() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShow(true)
            } else {
                setShow(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const jumpToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 150 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1
                    }}
                    className="fixed bottom-6 sm:bottom-12 inset-x-12 flex items-center justify-center sm:justify-end z-[10000]">
                    <button
                        onClick={jumpToTop}
                        className="bg-kazu-200 border border-kazu-300 text-white rounded-full p-6 hover:bg-transparent transition">
                        <FaArrowUp className="text-2xl" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
