"use client"
import { Gradient } from "@/components/gradient"
import "@/styles/globals.css"
import { useEffect } from "react"

export const MeshGradient = () => {
    useEffect(() => {
        const gradient = new Gradient()
        gradient.initGradient("#gradient-canvas")
    }, [])
    return (
        <>
            <canvas style={{ opacity: 0.4 }} id="gradient-canvas" data-transition-in />
        </>
    )
}
