"use client"
import { getCategoriesFromCommands } from "@/data/Commands"
import { Category, Command } from "@/types/Command"
import { useState, useEffect } from "react"
import Loading from "../loading"
import { CommandsPage } from "./components/Commands"
import commandData from "./components/commands.ts"

const Commands = () => {
    const [loading, setLoading] = useState(true)
    const [loadingComplete, setLoadingComplete] = useState(false)
    const [commands, setCommands] = useState<Command[] | null>(null)
    const [categories, setCategories] = useState<Category[] | null>(null)

    useEffect(() => {
        try {
            const formattedCommands: Command[] = commandData
                .map(cmd => ({
                    id: cmd.id,
                    name: cmd.name,
                    permissions: cmd.permissions,
                    requirements: [
                        ...new Set([
                            ...cmd.permissions,
                            ...cmd.checks,
                            ...cmd.inheritedGroupChecks,
                            ...(cmd.cogCheck
                                ? [
                                      typeof cmd.cogCheck === "string"
                                          ? cmd.cogCheck
                                          : `Cog check at ${cmd.cogCheck.sourceFile}:${cmd.cogCheck.sourceLine}`
                                  ]
                                : [])
                        ])
                    ],
                    parameters: cmd.usage,
                    argumentDetails: cmd.arguments
                        .filter(argument => !["self", "ctx"].includes(argument.name))
                        .map(argument => {
                            const details = [
                                argument.name,
                                argument.type,
                                argument.required ? "required" : "optional",
                                cmd.optionDescriptions[argument.name]
                            ].filter(Boolean)
                            return details.join(" · ")
                        }),
                    description: cmd.description,
                    category: cmd.cog,
                    aliases: cmd.aliases,
                    enabled: cmd.enabled,
                    hidden: cmd.hidden,
                    runtimeStatus: cmd.runtimeStatus,
                    interfaces: cmd.interfaces,
                    commandType: cmd.commandType,
                    commandKind: cmd.kind,
                    signature: cmd.signature,
                    customUsage: cmd.customUsage,
                    otherDecorators: cmd.otherDecorators,
                    sourceMetadata: [
                        ...Object.entries(cmd.metadata).map(
                            ([key, value]) => `${key}: ${JSON.stringify(value)}`
                        ),
                        ...Object.entries(cmd.classCommandAttributes).map(
                            ([key, value]) => `${key}: ${JSON.stringify(value)}`
                        )
                    ],
                    sourceUrl: cmd.sourceUrl,
                    descriptionSource: cmd.descriptionSource
                }))
                .sort((a, b) => a.name.localeCompare(b.name));
            
            const allCategories = getCategoriesFromCommands(formattedCommands);
            const sortedCategories = [...allCategories].sort((a, b) => 
                a.name.localeCompare(b.name)
            );
            
            setCommands(formattedCommands);
            setCategories(sortedCategories);
            setLoading(false);
        } catch (error) {
            console.error("Error loading commands:", error);
            setLoading(false);
        }
    }, [])

    const handleLoadingComplete = () => {
        setLoadingComplete(true)
    }

    if (loading) {
        return <Loading onComplete={handleLoadingComplete} />
    }

    return (
        <CommandsPage commands={commands} categories={categories} />
    )
}

export default Commands