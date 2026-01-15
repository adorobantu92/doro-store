'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Product } from '@/lib/types'
import { formatPrice, calculateDiscount } from '@/lib/utils'
import { useCartStore } from '@/lib/store/cart'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore()
  const discount = product.originalPrice
    ? calculateDiscount(product.originalPrice, product.price)
    : 0

  const primaryImage = product.images.find((img) => img.isPrimary) || product.images[0]

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (product.stock > 0) {
      addItem(product.id)
    }
  }

  return (
    <Link
      href={`/produs/${product.slug}`}
      className="group bg-white rounded-xl border border-secondary-200 overflow-hidden hover:shadow-xl hover:border-primary-300 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
    >
      {/* Image */}
      <div className="aspect-square bg-secondary-100 relative overflow-hidden">
        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-semibold rounded-md shadow-sm">
              NOU
            </span>
          )}
          {discount > 0 && (
            <span className="px-2.5 py-1 bg-red-500 text-white text-xs font-semibold rounded-md shadow-sm">
              -{discount}%
            </span>
          )}
          {product.stock > 0 && !product.isNew && discount === 0 && (
            <span className="px-2.5 py-1 bg-green-600 text-white text-xs font-semibold rounded-md shadow-sm">
              În stoc
            </span>
          )}
        </div>

        {/* Stock Warning */}
        {product.stock > 0 && product.stock <= 5 && (
          <span className="absolute bottom-2 left-2 z-10 px-2.5 py-1 bg-orange-500 text-white text-xs font-semibold rounded-md shadow-sm">
            Ultimele {product.stock}
          </span>
        )}

        {/* Out of Stock */}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
            <span className="px-3 py-1.5 bg-secondary-900 text-white text-sm font-medium rounded-md">
              Indisponibil
            </span>
          </div>
        )}

        {/* Add to Cart Button - Shows on Hover */}
        {product.stock > 0 && (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-2 right-2 z-10 p-2.5 bg-primary-600 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-primary-700"
            aria-label="Adaugă în coș"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        )}

        {primaryImage ? (
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-secondary-400 text-sm">
            Imagine produs
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-secondary-900 mb-1 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-secondary-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-secondary-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Stock Status */}
        {product.stock > 0 && (
          <p className="text-xs text-green-600 font-medium mt-2 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            În stoc
          </p>
        )}
      </div>
    </Link>
  )
}
