import { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CheckCircle2, Users, Package, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Despre Noi — Cine suntem',
  description: 'Suntem o firmă română care vinde produse testate, cu descrieri oneste și livrare rapidă. Fără trucuri de marketing.',
}

export default function DespreNoiPage() {
  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Despre Noi', href: '/despre-noi' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-secondary-900 mb-6">
          Un magazin online care face lucrurile <span className="text-primary-600">cum trebuie.</span>
        </h1>
        <p className="text-xl text-secondary-600 leading-relaxed">
          Nu suntem cel mai mare magazin și nici nu vrem să fim. Suntem o echipă mică din România 
          care vinde produse pe care le-am testat, cu descrieri pe care le-am scris noi, 
          și cu prețuri care reflectă realitatea.
        </p>
      </div>

      {/* Values */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-secondary-50 rounded-2xl p-8">
          <CheckCircle2 className="w-10 h-10 text-green-600 mb-4" />
          <h2 className="text-xl font-bold text-secondary-900 mb-3">Produse testate</h2>
          <p className="text-secondary-600">
            Fiecare produs din magazin a trecut prin mâinile noastre. Nu vindem nimic ce n-am 
            folosi noi înșine. Dacă ceva nu funcționează cum trebuie, nu ajunge în magazin.
          </p>
        </div>
        
        <div className="bg-secondary-50 rounded-2xl p-8">
          <Package className="w-10 h-10 text-primary-600 mb-4" />
          <h2 className="text-xl font-bold text-secondary-900 mb-3">Descrieri oneste</h2>
          <p className="text-secondary-600">
            Pozele sunt ale produselor reale. Specificațiile sunt verificate. Nu exagerăm și 
            nu ascundem defectele. Dacă un produs are limitări, le menționăm clar.
          </p>
        </div>
        
        <div className="bg-secondary-50 rounded-2xl p-8">
          <Shield className="w-10 h-10 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold text-secondary-900 mb-3">Prețuri corecte</h2>
          <p className="text-secondary-600">
            Nu umflăm prețurile ca să putem face "reduceri" de 70%. Prețul pe care îl vezi 
            este prețul real. Când avem oferte, sunt oferte reale.
          </p>
        </div>
        
        <div className="bg-secondary-50 rounded-2xl p-8">
          <Users className="w-10 h-10 text-purple-600 mb-4" />
          <h2 className="text-xl font-bold text-secondary-900 mb-3">Suport real</h2>
          <p className="text-secondary-600">
            Când ne contactezi, vorbești cu oameni reali din echipa noastră. Nu cu boți, 
            nu cu call center externalizat. Răspundem la întrebări și rezolvăm probleme.
          </p>
        </div>
      </div>

      {/* Company Info */}
      <div className="bg-secondary-900 text-white rounded-2xl p-8 md:p-12 mb-16">
        <h2 className="text-2xl font-bold mb-6">Date firmă</h2>
        <div className="grid md:grid-cols-2 gap-6 text-secondary-300">
          <div>
            <p className="mb-2"><span className="text-white font-medium">Denumire:</span> {siteConfig.name} SRL</p>
            <p className="mb-2"><span className="text-white font-medium">CUI:</span> {siteConfig.cui}</p>
            <p><span className="text-white font-medium">Nr. Reg. Com.:</span> {siteConfig.regCom}</p>
          </div>
          <div>
            <p className="mb-2"><span className="text-white font-medium">Adresă:</span> {siteConfig.address}</p>
            <p className="mb-2"><span className="text-white font-medium">Email:</span> {siteConfig.contactEmail}</p>
            <p><span className="text-white font-medium">Telefon:</span> {siteConfig.contactPhone}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">
          Ai întrebări?
        </h2>
        <p className="text-secondary-600 mb-6">
          Suntem aici să te ajutăm. Scrie-ne sau sună-ne.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-secondary-900 text-white font-bold rounded-lg hover:bg-secondary-800 transition-colors"
        >
          Contactează-ne
        </Link>
      </div>
    </div>
  )
}
