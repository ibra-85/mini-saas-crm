import { NextRequest, NextResponse } from "next/server";

// Routes that require authentication
const protectedRoutes = ["/dashboard"];

// Routes that should redirect to dashboard if already authenticated  
const authRoutes = ["/login", "/register"];

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if the route is protected or auth route
    const isProtectedRoute = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );
    const isAuthRoute = authRoutes.some((route) =>
        pathname.startsWith(route)
    );

    // If not a protected or auth route, continue
    if (!isProtectedRoute && !isAuthRoute) {
        return NextResponse.next();
    }

    // Check for session cookie (Better Auth uses "better-auth.session_token" by default)
    const sessionCookie = request.cookies.get("better-auth.session_token");
    const hasSession = !!sessionCookie?.value;

    // If trying to access protected route without session, redirect to login
    if (isProtectedRoute && !hasSession) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // If trying to access auth route with session, redirect to dashboard
    if (isAuthRoute && hasSession) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)",
    ],
};

