"use client"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

import type { Category, Command } from "@/types/Command"
import { useEffect, useRef, useState } from "react"

export const SearchMenu = ({
    onClose,
    commands,
    categories,
    changeActiveCategory
}: {
    onClose: () => void
    commands: Command[]
    categories: Category[]
    changeActiveCategory: (category: string) => void
}) => {
    const [searchTerm, setSearchTerm] = useState("")
    const searchMenuRef = useRef<HTMLDivElement>(null)
    const searchValuesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose()
            }
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchMenuRef.current &&
                !searchMenuRef.current.contains(event.target as Node) &&
                searchValuesRef.current &&
                !searchValuesRef.current.contains(event.target as Node)
            ) {
                onClose()
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [onClose])

    const clonedCommands = [...commands]
    const filteredCommands =
        searchTerm === ""
            ? []
            : clonedCommands.filter(command =>
                  command.name.toLowerCase().includes(searchTerm.toLowerCase())
              )

    const clonedCategories = [...categories]
    const filter =
        searchTerm === ""
            ? []
            : clonedCategories
                  .map(category => {
                      const clonedCategory = { ...category }
                      clonedCategory.commands = filteredCommands.filter(
                          command => command.category === clonedCategory.name
                      )
                      return clonedCategory
                  })
                  .filter(category => category.commands.length > 0)

    return (
        <div className="archive-search-layer">
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.3
                }}
                ref={searchMenuRef}
                className={`archive-search-dialog${filteredCommands.length > 0 ? " has-results" : ""}`}>
                <div className="archive-search-input-wrap">
                    <Search size={19} aria-hidden="true" />
                    <input
                        type="text"
                        placeholder="Search for commands..."
                        className="archive-search-input"
                        onChange={e => setSearchTerm(e.target.value)}
                        autoFocus
                    />
                </div>
            </motion.div>
            <div
                className={`archive-search-results${filteredCommands.length > 0 ? " is-visible" : ""}`}
                ref={searchValuesRef}>
                <div className="archive-search-results-inner">
                    {filter.map(category => (
                        <div key={category.name}>
                            <div className="flex flex-col gap-2 pt-2 pb-5">
                                {category.commands.map(command => (
                                    <div
                                        key={command.id}
                                        className="archive-search-result"
                                        onClick={() => {
                                            changeActiveCategory(category.name)
                                            setTimeout(() => {
                                                const element = document.getElementById(
                                                    command.id
                                                )
                                                if (element) {
                                                    element.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "start",
                                                        inline: "nearest"
                                                    })
                                                    window.scrollBy({
                                                        top:
                                                            element.getBoundingClientRect().top +
                                                            window.pageYOffset +
                                                            -20,
                                                        behavior: "smooth"
                                                    })
                                                    element.style.borderColor = "#94A8AE"
                                                    element.classList.add("animate-pulse")
                                                    setTimeout(() => {
                                                        element.style.borderColor = ""
                                                        element.classList.remove("animate-pulse")
                                                    }, 3000)
                                                }
                                            }, 200)
                                            onClose()
                                        }}>
                                        <div className="flex flex-row items-center gap-2">
                                            <div className="text-vortex-700 text-sm">
                                                {category.icon}
                                            </div>
                                            <p className="text-vortex-700 font-medium text-sm">
                                                {category.name}
                                            </p>
                                        </div>
                                        <h1 className="text-white font-semibold">{command.name}</h1>
                                        <p className="text-sm font-normal text-vortex-secondary">
                                            {command.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
