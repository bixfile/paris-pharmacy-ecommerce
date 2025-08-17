# Paris Pharmacy - E-commerce Platform

A modern, full-featured e-commerce platform built with Next.js 14, Supabase, and TypeScript for Paris Pharmacy.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, Tailwind CSS, and Supabase
- **Authentication**: Secure user authentication with email/password and role-based access
- **Product Catalog**: Comprehensive product management with categories, brands, and variations
- **Shopping Cart**: Full cart functionality with persistent storage
- **Order Management**: Complete order processing and management system
- **Admin Dashboard**: Powerful admin interface for managing products, orders, and customers
- **Reviews & Ratings**: Customer review system with moderation
- **SEO Optimized**: Built-in SEO best practices with metadata and structured data
- **Responsive Design**: Mobile-first responsive design with dark/light mode support
- **Performance**: Optimized for Core Web Vitals and fast loading

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui, Radix UI primitives
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **State Management**: React Context, SWR for data fetching
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (shop)/            # Customer-facing pages
│   ├── (admin)/           # Admin interface
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   ├── auth/             # Authentication components
│   ├── product/          # Product-related components
│   └── homepage/         # Homepage sections
├── lib/                  # Utilities and configurations
│   ├── supabase/         # Supabase client setup
│   ├── db/               # Database queries
│   └── utils.ts          # Helper functions
├── types/                # TypeScript type definitions
├── context/              # React contexts
└── hooks/                # Custom React hooks
```

## 🗄️ Database Schema

The application uses a comprehensive Supabase database with the following main tables:

- **Users & Auth**: `profiles`, `user_roles`, `user_addresses`, `user_carts`
- **Products**: `products`, `categories`, `brands`, `product_variations`
- **Orders**: `orders`, `order_items`, `coupons`
- **Reviews**: `reviews`, `review_replies`, `review_helpfulness`
- **Content**: `hero_slides`, `store_settings`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account and project
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/paris-pharmacy.git
   cd paris-pharmacy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Set up the database:**
   - Run the SQL migrations in your Supabase dashboard
   - Enable Row Level Security (RLS) policies
   - Configure authentication providers

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🔐 Authentication & Authorization

The app uses Supabase Auth with:

- **Email/Password authentication**
- **Role-based access control** (admin/customer)
- **Protected routes** with middleware
- **Profile management**

### User Roles

- **Customer**: Can browse products, place orders, write reviews
- **Admin**: Full access to admin dashboard and management features

## 🛒 E-commerce Features

### Product Management
- Product catalog with categories and brands
- Product variations (size, color, etc.)
- Inventory management
- SEO-friendly URLs

### Shopping Experience
- Product search and filtering
- Shopping cart with persistence
- Guest and authenticated checkout
- Order tracking

### Admin Dashboard
- Order management
- Product management
- Customer management
- Analytics and reporting

## 🎨 Styling & UI

- **Tailwind CSS** for styling
- **Shadcn/ui** component library
- **Custom color scheme** matching Paris Pharmacy branding
- **Responsive design** with mobile-first approach
- **Dark/Light mode** support

## 📊 SEO & Performance

- **Metadata API** for dynamic meta tags
- **Structured data** for rich snippets
- **Sitemap generation**
- **Image optimization** with Next.js Image
- **Core Web Vitals** optimization

## 🚀 Deployment

### Vercel Deployment

1. **Connect your GitHub repository to Vercel**
2. **Add environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

### Environment Variables for Production

```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_role_key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@parispharmacy.com or create an issue in the GitHub repository.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful component library