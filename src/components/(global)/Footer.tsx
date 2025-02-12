import "@/styles/globals.css"
import Image from "next/image"
import Link from "next/link"
import kazu from "../../../public/kazu.png"

export const Footer = () => {
    return (
        <div className="mt-[30vh] border-t border-kazu-card-border bg-[#0B0C0C] footer pb-10">
            <div className="flex w-full border-solid border-t border-kazu-600 border-opacity-10">
                <div className="flex flex-row w-full mt-10 justify-between ">
                    <div className="flex flex-col">
                        <Image
                            src={kazu}
                            alt="heresy"
                            height={150}
                            width={150}
                            className="rounded-2xl"
                        />
                        <p className="text-kazu-main text-sm mt-4">
                            Copyright © 2024 heresy.cc. All rights reserved.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 sm:flex-row">
                        <div className="flex flex-col">
                            <span className="font-extrabold text-2xl text-white">Bot</span>
                            <Link
                                href="/invite"
                                className="font-semibold text-kazu-main text-sm mt-2">
                                Invite
                            </Link>
                            <Link
                                href="https://docs.kazu.bot/"
                                className="font-semibold text-kazu-main text-sm mt-2">
                                Documentation
                            </Link>
                            <Link
                                href="https://discord.gg/heresy"
                                className="font-semibold text-kazu-main text-sm mt-2">
                                Support Server
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extrabold text-2xl text-white">Legal</span>
                            <Link
                                href="/terms"
                                className="font-semibold text-kazu-main text-sm mt-2">
                                Terms
                            </Link>
                            <Link
                                href="/privacy"
                                className="font-semibold text-kazu-main text-sm mt-2">
                                Privacy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
