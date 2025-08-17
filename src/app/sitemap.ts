import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://parispharmacy.com'
  
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // TODO: Add dynamic routes for products and categories
  // This will be implemented when we have the database setup
  // const products = await getProducts()
  // const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
  //   url: `${baseUrl}/product/${product.slug}`,
  //   lastModified: product.updatedAt,
  //   changeFrequency: 'weekly',
  //   priority: 0.7,
  // }))

  // const categories = await getCategories()
  // const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
  //   url: `${baseUrl}/category/${category.slug}`,
  //   lastModified: category.updatedAt,
  //   changeFrequency: 'weekly',
  //   priority: 0.6,
  // }))

  return [
    ...staticRoutes,
    // ...productRoutes,
    // ...categoryRoutes,
  ]
}