import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  getCategoryBySlug,
  getProductsByCategory,
  getCategoryPath,
  getAllCategories,
  getSubcategories,
} from '@/lib/data'
import { ProductCard } from '@/components/product/ProductCard'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

interface SubcategoryPageProps {
  params: Promise<{ category: string; subcategory: string }>
}

// Generate static paths for all subcategories
export async function generateStaticParams() {
  const categories = getAllCategories()
  const paths: { category: string; subcategory: string }[] = []

  categories
    .filter((c) => !c.parentId)
    .forEach((parent) => {
      const subs = getSubcategories(parent.id)
      subs.forEach((sub) => {
        paths.push({
          category: parent.slug,
          subcategory: sub.slug,
        })
      })
    })

  return paths
}

// Generate metadata
export async function generateMetadata({ params }: SubcategoryPageProps): Promise<Metadata> {
  const { category: categorySlug, subcategory: subcategorySlug } = await params
  const parentCategory = getCategoryBySlug(categorySlug)
  const subcategory = getCategoryBySlug(subcategorySlug)

  if (!parentCategory || !subcategory) {
    return {
      title: 'Categorie negăsită',
    }
  }

  return {
    title: `${subcategory.name} — ${parentCategory.name}`,
    description: subcategory.description,
    openGraph: {
      title: `${subcategory.name} — ${parentCategory.name}`,
      description: subcategory.shortDescription,
    },
  }
}

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params
  const parentCategory = getCategoryBySlug(categorySlug)
  const subcategory = getCategoryBySlug(subcategorySlug)

  if (!parentCategory || !subcategory || subcategory.parentId !== parentCategory.id) {
    notFound()
  }

  const products = getProductsByCategory(subcategory.id)
  const siblingCategories = getSubcategories(parentCategory.id).filter(
    (c) => c.id !== subcategory.id
  )

  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: parentCategory.name, href: `/${parentCategory.slug}` },
    { label: subcategory.name, href: `/${parentCategory.slug}/${subcategory.slug}` },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Subcategory Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          {subcategory.name}
        </h1>
        <p className="text-lg text-secondary-600 max-w-3xl">
          {subcategory.description}
        </p>
      </div>

      {/* Sibling Categories */}
      {siblingCategories.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-medium text-secondary-500 mb-3">Vezi și</h2>
          <div className="flex flex-wrap gap-2">
            {siblingCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/${parentCategory.slug}/${cat.slug}`}
                className="px-3 py-1.5 text-sm bg-secondary-100 text-secondary-600 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
              >
                {cat.name}
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
            href={`/${parentCategory.slug}`}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Înapoi la {parentCategory.name}
          </Link>
        </div>
      )}

      {/* SEO Content */}
      <div className="mt-16 pt-8 border-t">
        <div className="prose-product max-w-none">
          <h2>Despre {subcategory.name}</h2>
          <p>{subcategory.description}</p>
        </div>
      </div>
    </div>
  )
}
