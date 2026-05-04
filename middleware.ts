import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  if (host.includes('vercel.app')) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return NextResponse.next();
}
