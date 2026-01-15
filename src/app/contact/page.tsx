import { Metadata } from 'next'
import { siteConfig } from '@/lib/config'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Vorbește cu noi',
  description: 'Contactează-ne prin telefon, email sau formularul de contact. Răspundem în maxim 24 de ore în zilele lucrătoare.',
}

export default function ContactPage() {
  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Header */}
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-secondary-900 mb-4">
          Contactează-ne
        </h1>
        <p className="text-xl text-secondary-600">
          Ai o întrebare? Vrei să știi mai multe despre un produs? Scrie-ne sau sună-ne. 
          Răspundem în maxim 24 de ore în zilele lucrătoare.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Informații de contact
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <Phone className="w-6 h-6 text-primary-700" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900 mb-1">Telefon</h3>
                <a 
                  href={`tel:${siteConfig.contactPhone.replace(/\s/g, '')}`}
                  className="text-lg text-primary-600 hover:text-primary-700 font-medium"
                >
                  {siteConfig.contactPhone}
                </a>
                <p className="text-sm text-secondary-500 mt-1">Luni - Vineri, 9:00 - 18:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <Mail className="w-6 h-6 text-primary-700" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900 mb-1">Email</h3>
                <a 
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-lg text-primary-600 hover:text-primary-700 font-medium"
                >
                  {siteConfig.contactEmail}
                </a>
                <p className="text-sm text-secondary-500 mt-1">Răspundem în maxim 24 de ore</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <MapPin className="w-6 h-6 text-primary-700" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900 mb-1">Adresă</h3>
                <p className="text-secondary-700">{siteConfig.address}</p>
                <p className="text-sm text-secondary-500 mt-1">Doar corespondență, fără ridicare personală</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <Clock className="w-6 h-6 text-primary-700" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900 mb-1">Program</h3>
                <p className="text-secondary-700">Luni - Vineri: 9:00 - 18:00</p>
                <p className="text-secondary-700">Sâmbătă - Duminică: Închis</p>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="mt-10 p-6 bg-secondary-100 rounded-xl">
            <h3 className="font-semibold text-secondary-900 mb-3">Date firmă</h3>
            <div className="text-sm text-secondary-600 space-y-1">
              <p><span className="font-medium">Denumire:</span> {siteConfig.name} SRL</p>
              <p><span className="font-medium">CUI:</span> {siteConfig.cui}</p>
              <p><span className="font-medium">Nr. Reg. Com.:</span> {siteConfig.regCom}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Trimite-ne un mesaj
          </h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                Nume complet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Numele tău"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="email@exemplu.ro"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="07XX XXX XXX"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                Subiect <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
              >
                <option value="">Selectează subiectul</option>
                <option value="produs">Întrebare despre un produs</option>
                <option value="comanda">Întrebare despre o comandă</option>
                <option value="retur">Retur sau schimb</option>
                <option value="reclamatie">Reclamație</option>
                <option value="altele">Altele</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                Mesaj <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                placeholder="Scrie mesajul tău aici..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-secondary-900 text-white font-bold rounded-lg hover:bg-secondary-800 transition-colors"
            >
              Trimite mesajul
            </button>
            
            <p className="text-sm text-secondary-500 text-center">
              Vom răspunde în maxim 24 de ore în zilele lucrătoare.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
