import type { Metadata } from 'next'
import { HeroSection } from '@/components/homepage/hero-section'
import { FeaturedProducts } from '@/components/homepage/featured-products'
import { CategoryHighlights } from '@/components/homepage/category-highlights'
import { generateStructuredData } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Home | Paris Pharmacy',
  description: 'Discover premium health and wellness products at Paris Pharmacy. Shop skincare, supplements, beauty products and more with fast delivery.',
  openGraph: {
    title: 'Home | Paris Pharmacy',
    description: 'Discover premium health and wellness products at Paris Pharmacy. Shop skincare, supplements, beauty products and more with fast delivery.',
    url: '/',
  },
}

const organizationSchema = generateStructuredData('Organization', {})
const websiteSchema = generateStructuredData('WebSite', {})

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema]),
        }}
      />
      
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoryHighlights />
      </main>
    </>
  )
}