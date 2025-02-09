import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

export default function NotFound() {
    return (
        <div className="flex flex-col gap-4 h-screen -mt-[20vh] justify-center items-center">
            <h1 className="text-8xl font-bold text-white">404</h1>
            <span className="text-xl font-semibold text-[#6A6F71] text-center">Page Not Found</span>
            <Link
                className="flex flex-row pl-4 items-center rounded-2xl gap-3 h-[50px] w-[120px] bg-[#1E1F1F] hover:bg-[#2a2c2c]"
                href={"/"}>
                <FaArrowLeft />
                <span className="font-medium text-neutral-300">Go Back</span>
            </Link>
        </div>
    )
}
