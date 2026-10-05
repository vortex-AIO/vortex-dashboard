import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Timeline",
    description: "A timeline of Heresy, Vortex, and the transition to Axis."
}

const milestones = [
    {
        date: "August 24, 2024",
        dateTime: "2024-08-24",
        title: "Heresy is born",
        description: "Heresy was originally created."
    },
    {
        date: "September 13, 2024",
        dateTime: "2024-09-13",
        title: "Heresy is properly maintained",
        description: "Heresy begins to receive regular maintenance."
    },
    {
        date: "March 6, 2025",
        dateTime: "2025-03-06",
        title: "Vortex is born",
        description: "Vortex is created, beginning a new chapter for the project."
    },
    {
        date: "March 24, 2025",
        dateTime: "2025-03-24",
        title: "Vortex takes Heresy's place",
        description: "Heresy is retired, and Vortex takes its place entirely."
    },
    {
        date: "October 11, 2025",
        dateTime: "2025-10-11",
        title: "Vortex ownership is separated",
        description: "Ownership of Vortex is separated, and the bot is left merely abandoned."
    },
    {
        date: "September 9, 2026",
        title: "Vortex's planned end date is moved forward",
        description:
            "Vortex was originally planned to be dropped on September 9, 2026. The planned shutdown was later moved forward to December 27, 2026."
    },
    {
        date: "October 1, 2026",
        dateTime: "2026-10-01",
        title: "Axis is born",
        description: "Axis begins development as the successor to Vortex."
    },
    {
        date: "December 26, 2026",
        dateTime: "2026-12-26",
        title: "Axis takes over",
        description: "Axis is planned to take over from Vortex."
    },
    {
        date: "December 27, 2026",
        dateTime: "2026-12-27",
        title: "Vortex is laid to rest",
        description: "Vortex is planned to reach its final day."
    }
]

export default function TimelinePage() {
    return (
        <div className="archive-story-shell">
            <span className="archive-eyebrow">Heresy → Vortex → Axis</span>
            <h1 className="archive-story-title">
                The rise & fall of
                <br />
                <em>Heresy & Vortex.</em>
            </h1>
            <p className="archive-story-deck">
                From Heresy&apos;s beginning to Vortex&apos;s rise and fall, and Axis&apos;s planned
                succession.
            </p>

            <ol className="archive-timeline" aria-label="Heresy, Vortex, and Axis timeline">
                {milestones.map(milestone => (
                    <li className="archive-timeline-item" key={milestone.title}>
                        <span className="archive-timeline-marker" aria-hidden="true" />
                        <article className="archive-timeline-card">
                            {milestone.dateTime ? (
                                <time dateTime={milestone.dateTime}>{milestone.date}</time>
                            ) : (
                                <span>{milestone.date}</span>
                            )}
                            <h2>{milestone.title}</h2>
                            <p>{milestone.description}</p>
                        </article>
                    </li>
                ))}
            </ol>
        </div>
    )
}
