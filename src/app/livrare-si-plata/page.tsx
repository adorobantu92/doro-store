import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { siteConfig } from '@/lib/config'
import { Truck, CreditCard, Banknote, Clock, MapPin, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Livrare și Plată — Cum funcționează',
  description: 'Informații despre metodele de livrare și plată. Livrare în 1-3 zile, plată ramburs sau card online.',
}

export default function LivrareSiPlataPage() {
  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Livrare și Plată', href: '/livrare-si-plata' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          Livrare și Plată
        </h1>
        <p className="text-lg text-secondary-600 mb-12">
          Totul simplu și transparent. Fără costuri ascunse, fără surprize.
        </p>

        {/* Livrare */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center gap-3">
            <Truck className="w-7 h-7 text-primary-600" />
            Livrare
          </h2>
          
          <div className="space-y-6">
            <div className="bg-secondary-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-secondary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Timp de livrare</h3>
                  <p className="text-secondary-600">
                    1-3 zile lucrătoare pentru majoritatea localităților din România. 
                    Comenzile plasate înainte de ora 14:00 pleacă în aceeași zi.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Package className="w-6 h-6 text-secondary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Cost livrare</h3>
                  <p className="text-secondary-600">
                    <strong>{siteConfig.shippingCost} lei</strong> pentru comenzi sub {siteConfig.freeShippingThreshold} lei.<br />
                    <strong className="text-green-600">Gratuit</strong> pentru comenzi peste {siteConfig.freeShippingThreshold} lei.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Curieri parteneri</h3>
                  <p className="text-secondary-600">
                    Livrăm prin Fan Courier și Sameday. Primești SMS/email cu AWB-ul și poți urmări coletul în timp real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plata */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center gap-3">
            <CreditCard className="w-7 h-7 text-primary-600" />
            Metode de plată
          </h2>
          
          <div className="space-y-6">
            <div className="bg-secondary-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Banknote className="w-6 h-6 text-secondary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Ramburs la curier</h3>
                  <p className="text-secondary-600">
                    Plătești cash sau cu cardul direct curierului când primești coletul. 
                    Taxa de ramburs este deja inclusă în costul de livrare afișat.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CreditCard className="w-6 h-6 text-secondary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Card online</h3>
                  <p className="text-secondary-600">
                    Visa, Mastercard, Apple Pay, Google Pay. Plata este procesată securizat prin Stripe. 
                    Nu stocăm datele cardului tău.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="bg-primary-50 rounded-xl p-6">
          <h3 className="font-semibold text-secondary-900 mb-2">Bun de știut</h3>
          <ul className="text-secondary-600 space-y-2 text-sm">
            <li>• Toate prețurile includ TVA și sunt finale</li>
            <li>• Primești factură fiscală la fiecare comandă</li>
            <li>• Poți verifica coletul înainte să plătești (la ramburs)</li>
            <li>• Dacă nu ești acasă, curierul te sună și reprogramează livrarea</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
