"use client"
import BackToTopButton from "@/components/TopButton"
import { CategorySelector } from "@/components/commands/CommandSelector"
import { Search, TerminalSquareIcon } from "lucide-react"
import { useEffect, useState } from "react"

import type { Category, Command } from "@/types/Command"
import { Check, Copy } from "lucide-react"
import { FaRegFolderClosed } from "react-icons/fa6"
import { SearchMenu } from "./SearchMenu"

export const CommandsPage = ({
    commands,
    categories
}: {
    commands: Command[] | null
    categories: Category[] | null
}) => {
    const [isSearchMenuOpen, setSearchMenuOpen] = useState(false)
    const [activeCategory, setActiveCategory] = useState("All")

    useEffect(() => {
        const handleSearchShortcut = (event: KeyboardEvent) => {
            const target = event.target
            const isTyping =
                target instanceof HTMLElement &&
                (target.isContentEditable ||
                    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))

            if (event.key === "/" && !isTyping) {
                event.preventDefault()
                setSearchMenuOpen(true)
            }
        }

        window.addEventListener("keydown", handleSearchShortcut)
        return () => window.removeEventListener("keydown", handleSearchShortcut)
    }, [])

    if (!commands || !categories) {
        return (
            <div className="archive-commands-shell">
                <BackToTopButton />
                <div className="archive-commands-heading">
                    <span className="archive-eyebrow">The Vortex index</span>
                    <h1>Commands</h1>
                    <p>Browse the tools and utilities that made Vortex part of your server.</p>
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
    const activeCategoryCount =
        categories.find(category => category.name === activeCategory)?.commands.length ??
        commands.length

    return (
        <>
            {isSearchMenuOpen && (
                <>
                    <div
                        className="archive-search-backdrop"
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
            <div className="archive-commands-shell">
                <BackToTopButton />
                <div className="archive-commands-heading">
                    <span className="archive-eyebrow">The Vortex index</span>
                    <h1>Commands</h1>
                    <p>Browse the tools and utilities that made Vortex part of your server.</p>
                </div>

                <div className="archive-commands-toolbar">
                    <div>
                        <span className="archive-commands-count">{activeCategoryCount}</span>
                        <span className="archive-commands-count-label">
                            {activeCategory === "All" ? "commands in the archive" : `${activeCategory} commands`}
                        </span>
                    </div>
                    <button
                        type="button"
                        className="archive-command-search"
                        onClick={() => setSearchMenuOpen(true)}>
                        <Search size={17} aria-hidden="true" />
                        <span>Search commands</span>
                        <kbd>/</kbd>
                    </button>
                </div>

                <CategorySelector
                    categories={categories}
                    selected={activeCategory}
                    onClick={(category: string) => setActiveCategory(category)}
                />

                {activeCommands.length > 0 ? (
                    <div className="archive-command-grid">
                        {activeCommands.map(command => (
                            <Command
                                key={command.name}
                                name={command.name}
                                category={command.category}
                                description={command.description || "No description provided."}
                                args={command.parameters ?? []}
                                aliases={command.aliases ?? []}
                                permissions={command.permissions ?? []}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="archive-command-empty">
                        <TerminalSquareIcon size={24} aria-hidden="true" />
                        <p>No commands in this category.</p>
                    </div>
                )}
            </div>
        </>
    )
}

const Command = ({
    name,
    category,
    description,
    args,
    aliases,
    permissions
}: {
    name: string
    category: string
    description: string
    args: string[]
    aliases: string[]
    permissions: string[]
}) => {
    const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle")

    const copyCommand = async () => {
        try {
            await navigator.clipboard.writeText(name)
            setCopyStatus("copied")
            window.setTimeout(() => setCopyStatus("idle"), 1600)
        } catch (error) {
            console.error(`Unable to copy command name "${name}":`, error)
            setCopyStatus("error")
            window.setTimeout(() => setCopyStatus("idle"), 2500)
        }
    }

    return (
        <article id={name} className="archive-command-card">
            <div className="archive-command-card-heading">
                <span className="archive-command-category">{category}</span>
                <button
                    type="button"
                    aria-label={
                        copyStatus === "copied"
                            ? `Copied ${name}`
                            : copyStatus === "error"
                              ? `Could not copy ${name}`
                              : `Copy command name ${name}`
                    }
                    className={`archive-command-copy${copyStatus !== "idle" ? ` is-${copyStatus}` : ""}`}
                    onClick={copyCommand}>
                    {copyStatus === "copied" ? (
                        <Check size={14} aria-hidden="true" />
                    ) : (
                        <Copy size={14} aria-hidden="true" />
                    )}
                    <span aria-live="polite">
                        {copyStatus === "copied"
                            ? "Copied"
                            : copyStatus === "error"
                              ? "Copy failed"
                              : "Copy"}
                    </span>
                </button>
            </div>
            <h2 className="archive-command-name">
                <code>{name}</code>
            </h2>
            <p className="archive-command-description">{description}</p>
            <div className="archive-command-details">
                <div className="archive-command-usage">
                    <p className="archive-command-detail-label">Usage</p>
                    <div className="archive-command-chips">
                        {args.length > 0 ? (
                            args.map((arg, index) => (
                                <code key={`${arg}-${index}`}>{arg.replaceAll("_", " ")}</code>
                            ))
                        ) : (
                            <span className="archive-command-none">No arguments</span>
                        )}
                    </div>
                </div>
                {aliases.length > 0 && (
                    <div>
                        <p className="archive-command-detail-label">Aliases</p>
                        <div className="archive-command-chips">
                            {aliases.map((alias, index) => (
                                <code key={`${alias}-${index}`}>{alias}</code>
                            ))}
                        </div>
                    </div>
                )}
                <div>
                    <p className="archive-command-detail-label">Permissions</p>
                    <div className="archive-command-chips">
                        {permissions.length > 0 && permissions[0] !== "N/A" ? (
                            permissions.map((permission, index) => (
                                <span key={`${permission}-${index}`}>
                                    {permission.replaceAll("_", " ")}
                                </span>
                            ))
                        ) : (
                            <span className="archive-command-none">None</span>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}
