import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-secondary-300 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
        Pagina nu a fost găsită
      </h2>
      <p className="text-secondary-600 mb-8 max-w-md mx-auto">
        Ne pare rău, dar pagina pe care o cauți nu există sau a fost mutată.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
        >
          Înapoi la pagina principală
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-secondary-300 text-secondary-700 font-semibold rounded-lg hover:bg-secondary-50 transition-colors"
        >
          Contactează-ne
        </Link>
      </div>
    </div>
  )
}
