'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo, Suspense } from 'react'
import Link from 'next/link'
import { getAllProducts } from '@/lib/data'
import { ProductCard } from '@/components/product/ProductCard'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Search, Loader2 } from 'lucide-react'

/**
 * Normalize Romanian text by removing diacritics
 * ă, â -> a | î -> i | ș -> s | ț -> t
 */
function normalizeRomanian(text: string): string {
  return text
    .toLowerCase()
    .replace(/[ăâ]/g, 'a')
    .replace(/[î]/g, 'i')
    .replace(/[ș]/g, 's')
    .replace(/[ț]/g, 't')
}

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  const results = useMemo(() => {
    if (!query.trim()) return []

    const allProducts = getAllProducts()
    const searchTerm = normalizeRomanian(query.trim())

    return allProducts.filter((product) => {
      const normalizedName = normalizeRomanian(product.name)
      const normalizedDesc = normalizeRomanian(product.shortDescription || '')
      
      return normalizedName.includes(searchTerm) || normalizedDesc.includes(searchTerm)
    })
  }, [query])

  return (
    <>
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          Rezultate căutare
        </h1>
        {query && (
          <p className="text-lg text-secondary-600">
            Rezultate pentru: <span className="font-medium text-secondary-900">"{query}"</span>
          </p>
        )}
      </div>

      {/* No Query State */}
      {!query.trim() && (
        <div className="text-center py-16 bg-secondary-50 rounded-xl">
          <Search className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
          <p className="text-secondary-600 mb-4">
            Introdu un termen de căutare pentru a găsi produse.
          </p>
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Înapoi la pagina principală
          </Link>
        </div>
      )}

      {/* Results */}
      {query.trim() && (
        <>
          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-secondary-600">
              {results.length} {results.length === 1 ? 'produs găsit' : 'produse găsite'}
            </p>
          </div>

          {/* Products Grid */}
          {results.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-secondary-50 rounded-xl">
              <Search className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
              <p className="text-secondary-600 mb-4">
                Nu am găsit produse pentru această căutare.
              </p>
              <Link
                href="/"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                ← Înapoi la pagina principală
              </Link>
            </div>
          )}
        </>
      )}
    </>
  )
}

function SearchLoading() {
  return (
    <div className="text-center py-16">
      <Loader2 className="w-8 h-8 text-primary-600 mx-auto mb-4 animate-spin" />
      <p className="text-secondary-600">Se încarcă...</p>
    </div>
  )
}

export default function SearchPage() {
  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Căutare', href: '/search' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      <Suspense fallback={<SearchLoading />}>
        <SearchResults />
      </Suspense>
    </div>
  )
}
