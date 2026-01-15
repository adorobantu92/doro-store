import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Întrebări Frecvente — FAQ',
  description: 'Răspunsuri la cele mai frecvente întrebări despre comenzi, livrare, plată și retururi.',
}

const faqs = [
  {
    category: 'Comenzi și Livrare',
    questions: [
      {
        q: 'Cât durează livrarea?',
        a: 'Între 1 și 3 zile lucrătoare pentru majoritatea localităților din România. Comenzile plasate înainte de ora 14:00 pleacă în aceeași zi.',
      },
      {
        q: 'Cât costă livrarea?',
        a: `${siteConfig.shippingCost} lei pentru comenzi sub ${siteConfig.freeShippingThreshold} lei. Gratuit pentru comenzi peste ${siteConfig.freeShippingThreshold} lei.`,
      },
      {
        q: 'Pot urmări comanda?',
        a: 'Da. După expediere primești SMS și email cu numărul AWB. Poți urmări coletul pe site-ul curierului în timp real.',
      },
      {
        q: 'Ce fac dacă nu sunt acasă la livrare?',
        a: 'Curierul te sună înainte să ajungă. Dacă nu răspunzi, reprogramează livrarea pentru a doua zi sau poți ridica coletul de la sediul curierului.',
      },
    ],
  },
  {
    category: 'Plată',
    questions: [
      {
        q: 'Pot plăti ramburs?',
        a: 'Da. Plătești curierului când primești coletul, cash sau cu cardul. Taxa de ramburs este inclusă în costul de livrare.',
      },
      {
        q: 'Este sigură plata cu cardul?',
        a: 'Da. Plata este procesată prin Stripe, unul dintre cei mai siguri procesatori de plăți din lume. Nu stocăm datele cardului tău.',
      },
      {
        q: 'Primesc factură?',
        a: 'Da. Factură fiscală la fiecare comandă. O primești pe email și o găsești și în colet.',
      },
    ],
  },
  {
    category: 'Retururi și Garanție',
    questions: [
      {
        q: 'Pot returna produsul dacă nu îmi place?',
        a: 'Da. Ai 14 zile să returnezi orice produs, fără să dai explicații. Produsul trebuie să fie în starea originală, cu ambalajul intact.',
      },
      {
        q: 'Cine plătește transportul la retur?',
        a: 'Dacă produsul este defect sau diferit de ce ai comandat, noi plătim. Dacă pur și simplu te-ai răzgândit, costul de retur este în sarcina ta.',
      },
      {
        q: 'Cât durează să primesc banii înapoi?',
        a: 'Maxim 14 zile de la primirea produsului returnat. De obicei, în 3-5 zile lucrătoare.',
      },
      {
        q: 'Produsele au garanție?',
        a: 'Da. Garanția legală este de minimum 24 de luni pentru toate produsele. La unele produse, producătorul oferă garanție extinsă.',
      },
    ],
  },
  {
    category: 'Produse',
    questions: [
      {
        q: 'Produsele sunt originale?',
        a: 'Nu vindem branduri de lux sau replici. Vindem produse utile, testate de noi, cu descrieri și poze reale.',
      },
      {
        q: 'De ce nu aveți foarte multe produse?',
        a: 'Testăm personal fiecare produs înainte să îl adăugăm în magazin. Preferăm puține produse de calitate decât mii de produse aleatorii.',
      },
      {
        q: 'Pot cere un produs care nu e în magazin?',
        a: 'Poți să ne scrii și vom încerca să îl găsim. Nu promitem, dar facem tot posibilul.',
      },
    ],
  },
]

export default function IntrebariFrecventePage() {
  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Întrebări Frecvente', href: '/intrebari-frecvente' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          Întrebări Frecvente
        </h1>
        <p className="text-lg text-secondary-600 mb-12">
          Răspunsuri scurte și la obiect. Dacă nu găsești ce cauți, <Link href="/contact" className="text-primary-600 hover:underline">scrie-ne</Link>.
        </p>

        <div className="space-y-12">
          {faqs.map((section) => (
            <section key={section.category}>
              <h2 className="text-xl font-bold text-secondary-900 mb-6">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-lg border border-secondary-200 p-5"
                  >
                    <summary className="font-medium text-secondary-900 cursor-pointer list-none flex items-center justify-between gap-4">
                      {faq.q}
                      <span className="text-primary-600 group-open:rotate-180 transition-transform flex-shrink-0">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-secondary-600">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-secondary-100 rounded-xl text-center">
          <p className="text-secondary-700 mb-4">
            Nu ai găsit răspunsul?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-secondary-900 text-white font-semibold rounded-lg hover:bg-secondary-800 transition-colors"
          >
            Contactează-ne
          </Link>
        </div>
      </div>
    </div>
  )
}
