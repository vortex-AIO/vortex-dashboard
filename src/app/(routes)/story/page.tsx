import type { Metadata } from "next"
import PublicMarkdown from "@/components/PublicMarkdown"

export const metadata: Metadata = {
    title: "The Vortex Story",
    description: "The story of Vortex, its final chapter, and everything that came before."
}

export default function StoryPage() {
    return (
        <div className="archive-story-shell">
            <span className="archive-eyebrow">The Archive & Lore</span>
            <h1 className="archive-story-title">
                How did
                <br />
                we <em>get here?</em>
            </h1>
            <p className="archive-story-deck">
                A place to remember what Vortex has been, and to look toward what comes next.
            </p>
            <div className="archive-last-day">
                <span className="archive-last-day-copy">
                    <span className="archive-last-day-label">Vortex&apos;s final day</span>
                    <time className="archive-last-day-date" dateTime="2026-12-27">
                        December 27, 2026
                    </time>
                </span>
            </div>

            <div className="archive-story-rule" />
            <PublicMarkdown filePath="/lore.md" />
        </div>
    )
}
