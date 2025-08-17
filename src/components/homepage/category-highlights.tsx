import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { getTopCategories } from '@/lib/db/categories'

export async function CategoryHighlights() {
  // Mock categories for now
  const mockCategories = [
    {
      id: '1',
      name: 'Skincare',
      slug: 'skincare',
      description: 'Premium skincare products for all skin types',
      parent_id: null,
      image_url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      meta_title: null,
      meta_description: null,
      focus_keyword: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      product_count: 45,
      children: [],
    },
    {
      id: '2',
      name: 'Supplements',
      slug: 'supplements',
      description: 'High-quality vitamins and nutritional supplements',
      parent_id: null,
      image_url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      meta_title: null,
      meta_description: null,
      focus_keyword: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      product_count: 62,
      children: [],
    },
    {
      id: '3',
      name: 'Beauty',
      slug: 'beauty',
      description: 'Professional beauty and cosmetic products',
      parent_id: null,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
      meta_title: null,
      meta_description: null,
      focus_keyword: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      product_count: 38,
      children: [],
    },
    {
      id: '4',
      name: 'Wellness',
      slug: 'wellness',
      description: 'Products for overall health and wellness',
      parent_id: null,
      image_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      meta_title: null,
      meta_description: null,
      focus_keyword: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      product_count: 29,
      children: [],
    },
    {
      id: '5',
      name: 'Baby Care',
      slug: 'baby-care',
      description: 'Safe and gentle products for babies and children',
      parent_id: null,
      image_url: 'https://images.unsplash.com/photo-1544536648-7ad8f9ee6aaa?w=400',
      meta_title: null,
      meta_description: null,
      focus_keyword: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      product_count: 24,
      children: [],
    },
    {
      id: '6',
      name: 'Personal Care',
      slug: 'personal-care',
      description: 'Essential personal care and hygiene products',
      parent_id: null,
      image_url: 'https://images.unsplash.com/photo-1556909114-b72234f7e440?w=400',
      meta_title: null,
      meta_description: null,
      focus_keyword: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      product_count: 51,
      children: [],
    },
  ]

  // Always use mock categories for now to ensure design works
  const categories = mockCategories

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of health and wellness categories, 
            each carefully curated by our expert pharmacists.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`}>
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image_url || '/placeholder-category.jpg'}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm text-white/90 mb-2">
                        {category.description}
                      </p>
                      <p className="text-xs text-white/80">
                        {category.product_count} products
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}