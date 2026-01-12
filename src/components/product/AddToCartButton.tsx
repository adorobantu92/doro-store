'use client'

import { useState } from 'react'
import { Product } from '@/lib/types'
import { useCartStore } from '@/lib/store/cart'
import { ShoppingCart, Check, Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const { addItem, openCart } = useCartStore()

  const handleAddToCart = () => {
    addItem(product.id, quantity)
    setIsAdded(true)
    openCart()
    
    // Reset after animation
    setTimeout(() => {
      setIsAdded(false)
      setQuantity(1)
    }, 2000)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) setQuantity(quantity + 1)
  }

  if (product.stock === 0) {
    return (
      <button
        disabled
        className="w-full py-4 bg-secondary-200 text-secondary-500 font-semibold rounded-lg cursor-not-allowed"
      >
        Indisponibil
      </button>
    )
  }

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-secondary-600">Cantitate:</span>
        <div className="flex items-center border border-secondary-300 rounded-lg">
          <button
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="p-2 hover:bg-secondary-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={increaseQuantity}
            disabled={quantity >= product.stock}
            className="p-2 hover:bg-secondary-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdded}
        className={cn(
          'w-full py-4 font-semibold rounded-lg transition-all flex items-center justify-center gap-2',
          isAdded
            ? 'bg-green-600 text-white'
            : 'bg-primary-600 text-white hover:bg-primary-700'
        )}
      >
        {isAdded ? (
          <>
            <Check className="w-5 h-5" />
            Adăugat în coș
          </>
        ) : (
          <>
            <ShoppingCart className="w-5 h-5" />
            Adaugă în coș
          </>
        )}
      </button>
    </div>
  )
}
