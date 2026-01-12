import Link from 'next/link'
import { getFeaturedProducts, getNewProducts, getParentCategories } from '@/lib/data'
import { ProductCard } from '@/components/product/ProductCard'
import { siteConfig } from '@/lib/config'
import { Truck, CreditCard, RotateCcw, FileText } from 'lucide-react'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(8)
  const newProducts = getNewProducts(4)
  const categories = getParentCategories()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Aici nu există "reduceri" de 70%.
              <br />
              Există produse care funcționează.
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Fără prețuri umflate artificial. Fără poze care nu seamănă cu realitatea. Fără "ultimele 3 bucăți" de 6 luni. Doar produse testate, descrise corect, livrate rapid.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/gadgeturi"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-bold rounded-lg shadow-lg hover:bg-primary-50 hover:scale-105 transition-all"
              >
                Vezi ce vindem de fapt →
              </Link>
              <Link
                href="/oferte"
                className="inline-flex items-center px-6 py-3 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Oferte reale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-BS Positioning */}
      <section className="bg-secondary-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-sm md:text-base">
            <span className="flex items-center gap-2">
              <span className="text-red-400">✕</span> Fără reduceri false
            </span>
            <span className="flex items-center gap-2">
              <span className="text-red-400">✕</span> Fără poze înșelătoare
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Produse testate, descrieri oneste
            </span>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-secondary-700">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary-600" />
              <span>Livrare în 1–3 zile</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-primary-600" />
              <span>Retur gratuit 14 zile</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary-600" />
              <span>Suport clienți real</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-8">
            Alege ce te interesează
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/${category.slug}`}
                className="group p-6 bg-white rounded-xl border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-secondary-600 line-clamp-2">
                  {category.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
                Ce cumpără clienții noștri
              </h2>
              <p className="text-secondary-600 mt-1">
                Produsele comandate cel mai des în ultima lună.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Products */}
      {newProducts.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
                  Noutăți în stoc
                </h2>
                <p className="text-secondary-600 mt-1">
                  Produse noi, testate și gata de expediere.
                </p>
              </div>
              <Link
                href="/noutati"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Vezi toate →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Us */}
      <section className="py-12 md:py-16 bg-secondary-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Un magazin normal, care face lucrurile corect
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Truck className="w-10 h-10 text-primary-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Livrare rapidă, oriunde în România</h3>
              <p className="text-secondary-300 text-sm">
                Comenzile plasate până la ora 14:00 pleacă în aceeași zi. Primești coletul în 1-3 zile lucrătoare prin Fan Courier sau Sameday.
              </p>
            </div>
            <div>
              <CreditCard className="w-10 h-10 text-primary-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Plătești cum vrei tu</h3>
              <p className="text-secondary-300 text-sm">
                Ramburs la curier, card online sau Apple Pay / Google Pay. Fără costuri ascunse, fără surprize la livrare.
              </p>
            </div>
            <div>
              <RotateCcw className="w-10 h-10 text-primary-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">14 zile drept de retur</h3>
              <p className="text-secondary-300 text-sm">
                Nu ți se potrivește? Îl returnezi. Te-ai răzgândit? Îl returnezi. Fără explicații, fără bătăi de cap.
              </p>
            </div>
            <div>
              <FileText className="w-10 h-10 text-primary-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Firmă română, factură fiscală</h3>
              <p className="text-secondary-300 text-sm">
                Suntem o firmă înregistrată în România. Primești factură fiscală la fiecare comandă.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-8 text-center">
            Întrebări frecvente
          </h2>
          <div className="space-y-6">
            <details className="group bg-white rounded-lg border border-secondary-200 p-6">
              <summary className="font-semibold text-secondary-900 cursor-pointer list-none flex items-center justify-between">
                Cât durează livrarea?
                <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-secondary-600">
                Între 1 și 3 zile lucrătoare pentru majoritatea localităților. Comenzile plasate înainte de ora 14:00 pleacă în aceeași zi.
              </p>
            </details>
            <details className="group bg-white rounded-lg border border-secondary-200 p-6">
              <summary className="font-semibold text-secondary-900 cursor-pointer list-none flex items-center justify-between">
                Pot plăti ramburs?
                <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-secondary-600">
                Da. Plătești curierului când primești coletul. Taxa de ramburs este inclusă în costul de livrare afișat.
              </p>
            </details>
            <details className="group bg-white rounded-lg border border-secondary-200 p-6">
              <summary className="font-semibold text-secondary-900 cursor-pointer list-none flex items-center justify-between">
                Ce fac dacă produsul nu îmi place?
                <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-secondary-600">
                Ai 14 zile să îl returnezi, fără să dai explicații. Trimite-ne un mesaj și îți explicăm pașii. Banii ți-i returnăm în maxim 14 zile de la primirea produsului returnat.
              </p>
            </details>
            <details className="group bg-white rounded-lg border border-secondary-200 p-6">
              <summary className="font-semibold text-secondary-900 cursor-pointer list-none flex items-center justify-between">
                Produsele au garanție?
                <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-secondary-600">
                Da. Garanția legală este de minimum 24 de luni pentru toate produsele. La unele produse, producătorul oferă garanție extinsă.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-primary-50">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">
            Fii primul care află de produsele noi
          </h2>
          <p className="text-secondary-600 mb-6">
            Trimitem 1-2 emailuri pe lună cu noutăți și oferte. Fără spam, te poți dezabona oricând.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Adresa ta de email"
              className="flex-1 px-4 py-3 rounded-lg border border-secondary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Mă abonez
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
