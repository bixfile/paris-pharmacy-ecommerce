import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Paris Pharmacy',
  description: 'Admin dashboard for managing Paris Pharmacy operations.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminDashboard() {
  // Authentication is handled at layout level

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
            <p className="text-3xl font-bold text-primary">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Products</h3>
            <p className="text-3xl font-bold text-primary">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Customers</h3>
            <p className="text-3xl font-bold text-primary">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-primary">€0</p>
          </div>
        </div>
      </div>
    </main>
  )
}