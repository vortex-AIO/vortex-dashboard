import { NextResponse } from 'next/server';

export function GET() {
  return new NextResponse("I'm a teapot.", { status: 418 });
}