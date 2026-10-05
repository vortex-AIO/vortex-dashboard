import { ReactNode } from "react"

export interface BaseCategory {
    name: string
    icon: ReactNode
}

export interface Category {
    name: string
    icon: ReactNode
    commands: Command[]
}

export interface Command {
    id: string
    name: string
    permissions: string[]
    requirements: string[]
    parameters: string[]
    argumentDetails: string[]
    description: string
    category: string
    aliases?: string[]
    enabled?: boolean
    hidden?: boolean
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
}

export interface Parameter {
    name: string
    optional: boolean
}
