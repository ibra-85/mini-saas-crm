import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

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

    // Get session using better-auth API (validates the session properly)
    const session = await auth.api.getSession({
        headers: request.headers,
    });

    // If trying to access protected route without valid session, redirect to login
    if (isProtectedRoute && !session?.user) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // If trying to access auth route with valid session, redirect to dashboard
    if (isAuthRoute && session?.user) {
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

