export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          first_name: string | null
          last_name: string | null
          email: string
          avatar_url: string | null
          phone: string | null
          address: string | null
          city: string | null
          state: string | null
          country: string | null
          postal_code: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          first_name?: string | null
          last_name?: string | null
          email: string
          avatar_url?: string | null
          phone?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          country?: string | null
          postal_code?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string | null
          last_name?: string | null
          email?: string
          avatar_url?: string | null
          phone?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          country?: string | null
          postal_code?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      user_roles: {
        Row: {
          id: string
          user_id: string
          role: 'admin' | 'customer'
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          role: 'admin' | 'customer'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          role?: 'admin' | 'customer'
          created_at?: string
        }
      }
      user_addresses: {
        Row: {
          id: string
          user_id: string
          address_type: 'shipping' | 'billing' | 'both'
          address_line1: string
          address_line2: string | null
          city: string
          state: string | null
          postal_code: string
          country: string
          is_default_shipping: boolean
          is_default_billing: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          address_type: 'shipping' | 'billing' | 'both'
          address_line1: string
          address_line2?: string | null
          city: string
          state?: string | null
          postal_code: string
          country: string
          is_default_shipping?: boolean
          is_default_billing?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          address_type?: 'shipping' | 'billing' | 'both'
          address_line1?: string
          address_line2?: string | null
          city?: string
          state?: string | null
          postal_code?: string
          country?: string
          is_default_shipping?: boolean
          is_default_billing?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      user_carts: {
        Row: {
          id: string
          user_id: string
          items: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          items: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          items?: Json
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          parent_id: string | null
          image_url: string | null
          meta_title: string | null
          meta_description: string | null
          focus_keyword: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          parent_id?: string | null
          image_url?: string | null
          meta_title?: string | null
          meta_description?: string | null
          focus_keyword?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          parent_id?: string | null
          image_url?: string | null
          meta_title?: string | null
          meta_description?: string | null
          focus_keyword?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      brands: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          logo_url: string | null
          meta_title: string | null
          meta_description: string | null
          focus_keyword: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          logo_url?: string | null
          meta_title?: string | null
          meta_description?: string | null
          focus_keyword?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          logo_url?: string | null
          meta_title?: string | null
          meta_description?: string | null
          focus_keyword?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          description: string
          slug: string
          price: number
          sale_price: number | null
          image_url: string | null
          sku: string
          stock_quantity: number
          in_stock: boolean
          featured: boolean
          status: 'draft' | 'published' | 'archived'
          product_type: 'simple' | 'variable'
          has_variations: boolean
          brand_id: string | null
          meta_title: string | null
          meta_description: string | null
          focus_keyword: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          slug: string
          price: number
          sale_price?: number | null
          image_url?: string | null
          sku: string
          stock_quantity?: number
          in_stock?: boolean
          featured?: boolean
          status?: 'draft' | 'published' | 'archived'
          product_type?: 'simple' | 'variable'
          has_variations?: boolean
          brand_id?: string | null
          meta_title?: string | null
          meta_description?: string | null
          focus_keyword?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          slug?: string
          price?: number
          sale_price?: number | null
          image_url?: string | null
          sku?: string
          stock_quantity?: number
          in_stock?: boolean
          featured?: boolean
          status?: 'draft' | 'published' | 'archived'
          product_type?: 'simple' | 'variable'
          has_variations?: boolean
          brand_id?: string | null
          meta_title?: string | null
          meta_description?: string | null
          focus_keyword?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      product_categories: {
        Row: {
          id: string
          product_id: string
          category_id: string
          created_at: string
        }
        Insert: {
          id?: string
          product_id: string
          category_id: string
          created_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          category_id?: string
          created_at?: string
        }
      }
      product_images: {
        Row: {
          id: string
          product_id: string
          image_url: string
          alt_text: string | null
          display_order: number
          created_at: string
        }
        Insert: {
          id?: string
          product_id: string
          image_url: string
          alt_text?: string | null
          display_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          image_url?: string
          alt_text?: string | null
          display_order?: number
          created_at?: string
        }
      }
      product_attributes: {
        Row: {
          id: string
          name: string
          slug: string
          is_visual: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          is_visual?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          is_visual?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      attribute_values: {
        Row: {
          id: string
          attribute_id: string
          value: string
          slug: string
          color_code: string | null
          image_url: string | null
          display_order: number
          created_at: string
        }
        Insert: {
          id?: string
          attribute_id: string
          value: string
          slug: string
          color_code?: string | null
          image_url?: string | null
          display_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          attribute_id?: string
          value?: string
          slug?: string
          color_code?: string | null
          image_url?: string | null
          display_order?: number
          created_at?: string
        }
      }
      product_attribute_links: {
        Row: {
          id: string
          product_id: string
          attribute_id: string
          created_at: string
        }
        Insert: {
          id?: string
          product_id: string
          attribute_id: string
          created_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          attribute_id?: string
          created_at?: string
        }
      }
      product_variations: {
        Row: {
          id: string
          product_id: string
          sku: string
          price: number
          sale_price: number | null
          stock_quantity: number
          is_default: boolean
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          product_id: string
          sku: string
          price: number
          sale_price?: number | null
          stock_quantity?: number
          is_default?: boolean
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          sku?: string
          price?: number
          sale_price?: number | null
          stock_quantity?: number
          is_default?: boolean
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      variation_attributes: {
        Row: {
          id: string
          variation_id: string
          attribute_id: string
          value_id: string
          created_at: string
        }
        Insert: {
          id?: string
          variation_id: string
          attribute_id: string
          value_id: string
          created_at?: string
        }
        Update: {
          id?: string
          variation_id?: string
          attribute_id?: string
          value_id?: string
          created_at?: string
        }
      }
      variation_images: {
        Row: {
          id: string
          variation_id: string
          image_url: string
          alt_text: string | null
          display_order: number
          created_at: string
        }
        Insert: {
          id?: string
          variation_id: string
          image_url: string
          alt_text?: string | null
          display_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          variation_id?: string
          image_url?: string
          alt_text?: string | null
          display_order?: number
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string | null
          total: number
          status: 'pending' | 'processing' | 'completed' | 'cancelled'
          shipping_address: string
          shipping_city: string
          shipping_state: string | null
          shipping_postal_code: string
          shipping_country: string
          billing_address: string
          billing_city: string
          billing_state: string | null
          billing_postal_code: string
          billing_country: string
          stripe_session_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          total: number
          status?: 'pending' | 'processing' | 'completed' | 'cancelled'
          shipping_address: string
          shipping_city: string
          shipping_state?: string | null
          shipping_postal_code: string
          shipping_country: string
          billing_address: string
          billing_city: string
          billing_state?: string | null
          billing_postal_code: string
          billing_country: string
          stripe_session_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          total?: number
          status?: 'pending' | 'processing' | 'completed' | 'cancelled'
          shipping_address?: string
          shipping_city?: string
          shipping_state?: string | null
          shipping_postal_code?: string
          shipping_country?: string
          billing_address?: string
          billing_city?: string
          billing_state?: string | null
          billing_postal_code?: string
          billing_country?: string
          stripe_session_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          product_name: string
          price: number
          quantity: number
          variation_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          product_name: string
          price: number
          quantity: number
          variation_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          product_name?: string
          price?: number
          quantity?: number
          variation_id?: string | null
          created_at?: string
        }
      }
      coupons: {
        Row: {
          id: string
          code: string
          type: 'percentage' | 'fixed_amount' | 'free_shipping'
          value: number
          active: boolean
          starts_at: string | null
          expires_at: string | null
          min_order_amount: number | null
          usage_limit: number | null
          usage_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          code: string
          type: 'percentage' | 'fixed_amount' | 'free_shipping'
          value: number
          active?: boolean
          starts_at?: string | null
          expires_at?: string | null
          min_order_amount?: number | null
          usage_limit?: number | null
          usage_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          code?: string
          type?: 'percentage' | 'fixed_amount' | 'free_shipping'
          value?: number
          active?: boolean
          starts_at?: string | null
          expires_at?: string | null
          min_order_amount?: number | null
          usage_limit?: number | null
          usage_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      order_coupons: {
        Row: {
          id: string
          order_id: string
          coupon_id: string
          discount_amount: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          coupon_id: string
          discount_amount: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          coupon_id?: string
          discount_amount?: number
          created_at?: string
        }
      }
      stock_logs: {
        Row: {
          id: string
          product_id: string
          previous_quantity: number
          new_quantity: number
          adjustment_type: 'set' | 'increase' | 'decrease' | 'order'
          reason: string | null
          created_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          product_id: string
          previous_quantity: number
          new_quantity: number
          adjustment_type: 'set' | 'increase' | 'decrease' | 'order'
          reason?: string | null
          created_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          previous_quantity?: number
          new_quantity?: number
          adjustment_type?: 'set' | 'increase' | 'decrease' | 'order'
          reason?: string | null
          created_by?: string | null
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          product_id: string
          user_id: string
          rating: number
          body: string | null
          status: 'pending' | 'approved' | 'rejected'
          verified: boolean
          helpful_votes: number
          unhelpful_votes: number
          media_urls: Json | null
          order_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          product_id: string
          user_id: string
          rating: number
          body?: string | null
          status?: 'pending' | 'approved' | 'rejected'
          verified?: boolean
          helpful_votes?: number
          unhelpful_votes?: number
          media_urls?: Json | null
          order_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          user_id?: string
          rating?: number
          body?: string | null
          status?: 'pending' | 'approved' | 'rejected'
          verified?: boolean
          helpful_votes?: number
          unhelpful_votes?: number
          media_urls?: Json | null
          order_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      review_replies: {
        Row: {
          id: string
          review_id: string
          user_id: string
          reply_body: string
          is_admin: boolean
          status: 'pending' | 'approved' | 'rejected'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          review_id: string
          user_id: string
          reply_body: string
          is_admin?: boolean
          status?: 'pending' | 'approved' | 'rejected'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          review_id?: string
          user_id?: string
          reply_body?: string
          is_admin?: boolean
          status?: 'pending' | 'approved' | 'rejected'
          created_at?: string
          updated_at?: string
        }
      }
      review_helpfulness: {
        Row: {
          id: string
          review_id: string
          user_id: string
          vote: number
          created_at: string
        }
        Insert: {
          id?: string
          review_id: string
          user_id: string
          vote: number
          created_at?: string
        }
        Update: {
          id?: string
          review_id?: string
          user_id?: string
          vote?: number
          created_at?: string
        }
      }
      wishlists: {
        Row: {
          id: string
          user_id: string
          product_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          created_at?: string
        }
      }
      hero_slides: {
        Row: {
          id: string
          title: string
          subtitle: string | null
          image_url: string
          cta_text: string | null
          cta_link: string | null
          display_order: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          subtitle?: string | null
          image_url: string
          cta_text?: string | null
          cta_link?: string | null
          display_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          subtitle?: string | null
          image_url?: string
          cta_text?: string | null
          cta_link?: string | null
          display_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      store_settings: {
        Row: {
          id: string
          store_name: string
          tagline: string | null
          logo_url: string | null
          description: string | null
          email: string | null
          phone: string | null
          address: string | null
          city: string | null
          state: string | null
          country: string | null
          postal_code: string | null
          currency_code: string
          meta_title: string | null
          meta_description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          store_name: string
          tagline?: string | null
          logo_url?: string | null
          description?: string | null
          email?: string | null
          phone?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          country?: string | null
          postal_code?: string | null
          currency_code?: string
          meta_title?: string | null
          meta_description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          store_name?: string
          tagline?: string | null
          logo_url?: string | null
          description?: string | null
          email?: string | null
          phone?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          country?: string | null
          postal_code?: string | null
          currency_code?: string
          meta_title?: string | null
          meta_description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      handle_new_user: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      adjust_stock: {
        Args: {
          product_id: string
          quantity_change: number
          adjustment_type: 'set' | 'increase' | 'decrease' | 'order'
          reason?: string
          created_by?: string
        }
        Returns: undefined
      }
      check_coupon: {
        Args: {
          coupon_code: string
          order_total: number
        }
        Returns: {
          valid: boolean
          discount_amount: number
          coupon_id: string | null
        }
      }
      vote_review_helpfulness: {
        Args: {
          review_id: string
          user_id: string
          vote_value: number
        }
        Returns: undefined
      }
      has_role: {
        Args: {
          user_id: string
          role_name: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}