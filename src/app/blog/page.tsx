import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Blog — În curând',
  description: 'Articole utile despre produsele noastre și sfaturi practice. În curând.',
}

export default function BlogPage() {
  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-2xl mx-auto text-center py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          Blog
        </h1>
        <p className="text-lg text-secondary-600 mb-8">
          Lucrăm la articole utile despre produsele noastre și sfaturi practice.
          Revino curând sau abonează-te la newsletter ca să fii primul care află.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-secondary-900 text-white font-semibold rounded-lg hover:bg-secondary-800 transition-colors"
        >
          Înapoi la magazin
        </Link>
      </div>
    </div>
  )
}
