'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

interface ProductSpec {
  label: string
  value: string
}

interface ProductTabsProps {
  description: string
  benefits: string[]
  specs: ProductSpec[]
}

type TabId = 'description' | 'specifications' | 'delivery'

export function ProductTabs({ description, benefits, specs }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('description')

  const tabs = [
    { id: 'description' as TabId, label: 'Descriere' },
    { id: 'specifications' as TabId, label: 'Specificații' },
    { id: 'delivery' as TabId, label: 'Livrare și Retur' },
  ]

  return (
    <div className="mb-16">
      {/* Tab Navigation */}
      <div className="border-b border-secondary-200">
        <nav className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-primary-600 text-primary-600 font-medium'
                  : 'border-transparent text-secondary-600 hover:text-secondary-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-8">
        {/* Description Tab */}
        {activeTab === 'description' && (
          <>
            {/* Benefits */}
            {benefits.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Caracteristici principale
                </h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Description */}
            <div className="prose-product max-w-none">
              <div dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} />
            </div>
          </>
        )}

        {/* Specifications Tab */}
        {activeTab === 'specifications' && (
          <>
            {specs.length > 0 ? (
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Specificații tehnice
                </h3>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {specs.map((spec, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? 'bg-secondary-50' : 'bg-white'}
                        >
                          <td className="px-4 py-3 text-sm font-medium text-secondary-700 w-1/3">
                            {spec.label}
                          </td>
                          <td className="px-4 py-3 text-sm text-secondary-900">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <p className="text-secondary-600">
                Nu sunt disponibile specificații pentru acest produs.
              </p>
            )}
          </>
        )}

        {/* Delivery & Returns Tab */}
        {activeTab === 'delivery' && <DeliveryAndReturns />}
      </div>
    </div>
  )
}

/**
 * Reusable static component for Delivery & Returns information
 */
function DeliveryAndReturns() {
  return (
    <div className="space-y-8">
      {/* Delivery Section */}
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Informații livrare
        </h3>
        <div className="space-y-3 text-secondary-700">
          <p>
            <strong>Livrare prin curier:</strong> Comenzile sunt livrate în 1-3 zile 
            lucrătoare în toată România, prin curier rapid.
          </p>
          <p>
            <strong>Cost livrare:</strong> Livrarea costă 15 RON. Pentru comenzi 
            peste 150 RON, livrarea este gratuită.
          </p>
          <p>
            <strong>Procesare comandă:</strong> Comenzile plasate până la ora 14:00 
            în zilele lucrătoare sunt procesate în aceeași zi.
          </p>
        </div>
      </div>

      {/* Returns Section */}
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Politica de retur
        </h3>
        <div className="space-y-3 text-secondary-700">
          <p>
            <strong>Drept de retur:</strong> Ai la dispoziție 14 zile calendaristice 
            de la primirea coletului pentru a returna produsele, fără a oferi un motiv.
          </p>
          <p>
            <strong>Condiții retur:</strong> Produsele trebuie returnate în ambalajul 
            original, nefolosite și cu toate etichetele intacte.
          </p>
          <p>
            <strong>Proces de retur:</strong> Pentru a iniția un retur, contactează-ne 
            prin email sau telefon. Îți vom trimite o etichetă de retur și vei primi 
            banii înapoi în maxim 14 zile de la primirea produselor returnate.
          </p>
          <p>
            <strong>Cost retur:</strong> Returul este gratuit pentru produsele 
            defecte sau greșite. Pentru retururi din alte motive, costul transportului 
            este suportat de client.
          </p>
        </div>
      </div>

      {/* Warranty Section */}
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Garanție
        </h3>
        <div className="space-y-3 text-secondary-700">
          <p>
            Toate produsele beneficiază de garanție conform legislației în vigoare. 
            Perioada de garanție este specificată în fișa fiecărui produs.
          </p>
          <p>
            Pentru reclamații în perioada de garanție, contactează-ne cu dovada 
            achiziției (factură fiscală) și descrierea problemei.
          </p>
        </div>
      </div>
    </div>
  )
}
