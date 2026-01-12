# Online Shop — Next.js E-Commerce MVP

Production-ready e-commerce store built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Homepage
│   ├── not-found.tsx        # 404 page
│   ├── [category]/          # Dynamic category pages
│   │   ├── page.tsx         # Category listing
│   │   └── [subcategory]/   # Subcategory pages
│   │       └── page.tsx
│   └── produs/
│       └── [slug]/          # Product detail pages
│           └── page.tsx
│
├── components/
│   ├── layout/              # Header, Footer
│   ├── product/             # ProductCard, AddToCartButton
│   └── ui/                  # Breadcrumbs, Button
│
└── lib/
    ├── config.ts            # Site configuration
    ├── types.ts             # TypeScript types
    ├── utils.ts             # Utility functions
    ├── data/                # Static data (products, categories)
    │   ├── index.ts
    │   ├── categories.ts
    │   └── products.ts
    └── store/               # Zustand cart store
        └── cart.ts
```

---

## Adding Products

Edit `src/lib/data/products.ts`:

```typescript
{
  id: 'prod-new',
  slug: 'url-friendly-slug',
  sku: 'SKU-001',
  name: 'Nume Produs',
  shortDescription: 'Descriere scurtă pentru card și meta.',
  description: '## Titlu\n\nDescriere completă cu Markdown.',
  price: 99,
  originalPrice: 129,  // Optional - for discounts
  currency: 'RON',
  categoryId: 'gadgeturi',
  subcategoryId: 'incarcatoare-wireless',
  images: [
    { url: '/images/products/product-1.jpg', alt: 'Alt text', isPrimary: true }
  ],
  specs: [
    { label: 'Material', value: 'Aluminiu' }
  ],
  benefits: [
    'Beneficiu 1',
    'Beneficiu 2'
  ],
  stock: 20,
  isActive: true,
  isFeatured: false,
  isNew: true,
  createdAt: '2026-01-10T10:00:00Z',
  updatedAt: '2026-01-10T10:00:00Z',
}
```

---

## Adding Categories

Edit `src/lib/data/categories.ts`:

```typescript
{
  id: 'new-category',
  slug: 'new-category',
  name: 'Categorie Nouă',
  description: 'Descriere lungă pentru SEO.',
  shortDescription: 'Descriere scurtă.',
  parentId: undefined,  // or 'parent-id' for subcategory
  order: 7,
  isActive: true,
}
```

---

## Migrating to Database

The data layer is designed for zero-refactor migration:

### Step 1: Install Prisma (or your ORM)

```bash
npm install prisma @prisma/client
npx prisma init
```

### Step 2: Create Schema

```prisma
// prisma/schema.prisma
model Product {
  id              String    @id @default(cuid())
  slug            String    @unique
  sku             String    @unique
  name            String
  shortDescription String
  description     String    @db.Text
  price           Decimal
  originalPrice   Decimal?
  // ... rest of fields
}
```

### Step 3: Update Data Functions

Replace static data with database queries in `src/lib/data/`:

```typescript
// Before (static)
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.isActive)
}

// After (database)
export async function getProductBySlug(slug: string): Promise<Product | null> {
  return prisma.product.findFirst({
    where: { slug, isActive: true }
  })
}
```

### Step 4: Update Page Components

Add `async` to pages that fetch data:

```typescript
// Already async - just await the function
export default async function ProductPage({ params }) {
  const product = await getProductBySlug(params.slug)
  // ...
}
```

---

## Adding Payments

### Recommended: Stripe or Netopia (Romania)

#### 1. Install SDK

```bash
npm install stripe  # or netopia-payments
```

#### 2. Create API Routes

```typescript
// src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: NextRequest) {
  const { items } = await request.json()
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'ron',
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}/comanda-finalizata?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cos`,
  })

  return NextResponse.json({ sessionId: session.id })
}
```

#### 3. Create Checkout Page

```typescript
// src/app/checkout/page.tsx
'use client'

import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  const handleCheckout = async () => {
    const stripe = await stripePromise
    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ items: cartItems }),
    })
    const { sessionId } = await response.json()
    await stripe?.redirectToCheckout({ sessionId })
  }

  return (
    <button onClick={handleCheckout}>
      Finalizează comanda
    </button>
  )
}
```

---

## Adding Stock Management

### Option 1: Real-time Stock (Database)

```typescript
// On order creation
await prisma.$transaction([
  prisma.order.create({ data: orderData }),
  ...items.map(item =>
    prisma.product.update({
      where: { id: item.productId },
      data: { stock: { decrement: item.quantity } }
    })
  )
])
```

### Option 2: Periodic Sync (External System)

```typescript
// src/app/api/sync-stock/route.ts
export async function POST(request: NextRequest) {
  const { products } = await request.json()
  
  await prisma.$transaction(
    products.map(p =>
      prisma.product.update({
        where: { sku: p.sku },
        data: { stock: p.stock }
      })
    )
  )
  
  return NextResponse.json({ success: true })
}
```

---

## Environment Variables

Create `.env.local`:

```env
# Site
NEXT_PUBLIC_URL=http://localhost:3000

# Database (when migrating)
DATABASE_URL="postgresql://..."

# Payments (when adding)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Or for Netopia
NETOPIA_SIGNATURE=...
NETOPIA_PUBLIC_KEY=...
```

---

## SEO Checklist

- [x] Meta tags per page (title, description)
- [x] Open Graph tags
- [x] Structured data (Product, BreadcrumbList)
- [x] Semantic HTML
- [x] Dynamic sitemap ready (add `/app/sitemap.ts`)
- [x] robots.txt ready (add `/app/robots.ts`)

### Add Sitemap

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllProducts, getAllCategories } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getAllProducts()
  const categories = getAllCategories()
  
  return [
    { url: 'https://yoursite.ro', lastModified: new Date() },
    ...categories.map(cat => ({
      url: `https://yoursite.ro/${cat.slug}`,
      lastModified: new Date(),
    })),
    ...products.map(product => ({
      url: `https://yoursite.ro/produs/${product.slug}`,
      lastModified: new Date(product.updatedAt),
    })),
  ]
}
```

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

---

## License

Private - All rights reserved.
