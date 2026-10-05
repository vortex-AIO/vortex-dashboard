import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                vortex: {
                    "100": "#141114",
                    "200": "#171512",
                    "300": "#211e19",
                    "400": "#191714",
                    "500": "#25211b",
                    "600": "#171512",
                    "700": "#3b352b",
                    "900": "#191714",
                    unselected: "#a59e91",
                    main: "#c5aa72",
                    border: "#28231c",
                    "card-border": "#302a21",
                    secondary: "#aaa398",
                    dim: "#201c16",
                    discord: "#5968de"
                },
                kazu: {
                    "100": "#100f0d",
                    "200": "#171512",
                    "300": "#211e19",
                    "400": "#191714",
                    "500": "#25211b",
                    "600": "#c5aa72",
                    "700": "#a59e91",
                    "900": "#191714",
                    main: "#c5aa72",
                    pink: "#c5aa72",
                    "card-border": "#302a21",
                    discord: "#5968de",
                    dim: "#201c16"
                }
            },
            animation: {
                glow: "glow 1.5s ease-in-out infinite"
            }
        }
    },
    plugins: []
}
export default config
