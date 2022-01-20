import { getToken, GetTokenParams } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // login 한 유저 => token exists
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  // Allow the requests if the following is true
  // 1) next-auth 로의 요청 (로그인 등)
  // 2) the token exists
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // Rediret to login (토큰이 없는데 요청이 들어 올 경우)
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
