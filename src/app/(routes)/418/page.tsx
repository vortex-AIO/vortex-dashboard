import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  return new NextResponse(
    `<html>
      <head><title>418 I'm a teapot</title></head>
      <body>
        <h1>418 - I'm a teapot </h1>
        <p>The requested entity body is short and stout.</p>
      </body>
    </html>`,
    {
      status: 418,
      headers: { 'Content-Type': 'text/html' },
    }
  );
}

export default function Page() {
  throw new Response("I'm a teapot", { status: 418 });
}