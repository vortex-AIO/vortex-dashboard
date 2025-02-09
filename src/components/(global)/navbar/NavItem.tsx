"use client"
import Link from "next/link"

interface NavItemProps {
    label: string
    destination: string
    isActive: boolean
}

const NavItem: React.FC<NavItemProps> = ({ label, destination, isActive, ...props }) => {
    return (
        <Link
            href={destination}
            className={`font-medium ${isActive ? "text-kazu-main py-5 border-b-2 border-kazu-pink pb-8" : "text-zinc-500"}`}
            {...props}>
            {label}
        </Link>
    )
}

export default NavItem
