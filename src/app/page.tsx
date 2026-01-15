import Link from 'next/link'
import { getFeaturedProducts, getNewProducts, getParentCategories } from '@/lib/data'
import { ProductCard } from '@/components/product/ProductCard'
import { siteConfig } from '@/lib/config'
import { Truck, Shield, RotateCcw, Package, CheckCircle2, CreditCard, FileText } from 'lucide-react'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(8)
  const newProducts = getNewProducts(4)
  const categories = getParentCategories()

  return (
    <>
      {/* Hero Section - Bold, Confident, Premium */}
      <section className="bg-secondary-950 text-white relative overflow-hidden">
        {/* Layered Background Elements */}
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950" />
        
        {/* Radial glow - warm accent */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/[0.07] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-700/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M0 0h1v1H0V0zm39 0h1v1h-1V0zM0 39h1v1H0v-1zm39 0h1v1h-1v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
        
        {/* Decorative lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary-700/30 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary-700/20 to-transparent" />
        
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative">
          <div className="max-w-4xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-secondary-800/60 backdrop-blur-sm border border-secondary-700/50 rounded-full text-sm text-secondary-300 mb-8 shadow-lg shadow-black/20">
              <span className="flex h-2 w-2 relative">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" style={{ animationDuration: '2s' }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-medium">Verificat de clienți reali din România</span>
            </div>
            
            {/* Main Headline - Bold, Direct */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.05]">
              <span className="block text-white drop-shadow-sm">Produse care</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400">funcționează.</span>
            </h1>
            
            {/* Supporting Text */}
            <p className="text-lg md:text-xl lg:text-2xl text-secondary-400 mb-12 max-w-2xl leading-relaxed">
              Fără prețuri umflate. Fără poze false. <span className="text-secondary-300">Doar produse testate</span>, livrate rapid în toată România.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/gadgeturi"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-secondary-900 font-bold text-lg rounded-xl hover:from-primary-400 hover:to-primary-300 transition-all shadow-xl shadow-primary-500/30 hover:shadow-primary-400/40"
              >
                Explorează produsele
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link
                href="/despre-noi"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 text-white font-semibold text-lg rounded-xl hover:bg-secondary-700/50 hover:border-secondary-600/50 transition-all"
              >
                De ce să ne alegi
              </Link>
            </div>
          </div>
          
          {/* Trust Indicators - Right Side */}
          <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2">
            <div className="flex flex-col gap-5">
              {/* Card 1 */}
              <div className="group bg-secondary-900/70 backdrop-blur-md border border-secondary-700/40 rounded-2xl p-5 shadow-2xl shadow-black/30 hover:border-secondary-600/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <RotateCcw className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">14</div>
                    <div className="text-sm text-secondary-400 font-medium">zile retur gratuit</div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="group bg-secondary-900/70 backdrop-blur-md border border-secondary-700/40 rounded-2xl p-5 shadow-2xl shadow-black/30 hover:border-secondary-600/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-500/20 rounded-xl">
                    <Truck className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-primary-400">1-3</div>
                    <div className="text-sm text-secondary-400 font-medium">zile livrare</div>
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="group bg-secondary-900/70 backdrop-blur-md border border-secondary-700/40 rounded-2xl p-5 shadow-2xl shadow-black/30 hover:border-secondary-600/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-green-400">100%</div>
                    <div className="text-sm text-secondary-400 font-medium">produse testate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom edge fade */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-700/50 to-transparent" />
      </section>

      {/* Trust Bar - Compact, Professional */}
      <section className="bg-white border-b border-secondary-200">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary-100 rounded-lg">
                <Truck className="w-5 h-5 text-secondary-700" />
              </div>
              <div>
                <div className="font-semibold text-secondary-900">Livrare rapidă</div>
                <div className="text-secondary-500">1–3 zile lucrătoare</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary-100 rounded-lg">
                <RotateCcw className="w-5 h-5 text-secondary-700" />
              </div>
              <div>
                <div className="font-semibold text-secondary-900">Retur gratuit</div>
                <div className="text-secondary-500">14 zile, fără întrebări</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary-100 rounded-lg">
                <Shield className="w-5 h-5 text-secondary-700" />
              </div>
              <div>
                <div className="font-semibold text-secondary-900">Garanție 24 luni</div>
                <div className="text-secondary-500">Pe toate produsele</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary-100 rounded-lg">
                <Package className="w-5 h-5 text-secondary-700" />
              </div>
              <div>
                <div className="font-semibold text-secondary-900">Produse verificate</div>
                <div className="text-secondary-500">Testate înainte de vânzare</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          {/* Micro-copy */}
          <p className="text-sm text-secondary-500 mb-6">
            Nu avem mii de produse — doar ce am testat și știm că funcționează.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-8">
            Alege ce te interesează
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/${category.slug}`}
                className="group p-6 bg-white rounded-xl border border-secondary-200 hover:border-primary-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-secondary-900 group-hover:text-primary-700 mb-2">
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
          
          {/* Micro-copy above grid */}
          <p className="text-xs text-secondary-400 mb-4 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Prețurile includ TVA și sunt finale — fără costuri ascunse la checkout.
          </p>
          
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
            
            {/* Micro-copy */}
            <p className="text-xs text-secondary-400 mb-4">
              Adăugăm produse noi doar după ce le testăm personal — de aceea nu avem sute de noutăți.
            </p>
            
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
          {/* Micro-copy */}
          <p className="text-sm text-secondary-500 text-center mb-4">
            Nu promitem mai mult decât putem livra.
          </p>
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
          {/* Micro-copy */}
          <p className="text-sm text-secondary-500 text-center mb-3">
            Răspunsuri scurte la ce ne întreabă lumea de obicei.
          </p>
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
          {/* Micro-copy */}
          <p className="text-xs text-secondary-400 mt-3">
            Nu vindem și nu dăm emailul tău nimănui.
          </p>
        </div>
      </section>
    </>
  )
}
