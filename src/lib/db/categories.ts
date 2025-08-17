import { createClient } from '@/lib/supabase/server'
import type { CategoryWithChildren } from '@/types'

export async function getCategories(): Promise<CategoryWithChildren[]> {
  const supabase = createClient()
  
  const { data: categories, error } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  if (error) {
    console.error('Error fetching categories:', error)
    throw new Error('Failed to fetch categories')
  }

  // Build tree structure
  const categoryMap = new Map()
  const rootCategories: CategoryWithChildren[] = []

  // First pass: create all categories with empty children arrays
  categories?.forEach(category => {
    categoryMap.set(category.id, { ...category, children: [] })
  })

  // Second pass: build tree structure
  categories?.forEach(category => {
    const categoryWithChildren = categoryMap.get(category.id)
    
    if (category.parent_id) {
      const parent = categoryMap.get(category.parent_id)
      if (parent) {
        parent.children.push(categoryWithChildren)
      }
    } else {
      rootCategories.push(categoryWithChildren)
    }
  })

  return rootCategories
}

export async function getCategoryBySlug(slug: string): Promise<CategoryWithChildren | null> {
  const supabase = createClient()
  
  const { data: category, error } = await supabase
    .from('categories')
    .select(`
      *,
      parent:categories!parent_id(*),
      children:categories!parent_id(*)
    `)
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching category:', error)
    return null
  }

  // Get product count for this category
  const { count } = await supabase
    .from('product_categories')
    .select('*', { count: 'exact', head: true })
    .eq('category_id', category.id)

  return {
    ...category,
    product_count: count || 0
  }
}

export async function getTopCategories(limit: number = 6): Promise<CategoryWithChildren[]> {
  const supabase = createClient()
  
  const { data: categories, error } = await supabase
    .from('categories')
    .select('*')
    .is('parent_id', null)
    .limit(limit)

  if (error) {
    console.error('Error fetching top categories:', error)
    throw new Error('Failed to fetch top categories')
  }

  // Get product counts for each category
  const categoriesWithCounts = await Promise.all(
    (categories || []).map(async (category) => {
      const { count } = await supabase
        .from('product_categories')
        .select('*', { count: 'exact', head: true })
        .eq('category_id', category.id)

      return {
        ...category,
        product_count: count || 0,
        children: []
      }
    })
  )

  return categoriesWithCounts
}