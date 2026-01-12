import { SiteConfig } from '@/lib/types'

export const siteConfig: SiteConfig = {
  name: 'Doro-Store',
  description: 'Produse utile pentru casă, mașină și familie. Livrare rapidă în România, plată ramburs sau card, retur gratuit 14 zile.',
  url: 'https://www.numedomeniu.ro', // Change in production
  locale: 'ro_RO',
  currency: 'RON',
  freeShippingThreshold: 150,
  shippingCost: 15,
  contactEmail: 'contact@numedomeniu.ro',
  contactPhone: '07XX XXX XXX',
  address: 'Str. Exemplu nr. 1, București, România',
  cui: 'RO12345678',
  regCom: 'J40/1234/2025',
  socialLinks: {
    facebook: 'https://facebook.com/numemagazin',
    instagram: 'https://instagram.com/numemagazin',
  },
}

// Navigation structure
export const mainNavigation = [
  {
    name: 'Gadgeturi',
    href: '/gadgeturi',
    children: [
      { name: 'Încărcătoare Wireless', href: '/gadgeturi/incarcatoare-wireless' },
      { name: 'Accesorii Telefon', href: '/gadgeturi/accesorii-telefon' },
      { name: 'Electronice Utile', href: '/gadgeturi/electronice-utile' },
    ],
  },
  {
    name: 'Jucării',
    href: '/jucarii',
    children: [
      { name: 'Jucării Educative', href: '/jucarii/jucarii-educative' },
      { name: 'Jucării Interactive', href: '/jucarii/jucarii-interactive' },
      { name: 'Jucării Exterior', href: '/jucarii/jucarii-exterior' },
    ],
  },
  {
    name: 'Accesorii Casă',
    href: '/accesorii-casa',
    children: [
      { name: 'Organizare', href: '/accesorii-casa/organizare' },
      { name: 'Iluminat Decorativ', href: '/accesorii-casa/iluminat-decorativ' },
      { name: 'Bucătărie', href: '/accesorii-casa/bucatarie' },
    ],
  },
  {
    name: 'Accesorii Auto',
    href: '/accesorii-auto',
    children: [
      { name: 'Suporturi Telefon', href: '/accesorii-auto/suporturi-telefon' },
      { name: 'Organizatoare Auto', href: '/accesorii-auto/organizatoare-auto' },
      { name: 'Electronice Auto', href: '/accesorii-auto/electronice-auto' },
    ],
  },
  {
    name: 'Cadouri',
    href: '/cadouri',
    children: [
      { name: 'Pentru El', href: '/cadouri/pentru-el' },
      { name: 'Pentru Ea', href: '/cadouri/pentru-ea' },
      { name: 'Pentru Copii', href: '/cadouri/pentru-copii' },
    ],
  },
  {
    name: 'Oferte',
    href: '/oferte',
  },
]

export const footerNavigation = {
  informatii: [
    { name: 'Despre Noi', href: '/despre-noi' },
    { name: 'Livrare și Plată', href: '/livrare-si-plata' },
    { name: 'Întrebări Frecvente', href: '/intrebari-frecvente' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  contClient: [
    { name: 'Contul Meu', href: '/contul-meu' },
    { name: 'Comenzile Mele', href: '/contul-meu/comenzi' },
  ],
  legal: [
    { name: 'Termeni și Condiții', href: '/termeni-si-conditii' },
    { name: 'Politica de Retur', href: '/politica-de-retur' },
    { name: 'Politica de Confidențialitate', href: '/politica-de-confidentialitate' },
    { name: 'Politica Cookies', href: '/politica-cookies' },
    { name: 'ANPC', href: 'https://anpc.ro', external: true },
    { name: 'SOL', href: 'https://ec.europa.eu/consumers/odr', external: true },
  ],
}
