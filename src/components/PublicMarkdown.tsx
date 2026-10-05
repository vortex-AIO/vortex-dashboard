"use client"

import { markdownToHtml } from "simple-markdown"
import { useEffect, useState } from "react"

export default function PublicMarkdown({ filePath }: { filePath: string }) {
    const [markdown, setMarkdown] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const controller = new AbortController()

        fetch(filePath, { signal: controller.signal, cache: "no-store" })
            .then(response => {
                if (!response.ok) {
                    throw new Error(
                        `The Markdown file could not be loaded (HTTP ${response.status}).`
                    )
                }
                return response.text()
            })
            .then(setMarkdown)
            .catch(fetchError => {
                if (fetchError instanceof Error && fetchError.name === "AbortError") {
                    return
                }
                console.error(`Unable to load Markdown file ${filePath}:`, fetchError)
                setError(
                    fetchError instanceof Error
                        ? fetchError.message
                        : "The Markdown file could not be loaded."
                )
            })

        return () => controller.abort()
    }, [filePath])

    if (error) {
        return <p className="archive-story-error" role="alert">{error}</p>
    }

    if (markdown === null) {
        return (
            <p className="archive-story-empty" aria-live="polite">
                Loading…
            </p>
        )
    }

    if (!markdown.trim()) {
        const publicFilePath = `public${filePath}`
        return (
            <p className="archive-story-empty">
                This page is waiting to be written. Add content to <code>{publicFilePath}</code>.
            </p>
        )
    }

    return (
        <article
            className="archive-markdown"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(markdown) }}
        />
    )
}
