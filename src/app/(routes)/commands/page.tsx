"use client"
import { getCategoriesFromCommands } from "@/data/Commands"
import { Category, Command } from "@/types/Command"
import { useState, useEffect } from "react"
import Loading from "../loading"
import { CommandsPage } from "./components/Commands"
import commandData from "./components/commands"

interface ImportedCommand {
  name: string;
  description: string;
  aliases: string[];
  usage: string;
  enabled: boolean;
  cog: string;
  permissions: string;
  hidden?: boolean;
}

const Commands = () => {
    const [loading, setLoading] = useState(true)
    const [loadingComplete, setLoadingComplete] = useState(false)
    const [commands, setCommands] = useState<Command[] | null>(null)
    const [categories, setCategories] = useState<Category[] | null>(null)

    useEffect(() => {
        try {
            const formattedCommands: Command[] = commandData[0].commands
                .map((cmd: ImportedCommand) => ({
                    name: cmd.name,
                    permissions: [cmd.permissions],
                    parameters: [cmd.usage],
                    description: cmd.description,
                    category: cmd.cog,
                    aliases: cmd.aliases,
                    enabled: cmd.enabled,
                    hidden: cmd.hidden
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
