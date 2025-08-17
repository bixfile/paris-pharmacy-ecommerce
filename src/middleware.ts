import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import type { Database } from '@/types/database'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // Skip middleware for static files and API routes
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return response
  }

  try {
    const supabase = createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            request.cookies.set({
              name,
              value,
              ...options,
            })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.set({
              name,
              value,
              ...options,
            })
          },
          remove(name: string, options: CookieOptions) {
            request.cookies.set({
              name,
              value: '',
              ...options,
            })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.set({
              name,
              value: '',
              ...options,
            })
          },
        },
      }
    )

    // Refresh session if expired - required for Server Components
    const { data: { session } } = await supabase.auth.getSession()

    // Protected admin routes
    if (request.nextUrl.pathname.startsWith('/admin')) {
      if (!session) {
        return NextResponse.redirect(new URL('/auth?redirectTo=/admin', request.url))
      }

      // Check if user has admin role (optional - can be skipped if no users yet)
      try {
        const { data: userRole } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', session.user.id)
          .single()

        if (!userRole || userRole.role !== 'admin') {
          return NextResponse.redirect(new URL('/', request.url))
        }
      } catch (error) {
        // If no user_roles table or user, allow access for initial setup
        console.log('User role check skipped:', error)
      }
    }

    // Protected user routes
    if (request.nextUrl.pathname.startsWith('/account')) {
      if (!session) {
        return NextResponse.redirect(new URL('/auth', request.url))
      }
    }

    // Redirect authenticated users away from auth pages
    if (request.nextUrl.pathname.startsWith('/auth') && session) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return response
  } catch (error) {
    // If there's an error with Supabase, just continue without auth checks
    console.log('Middleware auth check failed:', error)
    return response
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images folder (static images)
     * - api/webhooks (Stripe webhooks)
     */
    '/((?!_next/static|_next/image|favicon.ico|images|api/webhooks|robots.txt|sitemap.xml).*)',
  ],
}