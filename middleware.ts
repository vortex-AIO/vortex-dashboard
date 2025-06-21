// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const hostname = req.headers.get('host') || ''

    if (hostname.startsWith('docs.playfairs.cc')) {
        const url = req.nextUrl.clone()
        url.pathname = '/docs'
        return NextResponse.rewrite(url)
    }
    return NextResponse.next()
}

