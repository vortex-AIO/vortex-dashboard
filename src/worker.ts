interface Env {
    ASSETS: {
        fetch(request: Request): Promise<Response>
    }
}

const worker = {
    async fetch(request: Request, env: Env): Promise<Response> {
        const url = new URL(request.url)

        if (url.pathname.replace(/\/+$/, "") === "/418") {
            return new Response("I'm a teapot.", { status: 418 })
        }

        return env.ASSETS.fetch(request)
    }
}

export default worker
