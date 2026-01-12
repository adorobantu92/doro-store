// =============================================================================
// STATIC DATA - Categories
// =============================================================================
// MIGRATION NOTE: Replace this file with database queries.
// Keep the same function signatures for zero-refactor migration.
// =============================================================================

import { Category } from '@/lib/types'

export const categories: Category[] = [
  // Parent Categories
  {
    id: 'gadgeturi',
    slug: 'gadgeturi',
    name: 'Gadgeturi',
    description: 'Gadgeturi alese pentru utilitate, nu pentru hype. Fiecare produs din această categorie rezolvă o problemă concretă — de la încărcarea telefonului până la organizarea cablurilor. Toate cu livrare rapidă și drept de retur 14 zile.',
    shortDescription: 'Încărcătoare, suporturi, accesorii tech — alese să rezolve probleme reale.',
    order: 1,
    isActive: true,
  },
  {
    id: 'jucarii',
    slug: 'jucarii',
    name: 'Jucării',
    description: 'Jucării care țin copiii ocupați și îi ajută să învețe. Alegem doar produse din materiale sigure, fără piese mici periculoase pentru cei mici. Verifică vârsta recomandată la fiecare produs.',
    shortDescription: 'Jucării educative și interactive pentru toate vârstele.',
    order: 2,
    isActive: true,
  },
  {
    id: 'accesorii-casa',
    slug: 'accesorii-casa',
    name: 'Accesorii Casă',
    description: 'Produse mici care fac diferențe mari. Organizatoare pentru debara, iluminat LED pentru atmosferă, ustensile care chiar funcționează. Alese pentru durabilitate, nu pentru aspect în poze.',
    shortDescription: 'Organizatoare, iluminat decorativ, ustensile de bucătărie.',
    order: 3,
    isActive: true,
  },
  {
    id: 'accesorii-auto',
    slug: 'accesorii-auto',
    name: 'Accesorii Auto',
    description: 'Accesorii pentru mașină care nu cad la prima groapă. Suporturi de telefon testate pe drumurile noastre, organizatoare care chiar încap în portbagaj, încărcătoare care nu ard siguranțe.',
    shortDescription: 'Suporturi telefon stabile, organizatoare portbagaj, încărcătoare auto.',
    order: 4,
    isActive: true,
  },
  {
    id: 'cadouri',
    slug: 'cadouri',
    name: 'Cadouri',
    description: 'Nu știi ce să cumperi? Aici găsești produse care funcționează ca și cadou — utile, cu aspect plăcut și la prețuri care nu strică bugetul.',
    shortDescription: 'Idei de cadouri practice la prețuri rezonabile.',
    order: 5,
    isActive: true,
  },
  {
    id: 'oferte',
    slug: 'oferte',
    name: 'Oferte',
    description: 'Produse la prețuri reduse. Stocuri limitate, prețuri reale — nu mărim prețul ca să îl reducem.',
    shortDescription: 'Produse la prețuri reduse, stocuri limitate.',
    order: 6,
    isActive: true,
  },

  // Subcategories - Gadgeturi
  {
    id: 'incarcatoare-wireless',
    slug: 'incarcatoare-wireless',
    name: 'Încărcătoare Wireless',
    description: 'Încărcătoare wireless de calitate, cu protecție la supraîncălzire și compatibilitate universală.',
    shortDescription: 'Încărcare fără fir pentru orice telefon compatibil.',
    parentId: 'gadgeturi',
    order: 1,
    isActive: true,
  },
  {
    id: 'accesorii-telefon',
    slug: 'accesorii-telefon',
    name: 'Accesorii Telefon',
    description: 'Cabluri, suporturi, huse și accesorii pentru smartphone-uri.',
    shortDescription: 'Cabluri, suporturi și accesorii pentru telefonul tău.',
    parentId: 'gadgeturi',
    order: 2,
    isActive: true,
  },
  {
    id: 'electronice-utile',
    slug: 'electronice-utile',
    name: 'Electronice Utile',
    description: 'Gadgeturi electronice pentru productivitate și viața de zi cu zi.',
    shortDescription: 'Electronice practice pentru birou și acasă.',
    parentId: 'gadgeturi',
    order: 3,
    isActive: true,
  },

  // Subcategories - Jucării
  {
    id: 'jucarii-educative',
    slug: 'jucarii-educative',
    name: 'Jucării Educative',
    description: 'Jucării care dezvoltă creativitatea, gândirea logică și abilitățile motorii ale copiilor.',
    shortDescription: 'Jucării care ajută copiii să învețe jucându-se.',
    parentId: 'jucarii',
    order: 1,
    isActive: true,
  },
  {
    id: 'jucarii-interactive',
    slug: 'jucarii-interactive',
    name: 'Jucării Interactive',
    description: 'Mașinuțe telecomandă, roboți și jucării electronice interactive.',
    shortDescription: 'Mașinuțe RC, roboți și jucării electronice.',
    parentId: 'jucarii',
    order: 2,
    isActive: true,
  },
  {
    id: 'jucarii-exterior',
    slug: 'jucarii-exterior',
    name: 'Jucării Exterior',
    description: 'Jucării pentru curte, parc și activități în aer liber.',
    shortDescription: 'Pentru distracție în aer liber.',
    parentId: 'jucarii',
    order: 3,
    isActive: true,
  },

  // Subcategories - Accesorii Casă
  {
    id: 'organizare',
    slug: 'organizare',
    name: 'Organizare',
    description: 'Soluții de organizare pentru fiecare cameră din casă.',
    shortDescription: 'Cutii, cuiere și organizatoare pentru ordine în casă.',
    parentId: 'accesorii-casa',
    order: 1,
    isActive: true,
  },
  {
    id: 'iluminat-decorativ',
    slug: 'iluminat-decorativ',
    name: 'Iluminat Decorativ',
    description: 'Lămpi LED, lumini de noapte și iluminat ambient pentru atmosferă.',
    shortDescription: 'Lămpi și lumini pentru ambianță.',
    parentId: 'accesorii-casa',
    order: 2,
    isActive: true,
  },
  {
    id: 'bucatarie',
    slug: 'bucatarie',
    name: 'Bucătărie',
    description: 'Ustensile și accesorii practice pentru bucătărie.',
    shortDescription: 'Ustensile și recipiente pentru bucătărie.',
    parentId: 'accesorii-casa',
    order: 3,
    isActive: true,
  },

  // Subcategories - Accesorii Auto
  {
    id: 'suporturi-telefon',
    slug: 'suporturi-telefon',
    name: 'Suporturi Telefon',
    description: 'Suporturi pentru telefon: magnetice, cu clemă, pentru grilă sau parbriz.',
    shortDescription: 'Suporturi stabile pentru navigare și apeluri.',
    parentId: 'accesorii-auto',
    order: 1,
    isActive: true,
  },
  {
    id: 'organizatoare-auto',
    slug: 'organizatoare-auto',
    name: 'Organizatoare Auto',
    description: 'Organizatoare pentru portbagaj, scaune și spațiile din mașină.',
    shortDescription: 'Pentru ordine în mașină.',
    parentId: 'accesorii-auto',
    order: 2,
    isActive: true,
  },
  {
    id: 'electronice-auto',
    slug: 'electronice-auto',
    name: 'Electronice Auto',
    description: 'Încărcătoare auto, adaptoare și alte electronice pentru mașină.',
    shortDescription: 'Încărcătoare și accesorii electronice auto.',
    parentId: 'accesorii-auto',
    order: 3,
    isActive: true,
  },

  // Subcategories - Cadouri
  {
    id: 'pentru-el',
    slug: 'pentru-el',
    name: 'Pentru El',
    description: 'Cadouri practice pentru bărbați: gadgeturi, accesorii auto, electronice.',
    shortDescription: 'Cadouri pentru bărbați.',
    parentId: 'cadouri',
    order: 1,
    isActive: true,
  },
  {
    id: 'pentru-ea',
    slug: 'pentru-ea',
    name: 'Pentru Ea',
    description: 'Cadouri pentru femei: accesorii casă, organizatoare, iluminat decorativ.',
    shortDescription: 'Cadouri pentru femei.',
    parentId: 'cadouri',
    order: 2,
    isActive: true,
  },
  {
    id: 'pentru-copii',
    slug: 'pentru-copii',
    name: 'Pentru Copii',
    description: 'Cadouri pentru copii de toate vârstele: jucării educative și interactive.',
    shortDescription: 'Cadouri pentru copii.',
    parentId: 'cadouri',
    order: 3,
    isActive: true,
  },
]

// =============================================================================
// DATA ACCESS FUNCTIONS
// =============================================================================

export function getAllCategories(): Category[] {
  return categories.filter((c) => c.isActive)
}

export function getParentCategories(): Category[] {
  return categories
    .filter((c) => c.isActive && !c.parentId)
    .sort((a, b) => a.order - b.order)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug && c.isActive)
}

export function getSubcategories(parentId: string): Category[] {
  return categories
    .filter((c) => c.parentId === parentId && c.isActive)
    .sort((a, b) => a.order - b.order)
}

export function getCategoryPath(category: Category): Category[] {
  const path: Category[] = [category]
  let current = category

  while (current.parentId) {
    const parent = categories.find((c) => c.id === current.parentId)
    if (parent) {
      path.unshift(parent)
      current = parent
    } else {
      break
    }
  }

  return path
}
