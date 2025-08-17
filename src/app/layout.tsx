import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/context/auth-context'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paris Pharmacy | Premium Health & Wellness Products',
  description: 'Shop premium pharmacy products with fast delivery. Health & wellness products curated by experts.',
  keywords: ['pharmacy', 'health', 'wellness', 'supplements', 'beauty', 'skincare'],
  authors: [{ name: 'Paris Pharmacy' }],
  creator: 'Paris Pharmacy',
  publisher: 'Paris Pharmacy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://parispharmacy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Paris Pharmacy | Premium Health & Wellness Products',
    description: 'Shop premium pharmacy products with fast delivery. Health & wellness products curated by experts.',
    url: 'https://parispharmacy.com',
    siteName: 'Paris Pharmacy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Paris Pharmacy - Premium Health & Wellness Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paris Pharmacy | Premium Health & Wellness Products',
    description: 'Shop premium pharmacy products with fast delivery. Health & wellness products curated by experts.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div id="root">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}