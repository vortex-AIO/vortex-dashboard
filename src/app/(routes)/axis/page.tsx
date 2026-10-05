import type { Metadata } from "next"
import Link from "next/link"
import PublicMarkdown from "@/components/PublicMarkdown"

export const metadata: Metadata = {
    title: "Axis",
    description: "Meet Axis, the successor to Vortex currently in development."
}

export default function AxisPage() {
    return (
        <div className="archive-story-shell">
            <span className="archive-eyebrow">The Third.</span>
            <h1 className="archive-story-title">
                Meet <em>Axis.</em>
            </h1>
            <p className="archive-story-deck">
                Axis is being made as the successor to Vortex. This is the beginning of its own
                chapter.
            </p>

            <section className="archive-axis-card mt-10" aria-labelledby="axis-status">
                <div>
                    <span className="archive-eyebrow">In development</span>
                    <h2 id="axis-status">A new bot.</h2>
                    <p>
                        More about Axis will be shared as development continues.
                    </p>
                </div>
                <span className="archive-axis-wordmark" aria-label="Axis">
                    axis<span aria-hidden="true">.</span>
                </span>
            </section>

            <div className="archive-story-rule" />
            <PublicMarkdown filePath="/axis.md" />

            <Link className="archive-story-back-link" href="/story">
                <span aria-hidden="true">←</span> Read the Vortex Lore
            </Link>
        </div>
    )
}
