# Paris Pharmacy - Deployment Guide

This guide will help you deploy the Paris Pharmacy e-commerce platform to Vercel with your existing Supabase database.

## 📋 Prerequisites

Before deployment, ensure you have:

- [x] A Supabase project with the Paris Pharmacy database schema
- [x] A GitHub account
- [x] A Vercel account (free tier works fine)
- [x] All Supabase keys and environment variables

## 🔧 Pre-Deployment Setup

### 1. Supabase Configuration

Ensure your Supabase project has:

- **Database Schema**: All required tables with proper RLS policies
- **Authentication**: Email/password authentication enabled
- **API Keys**: Anon key and service role key available
- **Storage**: (Optional) Bucket for product images

### 2. Environment Variables

Gather these values from your Supabase dashboard:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## 🚀 Deployment Steps

### Step 1: Push to GitHub

1. **Create a new repository on GitHub**
   ```bash
   # If you haven't already, push your code to GitHub
   git remote add origin https://github.com/yourusername/paris-pharmacy.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Connect GitHub to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your Paris Pharmacy repository

2. **Configure Environment Variables**
   
   In the Vercel deployment settings, add these environment variables:
   
   | Variable | Value | Description |
   |----------|-------|-------------|
   | `NEXT_PUBLIC_SUPABASE_URL` | `https://your-project.supabase.co` | Your Supabase project URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `your_anon_key` | Public anon key from Supabase |
   | `SUPABASE_SERVICE_ROLE_KEY` | `your_service_role_key` | Service role key (keep secret) |
   | `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` | Your deployed site URL |

3. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### Step 3: Configure Domain (Optional)

1. **Custom Domain**
   - Go to your Vercel project settings
   - Add your custom domain in the "Domains" section
   - Update `NEXT_PUBLIC_SITE_URL` to your custom domain

2. **Update Supabase Site URL**
   - In Supabase dashboard → Authentication → URL Configuration
   - Add your Vercel domain to allowed redirect URLs

## 🔧 Post-Deployment Configuration

### 1. Test Authentication

1. **Create Test Admin User**
   ```sql
   -- In Supabase SQL Editor
   INSERT INTO user_roles (user_id, role)
   VALUES ('your-user-uuid', 'admin');
   ```

2. **Test Login/Registration**
   - Visit `/auth` on your deployed site
   - Create a test account
   - Verify email functionality

### 2. Add Sample Data (Optional)

Add some sample products, categories, and content:

```sql
-- Sample category
INSERT INTO categories (name, slug, description) 
VALUES ('Skincare', 'skincare', 'Premium skincare products');

-- Sample brand
INSERT INTO brands (name, slug, description)
VALUES ('SkinCare Pro', 'skincare-pro', 'Professional skincare brand');

-- Sample product
INSERT INTO products (name, slug, description, price, sku, featured)
VALUES ('Vitamin C Serum', 'vitamin-c-serum', 'High-quality vitamin C serum', 45.99, 'VIT-C-001', true);
```

### 3. Configure Analytics (Optional)

Add Google Analytics or Vercel Analytics:

```javascript
// In app/layout.tsx - add analytics script
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

## 🔄 Continuous Deployment

### Auto-Deploy on Push

Vercel automatically deploys when you push to the main branch:

```bash
# Make changes
git add .
git commit -m "Update product catalog"
git push origin main
# ✅ Automatically deploys to Vercel
```

### Environment Specific Deployments

- **Production**: `main` branch → your-domain.com
- **Staging**: `develop` branch → staging-your-domain.vercel.app
- **Preview**: Feature branches → preview-urls.vercel.app

## 🐛 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Check for TypeScript errors
   npm run type-check
   
   # Check for linting issues
   npm run lint
   ```

2. **Environment Variables Not Working**
   - Ensure variables are set in Vercel dashboard
   - Redeploy after adding new variables
   - Check variable names match exactly

3. **Supabase Connection Issues**
   - Verify Supabase URL and keys are correct
   - Check RLS policies are properly configured
   - Ensure domain is added to Supabase allowed origins

4. **Authentication Not Working**
   - Add Vercel domain to Supabase redirect URLs
   - Check email templates in Supabase Auth settings
   - Verify email provider configuration

### Debugging

1. **Check Vercel Function Logs**
   - Go to Vercel dashboard → Functions tab
   - View real-time logs for API routes

2. **Check Browser Console**
   - Open browser dev tools
   - Look for JavaScript errors or network issues

3. **Check Supabase Logs**
   - Go to Supabase dashboard → Logs
   - Check API, Database, and Auth logs

## 📊 Monitoring

### Vercel Analytics

Enable Vercel Analytics for performance monitoring:

1. Go to Vercel project settings
2. Enable Analytics
3. View metrics in the Analytics tab

### Supabase Monitoring

Monitor your database:

1. Database usage in Supabase dashboard
2. Auth metrics and user growth
3. API request volumes

## 🔐 Security Checklist

- [x] Environment variables properly configured
- [x] Supabase RLS policies enabled
- [x] API keys kept secret (not in frontend code)
- [x] HTTPS enabled (automatic with Vercel)
- [x] Domain restrictions configured in Supabase
- [x] CSP headers configured in next.config.js

## 📈 Performance Optimization

### Image Optimization

Vercel automatically optimizes images, but you can:

1. Use proper `sizes` attributes on images
2. Enable image formats (WebP, AVIF)
3. Use `priority` for above-the-fold images

### Caching

Configure caching in `next.config.js`:

```javascript
module.exports = {
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
}
```

## 🆘 Support

If you encounter issues:

1. **Check the documentation**: Review this guide and README.md
2. **Vercel Support**: [vercel.com/support](https://vercel.com/support)
3. **Supabase Support**: [supabase.com/support](https://supabase.com/support)
4. **GitHub Issues**: Create an issue in your repository

## 🎉 You're Live!

Once deployed successfully:

- ✅ Your e-commerce site is live
- ✅ Users can register and authenticate
- ✅ Products are displayed from your database
- ✅ Admin dashboard is accessible
- ✅ SEO optimization is active
- ✅ SSL certificate is configured

**Next Steps:**
- Add your products and categories
- Customize the design to match your brand
- Set up payment processing (Stripe)
- Configure email notifications
- Add analytics tracking
- Create marketing content

Welcome to your new Paris Pharmacy e-commerce platform! 🎊