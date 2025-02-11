"use client"
import { getCategoriesFromCommands } from "@/data/Commands"
import { Category, Command } from "@/types/Command"
import useAxios from "axios-hooks"
import { useState } from "react"
import Loading from "../loading"
import { CommandsPage } from "./components/Commands"

const Commands = () => {
    const [{ data, loading, error }] = useAxios({
        url: "/",
        baseURL: "https://api.heresy.bot"
    })

    const [loadingComplete, setLoadingComplete] = useState(false)
    let commands: Command[] | null = null
    let categories: Category[] | null = null

    if (data) {
        commands = []
        for (const categoryName in data) {
            if (data.hasOwnProperty(categoryName)) {
                const categoryCommands = data[categoryName]
                categoryCommands.forEach((cmd: any) => {
                    commands?.push({
                        name: cmd.name,
                        permissions: cmd.brief,
                        parameters: cmd.usage,
                        description: cmd.help,
                        category: categoryName
                    })
                })
            }
        }
        if (commands) categories = getCategoriesFromCommands(commands)
    }

    const handleLoadingComplete = () => {
        setLoadingComplete(true)
    }

    if (error) return <CommandsPage commands={null} categories={null} />

    return loading || !loadingComplete ? (
        <Loading onComplete={handleLoadingComplete} />
    ) : (
        <CommandsPage commands={commands} categories={categories} />
    )
}

export default Commands
