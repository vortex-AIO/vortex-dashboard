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
                    <p>
                        Browse the source-verified command archive. Startup labels reflect source
                        configuration; server-specific settings and live availability may vary.
                    </p>
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
                    <p>
                        Browse the source-verified command archive. Startup labels reflect source
                        configuration; server-specific settings and live availability may vary.
                    </p>
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
                                key={command.id}
                                id={command.id}
                                name={command.name}
                                category={command.category}
                                description={command.description || "No description provided."}
                                args={command.parameters ?? []}
                                argumentDetails={command.argumentDetails}
                                aliases={command.aliases ?? []}
                                requirements={command.requirements}
                                enabled={command.enabled ?? false}
                                hidden={command.hidden ?? false}
                                runtimeStatus={command.runtimeStatus}
                                interfaces={command.interfaces}
                                commandType={command.commandType}
                                commandKind={command.commandKind}
                                signature={command.signature}
                                customUsage={command.customUsage}
                                otherDecorators={command.otherDecorators}
                                sourceMetadata={command.sourceMetadata}
                                sourceUrl={command.sourceUrl}
                                descriptionSource={command.descriptionSource}
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
    id,
    name,
    category,
    description,
    args,
    argumentDetails,
    aliases,
    requirements,
    enabled,
    hidden,
    runtimeStatus,
    interfaces,
    commandType,
    commandKind,
    signature,
    customUsage,
    otherDecorators,
    sourceMetadata,
    sourceUrl,
    descriptionSource
}: {
    id: string
    name: string
    category: string
    description: string
    args: string[]
    argumentDetails: string[]
    aliases: string[]
    requirements: string[]
    enabled: boolean
    hidden: boolean
    runtimeStatus: string
    interfaces: string[]
    commandType: string
    commandKind: string
    signature: string | null
    customUsage: string | null
    otherDecorators: string[]
    sourceMetadata: string[]
    sourceUrl: string | null
    descriptionSource: "source" | "inferred"
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

    const visibleSignature = signature
        ?.replace(/^self,\s*/, "")
        .replace(/^ctx(?::[^,]+)?(?:,\s*)?/, "")
        .replace(/^\*,\s*/, "")
        .trim()

    return (
        <article id={id} className="archive-command-card">
            <div className="archive-command-card-heading">
                <span className="archive-command-category">{category}</span>
                <div className="archive-command-card-actions">
                    {sourceUrl && (
                        <a
                            className="archive-command-source"
                            href={sourceUrl}
                            target="_blank"
                            rel="noreferrer">
                            Source
                        </a>
                    )}
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
            </div>
            <h2 className="archive-command-name">
                <code>{name}</code>
            </h2>
            <p className="archive-command-description">{description}</p>
            <div className="archive-command-status">
                <span>{interfaces.join(" · ") || commandType}</span>
                <span>{commandKind.replaceAll("_", " ")}</span>
                <span>
                    {enabled
                        ? "Registered by startup setup"
                        : runtimeStatus === "not_registered_by_setup_or_module_not_imported"
                          ? "Not registered by setup"
                          : "Skipped by startup config"}
                </span>
                {hidden && <span>Hidden</span>}
                {descriptionSource === "inferred" && <span>Summary from behavior</span>}
            </div>
            <div className="archive-command-details">
                <div className="archive-command-usage">
                    <p className="archive-command-detail-label">Usage</p>
                    <div className="archive-command-chips">
                        {args.length > 0 ? (
                            args.map((arg, index) => (
                                <code key={`${arg}-${index}`}>{arg}</code>
                            ))
                        ) : (
                            <span className="archive-command-none">
                                {commandType === "context_menu"
                                    ? "Context menu action"
                                    : "No arguments"}
                            </span>
                        )}
                    </div>
                    {customUsage && !args.includes(customUsage) && (
                        <p className="archive-command-custom-usage">
                            Custom usage: <code>{customUsage}</code>
                        </p>
                    )}
                    {visibleSignature && (
                        <p className="archive-command-signature">{visibleSignature}</p>
                    )}
                </div>
                {argumentDetails.length > 0 && (
                    <div>
                        <p className="archive-command-detail-label">Arguments</p>
                        <div className="archive-command-chips">
                            {argumentDetails.map((argument, index) => (
                                <span key={`${argument}-${index}`}>{argument}</span>
                            ))}
                        </div>
                    </div>
                )}
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
                    <p className="archive-command-detail-label">Permissions &amp; checks</p>
                    <div className="archive-command-chips">
                        {requirements.length > 0 ? (
                            requirements.map((requirement, index) => (
                                <span key={`${requirement}-${index}`}>
                                    {requirement}
                                </span>
                            ))
                        ) : (
                            <span className="archive-command-none">No additional checks</span>
                        )}
                    </div>
                </div>
                {(otherDecorators.length > 0 || sourceMetadata.length > 0) && (
                    <details className="archive-command-metadata">
                        <summary>Other source metadata</summary>
                        <div className="archive-command-chips">
                            {otherDecorators.map((decorator, index) => (
                                <code key={`${decorator}-${index}`}>{decorator}</code>
                            ))}
                            {sourceMetadata.map((metadata, index) => (
                                <code key={`${metadata}-${index}`}>{metadata}</code>
                            ))}
                        </div>
                    </details>
                )}
            </div>
        </article>
    )
}
