import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);
const isAdminRoute = createRouteMatcher(['/results(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();

    if (isAdminRoute(req)) {
      const { sessionClaims } = await auth() as unknown as { sessionClaims: { metadata: { role: string } } };

      if (sessionClaims?.metadata?.role !== 'admin') {
        const url = new URL('/', req.url);
        return NextResponse.redirect(url);
      }
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};