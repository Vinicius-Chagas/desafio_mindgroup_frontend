import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';


export function middleware(request:any) {

  if (request.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const cookiesList = cookies();
  const token = cookiesList.get('token');

  if (!token && request.nextUrl.pathname !== '/' && request.nextUrl.pathname !== '/register') {
    const url = 'http://localhost:3000'

    return NextResponse.redirect(url);
  }
}