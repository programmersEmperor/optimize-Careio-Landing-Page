import { NextRequest, NextResponse } from "next/server"

let locales = ['ar', 'en']
let defaultLocale = 'ar'


export default function middleware(request: NextRequest){
    const { pathname } = request.nextUrl
       
    const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
   
    if (pathnameHasLocale) {
      return NextResponse.next(); 
    }
   
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}


export const config = {
    matcher: ['/((?!api|fonts|_next/static|_next/image|favicon.ico|images|icons).*)'],
  };