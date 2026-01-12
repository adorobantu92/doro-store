// =============================================================================
// DATA TYPES - Single source of truth for all data structures
// =============================================================================
// MIGRATION NOTE: When moving to a database, these types remain the same.
// Only the data fetching functions in /lib/data/ need to change.
// =============================================================================

export interface Product {
  id: string
  slug: string
  sku: string
  name: string
  shortDescription: string
  description: string
  price: number
  originalPrice?: number // For discounts
  currency: 'RON'
  categoryId: string
  subcategoryId?: string
  images: ProductImage[]
  specs: ProductSpec[]
  benefits: string[]
  stock: number
  isActive: boolean
  isFeatured: boolean
  isNew: boolean
  createdAt: string
  updatedAt: string
}

export interface ProductImage {
  url: string
  alt: string
  isPrimary: boolean
}

export interface ProductSpec {
  label: string
  value: string
}

export interface Category {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  image?: string
  parentId?: string
  order: number
  isActive: boolean
}

export interface CartItem {
  productId: string
  quantity: number
  addedAt: string
}

export interface Cart {
  items: CartItem[]
  updatedAt: string
}

// =============================================================================
// ORDER TYPES - Ready for payment integration
// =============================================================================

export type OrderStatus = 
  | 'pending'           // Order created, awaiting payment
  | 'paid'              // Payment confirmed
  | 'processing'        // Being prepared
  | 'shipped'           // Handed to courier
  | 'delivered'         // Confirmed delivered
  | 'cancelled'         // Cancelled by customer or admin
  | 'refunded'          // Money returned

export type PaymentMethod = 
  | 'card'              // Online card payment
  | 'ramburs'           // Cash on delivery

export type PaymentStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'refunded'

export interface OrderItem {
  productId: string
  productName: string
  productSlug: string
  sku: string
  price: number
  quantity: number
  subtotal: number
}

export interface ShippingAddress {
  firstName: string
  lastName: string
  phone: string
  email: string
  county: string        // Județ
  city: string
  address: string
  postalCode: string
  notes?: string
}

export interface Order {
  id: string
  orderNumber: string   // Human-readable: ORD-2026-00001
  items: OrderItem[]
  subtotal: number
  shippingCost: number
  total: number
  currency: 'RON'
  status: OrderStatus
  paymentMethod: PaymentMethod
  paymentStatus: PaymentStatus
  shippingAddress: ShippingAddress
  trackingNumber?: string
  createdAt: string
  updatedAt: string
}

// =============================================================================
// SITE CONFIGURATION
// =============================================================================

export interface SiteConfig {
  name: string
  description: string
  url: string
  locale: string
  currency: 'RON'
  freeShippingThreshold: number
  shippingCost: number
  contactEmail: string
  contactPhone: string
  address: string
  cui: string
  regCom: string
  socialLinks: {
    facebook?: string
    instagram?: string
    tiktok?: string
  }
}

// =============================================================================
// API RESPONSE TYPES - For future API routes
// =============================================================================

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// =============================================================================
// FILTER & SORT TYPES
// =============================================================================

export type SortOption = 
  | 'popular'
  | 'price-asc'
  | 'price-desc'
  | 'newest'

export interface ProductFilters {
  categoryId?: string
  subcategoryId?: string
  minPrice?: number
  maxPrice?: number
  inStock?: boolean
  sortBy?: SortOption
  page?: number
  pageSize?: number
}
