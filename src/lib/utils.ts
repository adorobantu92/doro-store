import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format price in Romanian format
 */
export function formatPrice(price: number, currency: string = 'RON'): string {
  return `${price.toLocaleString('ro-RO')} ${currency}`
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(originalPrice: number, currentPrice: number): number {
  if (originalPrice <= currentPrice) return 0
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}

/**
 * Generate a URL-friendly slug from text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/**
 * Truncate text to a maximum length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Check if free shipping applies
 */
export function hasFreeShipping(subtotal: number, threshold: number = 150): boolean {
  return subtotal >= threshold
}

/**
 * Calculate shipping cost
 */
export function calculateShipping(subtotal: number, baseCost: number = 15, threshold: number = 150): number {
  return hasFreeShipping(subtotal, threshold) ? 0 : baseCost
}

/**
 * Generate order number
 */
export function generateOrderNumber(): string {
  const year = new Date().getFullYear()
  const random = Math.floor(Math.random() * 99999).toString().padStart(5, '0')
  return `ORD-${year}-${random}`
}

/**
 * Format date in Romanian
 */
export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Validate Romanian phone number
 */
export function isValidPhoneRO(phone: string): boolean {
  const cleaned = phone.replace(/\s/g, '')
  return /^(\+40|0)[0-9]{9}$/.test(cleaned)
}

/**
 * Validate email
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
