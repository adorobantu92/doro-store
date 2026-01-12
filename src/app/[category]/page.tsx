import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  getCategoryBySlug,
  getSubcategories,
  getProductsByCategory,
  getCategoryPath,
  getAllCategories,
} from '@/lib/data'
import { ProductCard } from '@/components/product/ProductCard'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

// Generate static paths for all categories
export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories
    .filter((c) => !c.parentId) // Only parent categories at this level
    .map((category) => ({
      category: category.slug,
    }))
}

// Generate metadata
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    return {
      title: 'Categorie negăsită',
    }
  }

  return {
    title: `${category.name} — Produse de Calitate`,
    description: category.description,
    openGraph: {
      title: `${category.name} — Produse de Calitate`,
      description: category.shortDescription,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    notFound()
  }

  const subcategories = getSubcategories(category.id)
  const products = getProductsByCategory(category.id)
  const categoryPath = getCategoryPath(category)

  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    ...categoryPath.map((cat) => ({
      label: cat.name,
      href: `/${cat.slug}`,
    })),
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          {category.name}
        </h1>
        <p className="text-lg text-secondary-600 max-w-3xl">
          {category.description}
        </p>
      </div>

      {/* Subcategories */}
      {subcategories.length > 0 && (
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-secondary-900 mb-4">
            Subcategorii
          </h2>
          <div className="flex flex-wrap gap-3">
            {subcategories.map((sub) => (
              <Link
                key={sub.id}
                href={`/${category.slug}/${sub.slug}`}
                className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Products Count & Sort */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-secondary-600">
          {products.length} {products.length === 1 ? 'produs' : 'produse'}
        </p>
        <select className="px-4 py-2 border border-secondary-300 rounded-lg text-secondary-700 bg-white">
          <option value="popular">Cele mai populare</option>
          <option value="price-asc">Preț crescător</option>
          <option value="price-desc">Preț descrescător</option>
          <option value="newest">Cele mai noi</option>
        </select>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-secondary-50 rounded-xl">
          <p className="text-secondary-600 mb-4">
            Nu am găsit produse în această categorie.
          </p>
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Înapoi la pagina principală
          </Link>
        </div>
      )}

      {/* SEO Content */}
      <div className="mt-16 pt-8 border-t">
        <div className="prose-product max-w-none">
          <h2>Despre {category.name}</h2>
          <p>{category.description}</p>
        </div>
      </div>
    </div>
  )
}
