// =============================================================================
// CART STORE - Client-side cart management with Zustand
// =============================================================================
// MIGRATION NOTE: This store uses localStorage. For logged-in users,
// sync with server-side cart via API calls.
// =============================================================================

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem } from '@/lib/types'
import { getProductById } from '@/lib/data'

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  
  // Actions
  addItem: (productId: string, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
  
  // Computed (as functions since Zustand doesn't have computed)
  getItemCount: () => number
  getSubtotal: () => number
  getCartProducts: () => Array<{
    product: ReturnType<typeof getProductById>
    quantity: number
  }>
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (productId: string, quantity: number = 1) => {
        const product = getProductById(productId)
        if (!product) return

        set((state) => {
          const existingItem = state.items.find((item) => item.productId === productId)

          if (existingItem) {
            // Update quantity, respecting stock limits
            const newQuantity = Math.min(
              existingItem.quantity + quantity,
              product.stock
            )
            return {
              items: state.items.map((item) =>
                item.productId === productId
                  ? { ...item, quantity: newQuantity }
                  : item
              ),
            }
          }

          // Add new item
          return {
            items: [
              ...state.items,
              {
                productId,
                quantity: Math.min(quantity, product.stock),
                addedAt: new Date().toISOString(),
              },
            ],
          }
        })
      },

      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        }))
      },

      updateQuantity: (productId: string, quantity: number) => {
        const product = getProductById(productId)
        if (!product) return

        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId
              ? { ...item, quantity: Math.min(quantity, product.stock) }
              : item
          ),
        }))
      },

      clearCart: () => {
        set({ items: [] })
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }))
      },

      openCart: () => {
        set({ isOpen: true })
      },

      closeCart: () => {
        set({ isOpen: false })
      },

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => {
          const product = getProductById(item.productId)
          if (!product) return total
          return total + product.price * item.quantity
        }, 0)
      },

      getCartProducts: () => {
        return get().items.map((item) => ({
          product: getProductById(item.productId),
          quantity: item.quantity,
        }))
      },
    }),
    {
      name: 'cart-storage',
      // Only persist items, not UI state
      partialize: (state) => ({ items: state.items }),
    }
  )
)
