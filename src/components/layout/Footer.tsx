import Link from 'next/link'
import { siteConfig, footerNavigation } from '@/lib/config'
import { Facebook, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white mb-4 block">
              {siteConfig.name}
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Produse utile pentru casă, mașină și familie. Livrăm în toată România cu factură fiscală și drept de retur 14 zile.
            </p>
            <div className="flex gap-3">
              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary-800 rounded-lg hover:bg-secondary-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {siteConfig.socialLinks.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary-800 rounded-lg hover:bg-secondary-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Informații */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informații</h3>
            <ul className="space-y-2 text-sm">
              {footerNavigation.informatii.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cont Client */}
          <div>
            <h3 className="text-white font-semibold mb-4">Cont Client</h3>
            <ul className="space-y-2 text-sm">
              {footerNavigation.contClient.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  {'external' in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {item.name} ↗
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-secondary-800">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-secondary-500">Email:</span>{' '}
              <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white">
                {siteConfig.contactEmail}
              </a>
            </div>
            <div>
              <span className="text-secondary-500">Telefon:</span>{' '}
              <a href={`tel:${siteConfig.contactPhone.replace(/\s/g, '')}`} className="hover:text-white">
                {siteConfig.contactPhone}
              </a>
              <span className="text-secondary-500 ml-1">(L-V, 9:00-18:00)</span>
            </div>
            <div>
              <span className="text-secondary-500">Adresă:</span> {siteConfig.address}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm">
            <div>
              <p className="text-secondary-400">
                © {currentYear} {siteConfig.name}. Toate drepturile rezervate.
              </p>
              <p className="text-secondary-500 mt-1">
                CUI: {siteConfig.cui} | Nr. Reg. Com.: {siteConfig.regCom}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-secondary-400">
              <a
                href="https://anpc.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                ANPC
              </a>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                SOL - Platformă UE
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
