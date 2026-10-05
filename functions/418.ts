export function onRequest() {
    return new Response("I'm a teapot.", { status: 418 })
}
