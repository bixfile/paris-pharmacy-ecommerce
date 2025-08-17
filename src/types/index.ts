import type { Database } from './database'

// Database table types
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type InsertTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type UpdateTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']

// Specific table types
export type Profile = Tables<'profiles'>
export type UserRole = Tables<'user_roles'>
export type UserAddress = Tables<'user_addresses'>
export type UserCart = Tables<'user_carts'>
export type Category = Tables<'categories'>
export type Brand = Tables<'brands'>
export type Product = Tables<'products'>
export type ProductCategory = Tables<'product_categories'>
export type ProductImage = Tables<'product_images'>
export type ProductAttribute = Tables<'product_attributes'>
export type AttributeValue = Tables<'attribute_values'>
export type ProductAttributeLink = Tables<'product_attribute_links'>
export type ProductVariation = Tables<'product_variations'>
export type VariationAttribute = Tables<'variation_attributes'>
export type VariationImage = Tables<'variation_images'>
export type Order = Tables<'orders'>
export type OrderItem = Tables<'order_items'>
export type Coupon = Tables<'coupons'>
export type OrderCoupon = Tables<'order_coupons'>
export type StockLog = Tables<'stock_logs'>
export type Review = Tables<'reviews'>
export type ReviewReply = Tables<'review_replies'>
export type ReviewHelpfulness = Tables<'review_helpfulness'>
export type Wishlist = Tables<'wishlists'>
export type HeroSlide = Tables<'hero_slides'>
export type StoreSetting = Tables<'store_settings'>

// Enhanced types with relationships
export type ProductWithDetails = Product & {
  brand?: Brand
  categories?: Category[]
  images?: ProductImage[]
  variations?: ProductVariation[]
  reviews?: Review[]
  average_rating?: number
  review_count?: number
}

export type CategoryWithChildren = Category & {
  children?: Category[]
  parent?: Category
  product_count?: number
}

export type OrderWithItems = Order & {
  items: (OrderItem & {
    product: Product
    variation?: ProductVariation
  })[]
  coupons?: (OrderCoupon & {
    coupon: Coupon
  })[]
  user?: Profile
}

export type ReviewWithUser = Review & {
  user: Profile
  replies?: (ReviewReply & {
    user: Profile
  })[]
}

export type CartItem = {
  id: string
  product_id: string
  variation_id?: string
  quantity: number
  product: Product
  variation?: ProductVariation
}

export type SearchFilters = {
  category?: string
  brand?: string
  min_price?: number
  max_price?: number
  in_stock?: boolean
  featured?: boolean
  sort_by?: 'name' | 'price' | 'created_at' | 'rating'
  sort_order?: 'asc' | 'desc'
  search?: string
}

export type PaginatedResponse<T> = {
  data: T[]
  count: number
  page: number
  per_page: number
  total_pages: number
}

// API Response types
export type ApiResponse<T = any> = {
  data?: T
  error?: string
  message?: string
}

// Form types
export type LoginForm = {
  email: string
  password: string
}

export type RegisterForm = {
  email: string
  password: string
  first_name: string
  last_name: string
}

export type CheckoutForm = {
  email?: string
  first_name: string
  last_name: string
  phone?: string
  shipping_address: {
    address_line1: string
    address_line2?: string
    city: string
    state?: string
    postal_code: string
    country: string
  }
  billing_address: {
    address_line1: string
    address_line2?: string
    city: string
    state?: string
    postal_code: string
    country: string
  }
  same_as_shipping: boolean
}

export type ProductForm = {
  name: string
  description: string
  slug: string
  price: number
  sale_price?: number
  image_url?: string
  sku: string
  stock_quantity: number
  in_stock: boolean
  featured: boolean
  status: 'draft' | 'published' | 'archived'
  product_type: 'simple' | 'variable'
  brand_id?: string
  category_ids: string[]
  meta_title?: string
  meta_description?: string
  focus_keyword?: string
}

// Utility types
export type UserRole_Type = 'admin' | 'customer'
export type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled'
export type ProductStatus = 'draft' | 'published' | 'archived'
export type ReviewStatus = 'pending' | 'approved' | 'rejected'
export type CouponType = 'percentage' | 'fixed_amount' | 'free_shipping'
export type AddressType = 'shipping' | 'billing' | 'both'