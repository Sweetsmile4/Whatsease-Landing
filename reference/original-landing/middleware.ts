import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Get the path
  const { pathname } = request.nextUrl;

  // Check for token in cookies (more secure than localStorage for server-side)
  const token =
    request.cookies.get('auth_token')?.value ||
    // Fallback to token in authorization header if present
    request.headers.get('authorization')?.replace('Bearer ', '');

  // Auth pages that should redirect to dashboard if logged in
  const authPages = ['/login', '/signup', '/forgot-password'];

  // Protected pages that require authentication
  const protectedPages = ['/dashboard'];

  // Pages that don't require subscription check
  const subscriptionExemptPages = [
    '/dashboard/subscription-expired',
    '/dashboard/settings?tab=billing',
    '/dashboard/settings',
    '/team-invitation',
  ];

  // Check if user is on an auth page and has a token
  if (authPages.some((page) => pathname.startsWith(page)) && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Check if user is on a protected page and doesn't have a token
  if (protectedPages.some((page) => pathname.startsWith(page)) && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Check subscription status for protected pages (except exempt pages)
  if (
    protectedPages.some((page) => pathname.startsWith(page)) &&
    !subscriptionExemptPages.some((page) => pathname.startsWith(page)) &&
    token
  ) {
    try {
      // Use the backend API URL - in middleware, we need to use the env var directly
      const backendApiUrl = process.env.NEXT_PUBLIC_API_URL;
      
      console.log('[Middleware] Checking subscription for path:', pathname);
      console.log('[Middleware] Backend API URL:', backendApiUrl);
      
      const meResponse = await fetch(
        `${backendApiUrl}/auth/me`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('[Middleware] Auth/me response status:', meResponse.status);

      if (meResponse.ok) {
        const userData = await meResponse.json();
        const subscription = userData.subscription;

        console.log('[Middleware] Full user data received:', JSON.stringify(userData, null, 2));
        const userRole = typeof userData.role === 'string' ? userData.role.toLowerCase() : '';
        const isTeamSeatUser =
          !!userData.team_id && (userRole === 'member' || userRole === 'admin');

        console.log('[Middleware] User data check:', {
          has_subscription: !!subscription,
          is_expired: subscription?.is_expired,
          has_team_id: !!userData.team_id,
          team_id_value: userData.team_id,
          user_id: userData.id,
          role: userData.role,
          is_team_seat_user: isTeamSeatUser,
        });

        // Team seat users (member/admin) can access through team ownership plan.
        // Team owners must have their own active subscription.
        if (isTeamSeatUser) {
          console.log('[Middleware] ✅ Team seat user - allowing access (team_id:', userData.team_id, ')');
          return NextResponse.next();
        }

        // Fallback: Check team membership directly if team_id not in response
        // This handles cases where backend hasn't restarted yet
        if (userData.id && !userData.team_id) {
          try {
            const teamMemberResponse = await fetch(
              `${backendApiUrl}/teams/my-teams`,
              {
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
              }
            );

            if (teamMemberResponse.ok) {
              const teamsData = await teamMemberResponse.json();
              // Only allow subscription bypass for team-seat roles, not owners.
              const hasSeatRole =
                Array.isArray(teamsData) &&
                teamsData.some((team: { role?: string }) => {
                  const role = typeof team?.role === 'string' ? team.role.toLowerCase() : '';
                  return role === 'member' || role === 'admin';
                });

              if (hasSeatRole) {
                console.log('[Middleware] ✅ User has team-seat role - allowing access');
                return NextResponse.next();
              }
            }
          } catch (teamError) {
            console.error('[Middleware] Error checking team membership:', teamError);
            // Continue to subscription check
          }
        }

        // Check if subscription exists and is expired
        if (subscription) {
          // Check is_expired flag
          if (subscription.is_expired === true) {
            console.log('[Middleware] ❌ Subscription expired - redirecting');
            return NextResponse.redirect(
              new URL('/dashboard/subscription-expired', request.url)
            );
          }

          // Also check expiry_date if available
          if (subscription.expiry_date) {
            const expiryDate = new Date(subscription.expiry_date);
            const now = new Date();

            if (now > expiryDate) {
              console.log('[Middleware] ❌ Subscription past expiry date - redirecting');
              return NextResponse.redirect(
                new URL('/dashboard/subscription-expired', request.url)
              );
            }
          }
          
          console.log('[Middleware] ✅ Subscription active - allowing access');
        } else {
          // No subscription and no team - redirect to expired page
          console.log('[Middleware] ❌ No subscription and no team - redirecting');
          return NextResponse.redirect(
            new URL('/dashboard/subscription-expired', request.url)
          );
        }
      } else {
        console.error('[Middleware] Failed to fetch user data:', meResponse.status);
      }
    } catch (error) {
      console.error('[Middleware] Error checking subscription status:', error);
      // On error, for security, redirect to expired page rather than allowing access
      return NextResponse.redirect(
        new URL('/dashboard/subscription-expired', request.url)
      );
    }
  }

  // If user is on subscription-expired page but has active subscription, redirect to dashboard
  if (pathname.startsWith('/dashboard/subscription-expired') && token) {
    try {
      const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || process.env.BACKEND_API_URL || 'http://127.0.0.1:8000';
      const meResponse = await fetch(
        `${backendApiUrl}/auth/me`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (meResponse.ok) {
        const userData = await meResponse.json();
        const subscription = userData.subscription;

        // Check if subscription is active and not expired
        if (subscription && subscription.is_expired === false) {
          if (subscription.expiry_date) {
            const expiryDate = new Date(subscription.expiry_date);
            const now = new Date();

            if (now < expiryDate) {
              return NextResponse.redirect(new URL('/dashboard', request.url));
            }
          } else {
            // No expiry date but not expired, allow access
            return NextResponse.redirect(new URL('/dashboard', request.url));
          }
        }
      }
    } catch (error) {
      console.error('Error checking subscription status:', error);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/signup', '/forgot-password', '/dashboard/:path*'],
};
