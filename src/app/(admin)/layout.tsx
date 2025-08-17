import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check authentication at layout level
  const supabase = createClient()
  
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error || !user) {
      redirect('/auth?redirectTo=/admin')
    }
  } catch (error) {
    // If there's any error, redirect to auth
    console.log('Admin auth check failed:', error)
    redirect('/auth?redirectTo=/admin')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
}