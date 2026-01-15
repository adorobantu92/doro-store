import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { User, Package, Heart, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contul Meu',
  description: 'Gestionează contul tău, vezi comenzile și adresele salvate.',
}

export default function ContulMeuPage() {
  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Contul Meu', href: '/contul-meu' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8">
          Contul Meu
        </h1>

        {/* Placeholder - în producție ar fi autentificare */}
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
          <p className="text-secondary-700">
            <strong>Notă:</strong> Sistemul de conturi nu este încă activ. 
            Poți plasa comenzi fără cont — primești confirmarea și urmărirea pe email.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/contul-meu/comenzi"
            className="flex items-start gap-4 p-6 bg-white border border-secondary-200 rounded-xl hover:border-primary-400 hover:shadow-md transition-all"
          >
            <Package className="w-8 h-8 text-primary-600" />
            <div>
              <h2 className="font-semibold text-secondary-900 mb-1">Comenzile mele</h2>
              <p className="text-sm text-secondary-600">Vezi istoricul comenzilor și statusul livrării.</p>
            </div>
          </Link>

          <div className="flex items-start gap-4 p-6 bg-secondary-50 border border-secondary-200 rounded-xl opacity-60">
            <User className="w-8 h-8 text-secondary-400" />
            <div>
              <h2 className="font-semibold text-secondary-500 mb-1">Datele mele</h2>
              <p className="text-sm text-secondary-400">În curând</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-secondary-50 border border-secondary-200 rounded-xl opacity-60">
            <MapPin className="w-8 h-8 text-secondary-400" />
            <div>
              <h2 className="font-semibold text-secondary-500 mb-1">Adrese salvate</h2>
              <p className="text-sm text-secondary-400">În curând</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-secondary-50 border border-secondary-200 rounded-xl opacity-60">
            <Heart className="w-8 h-8 text-secondary-400" />
            <div>
              <h2 className="font-semibold text-secondary-500 mb-1">Favorite</h2>
              <p className="text-sm text-secondary-400">În curând</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
