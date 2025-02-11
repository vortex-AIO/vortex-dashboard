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
                heresy: {
                    "100": "#141114",
                    "200": "#111212",
                    "300": "#1F2020",
                    "400": "#161717",
                    "500": "#1B1C1C",
                    "600": "#111212",
                    "700": "#333434",
                    "900": "#161717",
                    unselected: "#A2A2A2",
                    main: "#94A8AE",
                    border: "#0f0f0e",
                    "card-border": "#232424",
                    secondary: "#919191",
                    dim: "#1c1c1c",
                    discord: "#5968de"
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
