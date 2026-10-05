import Image from "next/image"
import Link from "next/link"
import kazu from "../../../public/kaxu.png"

export const Footer = () => {
    return (
        <footer className="archive-footer">
            <div className="archive-footer-inner">
                <div className="archive-footer-brand">
                    <Image src={kazu} alt="" height={46} width={46} className="rounded-xl" />
                    <div>
                        <p className="archive-footer-wordmark">vortex<span>.</span></p>
                    </div>
                </div>
                <div className="archive-footer-links">
                    <div>
                        <p className="archive-footer-heading">Explore</p>
                        <Link href="/commands">Commands</Link>
                        <Link href="/story">The story</Link>
                        <Link href="/axis">Axis</Link>
                        <a
                            href="https://github.com/playfairs/vortex"
                            target="_blank"
                            rel="noopener noreferrer">
                            Vortex public source archive
                        </a>
                    </div>
                    <div>
                        <p className="archive-footer-heading">Connect</p>
                        <a href="https://discord.gg/78CFrpCUrV">Support server</a>
                    </div>
                    <div>
                        <p className="archive-footer-heading">Legal</p>
                        <Link href="/terms">Terms</Link>
                        <Link href="/privacy">Privacy</Link>
                    </div>
                </div>
            </div>
            <div className="archive-footer-bottom">
                <span>Copyright © 2026 playfairs.cc. All rights reserved.</span>
                <span>The Vortex Project</span>
            </div>
        </footer>
    )
}
