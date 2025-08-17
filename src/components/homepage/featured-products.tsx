import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product/product-card'
import { getFeaturedProducts } from '@/lib/db/products'

export async function FeaturedProducts() {
  // For now, we'll use mock data since the database might not have products yet
  const mockProducts = [
    {
      id: '1',
      name: 'Premium Vitamin C Serum',
      description: 'High-quality vitamin C serum for radiant skin',
      slug: 'premium-vitamin-c-serum',
      price: 45.99,
      sale_price: 35.99,
      image_url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      sku: 'VIT-C-001',
      stock_quantity: 100,
      in_stock: true,
      featured: true,
      status: 'published' as const,
      product_type: 'simple' as const,
      has_variations: false,
      brand_id: null,
      meta_title: null,
      meta_description: null,
      focus_keyword: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      brand: {
        id: '1',
        name: 'SkinCare Pro',
        slug: 'skincare-pro',
        description: 'Professional skincare brand',
        logo_url: null,
        meta_title: null,
        meta_description: null,
        focus_keyword: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      average_rating: 4.8,
      review_count: 127,
    },
    {
      id: '2',
      name: 'Omega-3 Fish Oil Capsules',
      description: 'High-potency omega-3 supplement for heart health',
      slug: 'omega-3-fish-oil-capsules',
      price: 29.99,
      sale_price: null,
      image_url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      sku: 'OMEGA-001',
      stock_quantity: 50,
      in_stock: true,
      featured: true,
      status: 'published' as const,
      product_type: 'simple' as const,
      has_variations: false,
      brand_id: null,
      meta_title: null,
      meta_description: null,
      focus_keyword: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      brand: {
        id: '2',
        name: 'HealthMax',
        slug: 'healthmax',
        description: 'Premium supplements brand',
        logo_url: null,
        meta_title: null,
        meta_description: null,
        focus_keyword: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      average_rating: 4.6,
      review_count: 89,
    },
    {
      id: '3',
      name: 'Hydrating Night Cream',
      description: 'Rich moisturizing cream for overnight skin repair',
      slug: 'hydrating-night-cream',
      price: 39.99,
      sale_price: null,
      image_url: 'https://images.unsplash.com/photo-1570194065650-d99fb4d1b685?w=400',
      sku: 'NIGHT-001',
      stock_quantity: 75,
      in_stock: true,
      featured: true,
      status: 'published' as const,
      product_type: 'simple' as const,
      has_variations: false,
      brand_id: null,
      meta_title: null,
      meta_description: null,
      focus_keyword: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      brand: {
        id: '1',
        name: 'SkinCare Pro',
        slug: 'skincare-pro',
        description: 'Professional skincare brand',
        logo_url: null,
        meta_title: null,
        meta_description: null,
        focus_keyword: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      average_rating: 4.7,
      review_count: 156,
    },
    {
      id: '4',
      name: 'Multivitamin Complex',
      description: 'Complete daily multivitamin for optimal health',
      slug: 'multivitamin-complex',
      price: 24.99,
      sale_price: 19.99,
      image_url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
      sku: 'MULTI-001',
      stock_quantity: 120,
      in_stock: true,
      featured: true,
      status: 'published' as const,
      product_type: 'simple' as const,
      has_variations: false,
      brand_id: null,
      meta_title: null,
      meta_description: null,
      focus_keyword: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      brand: {
        id: '2',
        name: 'HealthMax',
        slug: 'healthmax',
        description: 'Premium supplements brand',
        logo_url: null,
        meta_title: null,
        meta_description: null,
        focus_keyword: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      average_rating: 4.5,
      review_count: 203,
    },
  ]

  try {
    // Try to get featured products from database, fallback to mock data
    // const products = await getFeaturedProducts(8)
    const products = mockProducts
    
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular and highly-rated health and wellness products, 
              carefully selected by our expert pharmacists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">
                View All Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error loading featured products:', error)
    
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground mb-8">
              Featured products will appear here once your database is connected.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }
}