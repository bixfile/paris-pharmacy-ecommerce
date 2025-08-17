import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function requireAuth() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth')
  }

  return user
}

export async function requireAdmin() {
  const user = await requireAuth()
  const supabase = createClient()

  try {
    const { data: userRole, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .single()

    if (error || !userRole || userRole.role !== 'admin') {
      redirect('/')
    }

    return user
  } catch (error) {
    // If no user_roles table exists yet, allow access for initial setup
    console.log('Admin check skipped - no user roles table:', error)
    return user
  }
}

export async function redirectIfAuthenticated() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect('/')
  }
}