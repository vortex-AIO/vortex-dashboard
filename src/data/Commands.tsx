import { BaseCategory, Category, Command } from "@/types/Command"
import { BiMusic } from "react-icons/bi"
import { IoSettingsOutline } from "react-icons/io5"
import { TbAlignLeft } from "react-icons/tb"

export const getCategoriesFromCommands: (commands: Command[]) => Category[] = commands => {
    const categories: Category[] = []

    categories.push({
        name: "All",
        icon: BaseCategories.find(c => c.name === "All")?.icon,
        commands: commands
    })

    commands.forEach(command => {
        if (command.name === "help") return

        const category = categories.find(c => c.name === command.category)

        if (!category) {
            categories.push({
                name: command.category,
                icon: BaseCategories.find(c => c.name === command.category)?.icon,
                commands: [command]
            })
        } else {
            category.commands.push(command)
        }
    })

    categories.sort((a, b) => b.commands.length - a.commands.length)

    return categories
}

export const BaseCategories: BaseCategory[] = [
    {
        name: "All",
        icon: <TbAlignLeft />
    },
    {
        name: "Music",
        icon: <BiMusic />
    },
    {
        name: "Servers",
        icon: <IoSettingsOutline />
    }
]
