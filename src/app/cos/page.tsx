'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '@/lib/store/cart'

interface OrderForm {
  nume: string
  telefon: string
  email: string
  adresa: string
  observatii: string
}

export default function CosPage() {
  const { items, getCartProducts, getSubtotal, updateQuantity, removeItem, clearCart } = useCartStore()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [form, setForm] = useState<OrderForm>({
    nume: '',
    telefon: '',
    email: '',
    adresa: '',
    observatii: '',
  })

  const cartProducts = getCartProducts()
  const subtotal = getSubtotal()
  const isEmpty = items.length === 0

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const orderData = {
      customer: form,
      items: cartProducts.map(({ product, quantity }) => ({
        productId: product?.id,
        name: product?.name,
        price: product?.price,
        quantity,
      })),
      total: subtotal,
      createdAt: new Date().toISOString(),
    }

    console.log('📦 Comandă nouă:', orderData)
    
    clearCart()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Mulțumim pentru comandă!</h1>
            <p className="text-gray-600 mb-6">
              Comanda a fost trimisă. Te vom contacta pentru confirmare.
            </p>
            <Link
              href="/"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Înapoi la magazin
            </Link>
          </div>
        </div>
      </main>
    )
  }

  if (isEmpty) {
    return (
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Coșul tău este gol</h1>
            <p className="text-gray-600 mb-6">
              Adaugă produse în coș pentru a plasa o comandă.
            </p>
            <Link
              href="/"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Vezi produsele
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Finalizare comandă</h1>
        <p className="text-gray-600 mb-8">
          Trimite comanda, iar noi te contactăm pentru confirmare și detalii de livrare.
        </p>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">Produse în coș</h2>
              </div>
              <ul className="divide-y divide-gray-100">
                {cartProducts.map(({ product, quantity }) => {
                  if (!product) return null
                  const primaryImage = product.images.find((img) => img.isPrimary) || product.images[0]

                  return (
                    <li key={product.id} className="p-4 flex gap-4">
                      <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={primaryImage?.url || '/placeholder.jpg'}
                          alt={primaryImage?.alt || product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link 
                          href={`/produs/${product.slug}`}
                          className="font-medium text-gray-900 hover:text-primary-600 line-clamp-2"
                        >
                          {product.name}
                        </Link>
                        <p className="text-primary-600 font-semibold mt-1">
                          {product.price} RON
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            aria-label="Scade cantitatea"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-medium">{quantity}</span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            aria-label="Crește cantitatea"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeItem(product.id)}
                            className="ml-auto text-sm text-red-600 hover:text-red-700"
                          >
                            Șterge
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {product.price * quantity} RON
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Total estimat:</span>
                  <span className="text-xl font-bold text-primary-600">{subtotal} RON</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Date de contact</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="nume" className="block text-sm font-medium text-gray-700 mb-1">
                    Nume <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nume"
                    name="nume"
                    required
                    value={form.nume}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    placeholder="Numele complet"
                  />
                </div>

                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    required
                    value={form.telefon}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    placeholder="07xx xxx xxx"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    placeholder="email@exemplu.ro"
                  />
                </div>

                <div>
                  <label htmlFor="adresa" className="block text-sm font-medium text-gray-700 mb-1">
                    Adresă
                  </label>
                  <input
                    type="text"
                    id="adresa"
                    name="adresa"
                    value={form.adresa}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    placeholder="Opțional - o vom confirma telefonic"
                  />
                </div>

                <div>
                  <label htmlFor="observatii" className="block text-sm font-medium text-gray-700 mb-1">
                    Observații
                  </label>
                  <textarea
                    id="observatii"
                    name="observatii"
                    rows={3}
                    value={form.observatii}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                    placeholder="Mențiuni speciale, program livrare, etc."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Trimite comanda
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Nu procesăm plăți online. Te vom contacta pentru confirmare și metodă de plată.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
