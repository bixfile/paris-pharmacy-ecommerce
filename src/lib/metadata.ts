import type { Metadata } from 'next'

const siteConfig = {
  name: 'Paris Pharmacy',
  url: 'https://parispharmacy.com',
  description: 'Shop premium pharmacy products with fast delivery. Health & wellness products curated by experts.',
  links: {
    twitter: 'https://twitter.com/parispharmacy',
    github: 'https://github.com/parispharmacy',
  },
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = '/og-image.jpg',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    keywords: ['pharmacy', 'health', 'wellness', 'supplements', 'beauty', 'skincare', 'paris'],
    authors: [
      {
        name: 'Paris Pharmacy',
        url: siteConfig.url,
      },
    ],
    creator: 'Paris Pharmacy',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@parispharmacy',
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

export function generateProductMetadata({
  name,
  description,
  price,
  brand,
  category,
  image,
  slug,
}: {
  name: string
  description: string
  price: number
  brand?: string
  category?: string
  image?: string
  slug: string
}): Metadata {
  const title = `${name} | Paris Pharmacy`
  const metaDescription = `${description.slice(0, 155)}...`
  
  return constructMetadata({
    title,
    description: metaDescription,
    image: image || '/og-image.jpg',
  })
}

export function generateCategoryMetadata({
  name,
  description,
  slug,
  image,
}: {
  name: string
  description?: string
  slug: string
  image?: string
}): Metadata {
  const title = `${name} | Paris Pharmacy`
  const metaDescription = description || `Shop ${name.toLowerCase()} products at Paris Pharmacy. Premium quality health and wellness products with fast delivery.`
  
  return constructMetadata({
    title,
    description: metaDescription,
    image: image || '/og-image.jpg',
  })
}

export function generateCanonicalUrl(path: string): string {
  return `${siteConfig.url}${path}`
}

export function generateStructuredData(type: 'Organization' | 'Product' | 'BreadcrumbList' | 'WebSite', data: any) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  switch (type) {
    case 'Organization':
      return {
        ...baseStructuredData,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        description: siteConfig.description,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+33-1-23-45-67-89',
          contactType: 'customer service',
          availableLanguage: ['English', 'French'],
        },
        sameAs: [
          siteConfig.links.twitter,
        ],
      }

    case 'Product':
      return {
        ...baseStructuredData,
        name: data.name,
        description: data.description,
        image: data.image,
        brand: {
          '@type': 'Brand',
          name: data.brand || siteConfig.name,
        },
        offers: {
          '@type': 'Offer',
          price: data.price,
          priceCurrency: 'EUR',
          availability: data.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
          seller: {
            '@type': 'Organization',
            name: siteConfig.name,
          },
        },
        aggregateRating: data.rating && {
          '@type': 'AggregateRating',
          ratingValue: data.rating.average,
          reviewCount: data.rating.count,
        },
      }

    case 'BreadcrumbList':
      return {
        ...baseStructuredData,
        itemListElement: data.items.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${siteConfig.url}${item.url}`,
        })),
      }

    case 'WebSite':
      return {
        ...baseStructuredData,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      }

    default:
      return baseStructuredData
  }
}