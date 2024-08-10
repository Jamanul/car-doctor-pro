import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const middleware = async(request)=>{
const token = request.cookies.get('next-auth.session-token')
const pathname = request.nextUrl.pathname
console.log(pathname)
if(!token){
    return NextResponse.redirect(new URL(`/signin?redirect=${pathname}`, request.url))
}
console.log(token)
return NextResponse.next()
}

export const config = {
    matcher: ['/my-bookings/:path*','/service/:path*']
  }