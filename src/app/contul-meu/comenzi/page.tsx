import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Package, Search } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Comenzile Mele',
  description: 'Vezi istoricul comenzilor și urmărește statusul livrărilor.',
}

export default function ComenziPage() {
  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Contul Meu', href: '/contul-meu' },
    { label: 'Comenzile Mele', href: '/contul-meu/comenzi' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8">
          Comenzile Mele
        </h1>

        {/* Search by order ID */}
        <div className="bg-white border border-secondary-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-secondary-900 mb-4 flex items-center gap-2">
            <Search className="w-5 h-5" />
            Caută o comandă
          </h2>
          <form className="flex gap-3">
            <input
              type="text"
              placeholder="Număr comandă (ex: DS-2026-0001)"
              className="flex-1 px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-secondary-900 text-white font-semibold rounded-lg hover:bg-secondary-800 transition-colors"
            >
              Caută
            </button>
          </form>
          <p className="text-sm text-secondary-500 mt-3">
            Găsești numărul comenzii în emailul de confirmare.
          </p>
        </div>

        {/* Empty state */}
        <div className="text-center py-12 bg-secondary-50 rounded-xl">
          <Package className="w-16 h-16 text-secondary-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-secondary-900 mb-2">
            Nicio comandă încă
          </h2>
          <p className="text-secondary-600 mb-6">
            Când plasezi o comandă, o vei vedea aici.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Explorează produsele
          </Link>
        </div>

        {/* Help */}
        <div className="mt-8 p-6 bg-secondary-100 rounded-xl">
          <h3 className="font-semibold text-secondary-900 mb-2">Ai nevoie de ajutor?</h3>
          <p className="text-secondary-600 text-sm mb-4">
            Dacă ai întrebări despre o comandă, scrie-ne la{' '}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary-600 hover:underline">
              {siteConfig.contactEmail}
            </a>{' '}
            sau sună-ne la{' '}
            <a href={`tel:${siteConfig.contactPhone.replace(/\s/g, '')}`} className="text-primary-600 hover:underline">
              {siteConfig.contactPhone}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
