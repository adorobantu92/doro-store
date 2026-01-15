import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { siteConfig } from '@/lib/config'
import { RotateCcw, CheckCircle2, XCircle, Clock, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Politica de Retur — 14 zile, fără întrebări',
  description: 'Ai 14 zile să returnezi orice produs. Fără explicații, fără bătăi de cap.',
}

export default function PoliticaDeReturPage() {
  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Politica de Retur', href: '/politica-de-retur' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-3xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-primary-100 rounded-2xl">
            <RotateCcw className="w-10 h-10 text-primary-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-secondary-900">
              Politica de Retur
            </h1>
            <p className="text-lg text-secondary-600">
              14 zile, fără întrebări
            </p>
          </div>
        </div>

        {/* Key Points */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
            <div className="text-3xl font-black text-green-600 mb-1">14</div>
            <div className="text-sm text-green-700">zile pentru retur</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
            <div className="text-3xl font-black text-green-600 mb-1">0</div>
            <div className="text-sm text-green-700">explicații necesare</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
            <div className="text-3xl font-black text-green-600 mb-1">14</div>
            <div className="text-sm text-green-700">zile pentru ramburs</div>
          </div>
        </div>

        {/* Process */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-secondary-900 mb-6">
            Cum returnezi un produs
          </h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900">Trimite-ne un email</h3>
                <p className="text-secondary-600">
                  Scrie-ne la <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary-600 hover:underline">{siteConfig.contactEmail}</a> cu 
                  numărul comenzii și produsul pe care vrei să îl returnezi.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900">Primești instrucțiuni</h3>
                <p className="text-secondary-600">
                  Îți trimitem adresa de retur și un formular de retur (opțional să îl completezi).
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900">Trimiți coletul</h3>
                <p className="text-secondary-600">
                  Împachetează produsul în ambalajul original și trimite-l prin curier.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900">Primești banii</h3>
                <p className="text-secondary-600">
                  După ce primim și verificăm produsul, îți returnăm banii în maxim 14 zile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-secondary-900 mb-6">
            Condiții de retur
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Acceptăm returul dacă:
              </h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Au trecut maxim 14 zile de la primire</li>
                <li>• Produsul este în starea originală</li>
                <li>• Ambalajul este intact</li>
                <li>• Toate accesoriile sunt incluse</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Nu acceptăm returul dacă:
              </h3>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• Produsul a fost folosit excesiv</li>
                <li>• Are deteriorări cauzate de client</li>
                <li>• Lipsesc componente sau accesorii</li>
                <li>• Au trecut mai mult de 14 zile</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Costs */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-secondary-900 mb-6">
            Cine plătește transportul?
          </h2>
          
          <div className="space-y-4">
            <div className="bg-secondary-50 rounded-xl p-5">
              <h3 className="font-semibold text-secondary-900 mb-2">Produs defect sau greșit</h3>
              <p className="text-secondary-600">
                Dacă produsul este defect sau diferit de ce ai comandat, <strong>noi plătim transportul de retur</strong>.
              </p>
            </div>
            
            <div className="bg-secondary-50 rounded-xl p-5">
              <h3 className="font-semibold text-secondary-900 mb-2">Te-ai răzgândit</h3>
              <p className="text-secondary-600">
                Dacă pur și simplu nu mai vrei produsul, <strong>costul de retur este în sarcina ta</strong> (aprox. 15-25 lei).
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-primary-50 rounded-xl p-6 text-center">
          <Mail className="w-10 h-10 text-primary-600 mx-auto mb-4" />
          <h3 className="font-semibold text-secondary-900 mb-2">Vrei să returnezi un produs?</h3>
          <p className="text-secondary-600 mb-4">
            Scrie-ne și te ajutăm.
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}?subject=Retur produs`}
            className="inline-flex items-center px-6 py-3 bg-secondary-900 text-white font-semibold rounded-lg hover:bg-secondary-800 transition-colors"
          >
            {siteConfig.contactEmail}
          </a>
        </div>
      </div>
    </div>
  )
}
