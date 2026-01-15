import { Metadata } from 'next'
import { getNewProducts } from '@/lib/data'
import { ProductCard } from '@/components/product/ProductCard'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Noutăți — Produse noi în stoc',
  description: 'Cele mai noi produse adăugate în magazin. Toate testate și gata de expediere.',
}

export default function NoutatiPage() {
  const newProducts = getNewProducts(20)

  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Noutăți', href: '/noutati' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-2">
          Noutăți în stoc
        </h1>
        <p className="text-secondary-600">
          Produse noi, testate și gata de expediere. Adăugăm noutăți doar după ce le verificăm personal.
        </p>
      </div>

      {newProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-secondary-600">
            Momentan nu avem produse noi. Revino curând!
          </p>
        </div>
      )}
    </div>
  )
}
