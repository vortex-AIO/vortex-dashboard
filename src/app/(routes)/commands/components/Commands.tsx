"use client"
import BackToTopButton from "@/components/TopButton"
import { CategorySelector } from "@/components/commands/CommandSelector"
import { Search, TerminalSquareIcon } from "lucide-react"
import { useRef, useState } from "react"

import type { Category, Command } from "@/types/Command"
import { BiCopy } from "react-icons/bi"
import { FaRegFolderClosed } from "react-icons/fa6"
import { SearchMenu } from "./SearchMenu"
import React from "react"

export const CommandsPage = ({
    commands,
    categories
}: {
    commands: Command[] | null
    categories: Category[] | null
}) => {
    const searchBackgroundRef = useRef<HTMLDivElement>(null)
    const [isSearchMenuOpen, setSearchMenuOpen] = useState(false)
    const [activeCategory, setActiveCategory] = useState("All")

    if (!commands || !categories) {
        return (
            <div className="2xl:container 2xl:mx-auto -mt-2 px-20 md:px-[8vw] 2xl:px-52 2xl:py-4">
                <BackToTopButton />
                <div className="flex flex-row justify-between items-center -mx-10 sm:-mx-0">
                    <div className="flex justify-center items-center space-x-2">
                        <div className="rounded-full p-3 border border-vortex-card-border bg-vortex-200">
                            <TerminalSquareIcon size="25" className="text-vortex-main" />
                        </div>
                        <div className="text-2xl font-bold text-white sm:text-3xl">Commands</div>
                    </div>
                    <div className="flex flex-row items-center gap-4 mt-2 sm:mt-0">
                        <div
                            className="flex items-center justify-center rounded-2xl border border-vortex-card-border bg-vortex-200 hover:bg-vortex-300 cursor-pointer p-3"
                            onClick={() => setSearchMenuOpen(true)}>
                            <Search size="25" className="text-vortex-main" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center pb-[15vh] pt-20">
                    <FaRegFolderClosed className="text-8xl text-[#4F4F4F] rotate-12" />
                    <p className="text-xl font-medium text-[#969696] pt-5">No Commands Found</p>
                </div>
            </div>
        )
    }

    const activeCommands =
        activeCategory === "All"
            ? commands
            : commands.filter(command => command.category === activeCategory)

    return (
        <>
            {isSearchMenuOpen && (
                <>
                    <div
                        ref={searchBackgroundRef}
                        className="fixed inset-0 bg-black bg-opacity-50 z-[60] backdrop-blur-sm"
                        onClick={() => setSearchMenuOpen(false)}
                    />
                    <SearchMenu
                        onClose={() => setSearchMenuOpen(false)}
                        changeActiveCategory={(category: string) => setActiveCategory(category)}
                        commands={commands}
                        categories={categories}
                    />
                </>
            )}
            <div className="p-6">
                <div className="w-full flex flex-col max-w-5xl mx-auto">
                    <BackToTopButton />
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex justify-center items-center space-x-2">
                            <div className="rounded-full p-3 border border-vortex-card-border bg-vortex-200">
                                <TerminalSquareIcon size="25" className="text-vortex-main" />
                            </div>
                            <div className="text-2xl font-bold text-white sm:text-3xl">
                                Commands
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-4 mt-2 sm:mt-0">
                            <div
                                className="flex items-center justify-center rounded-2xl border border-vortex-card-border bg-vortex-200 hover:bg-vortex-300 cursor-pointer p-3"
                                onClick={() => setSearchMenuOpen(true)}>
                                <Search size="25" className="text-vortex-main" />
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <CategorySelector
                            categories={categories}
                            selected={activeCategory}
                            onClick={(category: string) => setActiveCategory(category)}
                        />
                    </div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {activeCommands.map(command => (
                            <Command
                                key={command.name}
                                name={command.name}
                                description={
                                    command.description.length > 0
                                        ? command.description
                                        : "No Description"
                                }
                                args={command.parameters ?? ["None"]}
                                aliases={["None"]}
                                permissions={command.permissions ?? ["None"]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const Command = ({
    name,
    description,
    args,
    aliases,
    permissions
}: {
    name: string
    description: string
    args: string[]
    aliases: string[]
    permissions: string[]
}) => {
    return (
        <div
            id={name}
            className="flex flex-col py-6 rounded-3xl bg-vortex-200 border transition-shadow duration-200 ease-linear border-vortex-card-border text-white">
            <div className="relative h-full flex flex-col justify-between">
                <div className="px-6">
                    <div className="flex items-start justify-between gap-x-4">
                        <div className="flex items-center gap-2">
                            <p className="text-xl font-semibold inline-flex items-center">{name}</p>
                        </div>
                        <button
                            data-clipboard-text={name}
                            className="text-neutral-500 transition duration-200 ease-linear hover:text-white"
                            onClick={() => {
                                navigator.clipboard.writeText(name)
                            }}>
                            <BiCopy className="w-6 h-6" />
                        </button>
                    </div>
                    <p className="text-sm text-vortex-secondary font-medium pb-[5%]">
                        {description}
                    </p>
                </div>
                <hr className="border-t border-vortex-card-border w-full" />
                <div>
                    <div className="px-6 pt-[5%] flex flex-col gap-4">
                        <div>
                            <p className="text-sm tracking-wide text-vortex-main font-medium">
                                usage
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {args.length === 0 ? (
                                    <p className="text-[#D6D6D6] text-sm py-1 px-2 rounded-lg bg-vortex-300">
                                        None
                                    </p>
                                ) : (
                                    args.map((arg: string, index: number) => (
                                        <p
                                            key={index}
                                            className="text-[#D6D6D6] text-sm py-1 px-2 rounded-lg bg-vortex-300">
                                            {arg.replaceAll("_", " ")}
                                        </p>
                                    ))
                                )}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm tracking-wide text-vortex-main font-medium">
                                permissions
                            </p>
                            <div className="flex items-center gap-2 mt-3 capitalize">
                                {permissions.map((permission: string, index: number) => (
                                    <p
                                        key={index}
                                        className="text-[#D6D6D6] text-sm py-1 px-2 rounded-lg bg-vortex-300">
                                        {permission == "N/A"
                                            ? "None"
                                            : permission.replaceAll("_", " ")}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
