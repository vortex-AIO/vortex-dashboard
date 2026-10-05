import { NextResponse } from "next/server"

export const dynamic = "force-static"

export function GET() {
    return new NextResponse("I'm a teapot.", { status: 418 })
}