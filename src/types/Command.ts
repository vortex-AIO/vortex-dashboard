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
    name: string
    permissions: string[]
    parameters: string[]
    description: string
    category: string
}

export interface Parameter {
    name: string
    optional: boolean
}
