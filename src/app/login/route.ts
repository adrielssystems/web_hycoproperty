import { NextResponse } from 'next/server';

export async function GET() {
  const targetUrl =
    process.env.CLIENT_PORTAL_URL ||
    process.env.NEXT_PUBLIC_CLIENT_PORTAL_URL ||
    'https://portal.hycopropertymanagement.com';

  return NextResponse.redirect(targetUrl, 307);
}
