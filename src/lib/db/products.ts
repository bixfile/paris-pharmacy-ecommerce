import { createClient } from '@/lib/supabase/server'
import type { ProductWithDetails, SearchFilters, PaginatedResponse } from '@/types'

export async function getProducts(
  filters: SearchFilters = {},
  page: number = 1,
  perPage: number = 20
): Promise<PaginatedResponse<ProductWithDetails>> {
  const supabase = createClient()
  
  let query = supabase
    .from('products')
    .select(`
      *,
      brand:brands(*),
      categories:product_categories(
        category:categories(*)
      ),
      images:product_images(*)
    `)
    .eq('status', 'published')

  // Apply filters
  if (filters.category) {
    query = query.eq('product_categories.category.slug', filters.category)
  }

  if (filters.brand) {
    query = query.eq('brands.slug', filters.brand)
  }

  if (filters.min_price) {
    query = query.gte('price', filters.min_price)
  }

  if (filters.max_price) {
    query = query.lte('price', filters.max_price)
  }

  if (filters.in_stock !== undefined) {
    query = query.eq('in_stock', filters.in_stock)
  }

  if (filters.featured !== undefined) {
    query = query.eq('featured', filters.featured)
  }

  if (filters.search) {
    query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`)
  }

  // Apply sorting
  const sortBy = filters.sort_by || 'created_at'
  const sortOrder = filters.sort_order || 'desc'
  query = query.order(sortBy, { ascending: sortOrder === 'asc' })

  // Apply pagination
  const from = (page - 1) * perPage
  const to = from + perPage - 1
  
  const { data: products, error, count } = await query
    .range(from, to)

  if (error) {
    console.error('Error fetching products:', error)
    throw new Error('Failed to fetch products')
  }

  const totalPages = Math.ceil((count || 0) / perPage)

  return {
    data: products || [],
    count: count || 0,
    page,
    per_page: perPage,
    total_pages: totalPages,
  }
}

export async function getProductBySlug(slug: string): Promise<ProductWithDetails | null> {
  const supabase = createClient()
  
  const { data: product, error } = await supabase
    .from('products')
    .select(`
      *,
      brand:brands(*),
      categories:product_categories(
        category:categories(*)
      ),
      images:product_images(*),
      variations:product_variations(*),
      reviews:reviews(
        *,
        user:profiles(first_name, last_name)
      )
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) {
    console.error('Error fetching product:', error)
    return null
  }

  // Calculate average rating and review count
  if (product.reviews && product.reviews.length > 0) {
    const totalRating = product.reviews.reduce((sum: number, review: any) => sum + review.rating, 0)
    product.average_rating = totalRating / product.reviews.length
    product.review_count = product.reviews.length
  }

  return product
}

export async function getFeaturedProducts(limit: number = 8): Promise<ProductWithDetails[]> {
  const supabase = createClient()
  
  const { data: products, error } = await supabase
    .from('products')
    .select(`
      *,
      brand:brands(*),
      categories:product_categories(
        category:categories(*)
      ),
      images:product_images(*)
    `)
    .eq('status', 'published')
    .eq('featured', true)
    .limit(limit)

  if (error) {
    console.error('Error fetching featured products:', error)
    throw new Error('Failed to fetch featured products')
  }

  return products || []
}

export async function getRelatedProducts(
  productId: string, 
  categoryIds: string[], 
  limit: number = 4
): Promise<ProductWithDetails[]> {
  const supabase = createClient()
  
  const { data: products, error } = await supabase
    .from('products')
    .select(`
      *,
      brand:brands(*),
      categories:product_categories(
        category:categories(*)
      ),
      images:product_images(*)
    `)
    .eq('status', 'published')
    .in('product_categories.category_id', categoryIds)
    .neq('id', productId)
    .limit(limit)

  if (error) {
    console.error('Error fetching related products:', error)
    return []
  }

  return products || []
}

export async function searchProducts(
  query: string,
  limit: number = 10
): Promise<ProductWithDetails[]> {
  const supabase = createClient()
  
  const { data: products, error } = await supabase
    .from('products')
    .select(`
      *,
      brand:brands(*)
    `)
    .eq('status', 'published')
    .or(`name.ilike.%${query}%,description.ilike.%${query}%,brands.name.ilike.%${query}%`)
    .limit(limit)

  if (error) {
    console.error('Error searching products:', error)
    return []
  }

  return products || []
}