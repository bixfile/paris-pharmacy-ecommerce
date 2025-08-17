import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { AuthTabs } from '@/components/auth/auth-tabs'

export const metadata: Metadata = {
  title: 'Sign In | Paris Pharmacy',
  description: 'Sign in to your Paris Pharmacy account to access your orders, wishlist, and personalized recommendations.',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function AuthPage() {
  // Check if user is already authenticated
  const supabase = createClient()
  
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (user) {
      redirect('/')
    }
  } catch (error) {
    // If there's any error, just continue to show the auth page
    console.log('Auth check skipped:', error)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Welcome to Paris Pharmacy
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to your account or create a new one
          </p>
        </div>
        <AuthTabs />
      </div>
    </div>
  )
}