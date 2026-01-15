import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  getProductBySlug,
  getAllProducts,
  getRelatedProducts,
  getCategoryBySlug,
} from '@/lib/data'
import { siteConfig } from '@/lib/config'
import { formatPrice, calculateDiscount } from '@/lib/utils'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ProductCard } from '@/components/product/ProductCard'
import { AddToCartButton } from '@/components/product/AddToCartButton'
import { ProductTabs } from '@/components/product/ProductTabs'
import { Truck, RotateCcw, CreditCard, FileText, Check } from 'lucide-react'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

// Generate static paths for all products
export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

// Generate metadata with structured data
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Produs negăsit',
    }
  }

  const discount = product.originalPrice
    ? calculateDiscount(product.originalPrice, product.price)
    : 0

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      type: 'website',
      images: product.images.map((img) => ({
        url: img.url,
        alt: img.alt,
      })),
    },
    other: {
      'product:price:amount': product.price.toString(),
      'product:price:currency': product.currency,
      'product:availability': product.stock > 0 ? 'in stock' : 'out of stock',
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const category = getCategoryBySlug(product.categoryId)
  const subcategory = product.subcategoryId
    ? getCategoryBySlug(product.subcategoryId)
    : null
  const relatedProducts = getRelatedProducts(product, 4)

  const discount = product.originalPrice
    ? calculateDiscount(product.originalPrice, product.price)
    : 0

  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    ...(category
      ? [{ label: category.name, href: `/${category.slug}` }]
      : []),
    ...(subcategory && category
      ? [{ label: subcategory.name, href: `/${category.slug}/${subcategory.slug}` }]
      : []),
    { label: product.name, href: `/produs/${product.slug}` },
  ]

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((img) => img.url),
    sku: product.sku,
    offers: {
      '@type': 'Offer',
      url: `${siteConfig.url}/produs/${product.slug}`,
      priceCurrency: product.currency,
      price: product.price,
      availability:
        product.stock > 0
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Product Main Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary-100 rounded-xl overflow-hidden relative">
              {product.isNew && (
                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                  NOU
                </span>
              )}
              {discount > 0 && (
                <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                  -{discount}%
                </span>
              )}
              {product.images[0] ? (
                <Image
                  src={product.images[0].url}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-secondary-400">
                  Imagine produs
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-secondary-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary-500"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">
              {product.name}
            </h1>
            <p className="text-secondary-600 mb-6">{product.shortDescription}</p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-secondary-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-secondary-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              <p className="text-sm text-secondary-500 mt-1">TVA inclus</p>
              {discount > 0 && (
                <p className="text-sm text-red-600 font-medium mt-1">
                  Economisești {formatPrice(product.originalPrice! - product.price)}
                </p>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.stock > 0 ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">
                    În stoc — comandă acum, primești în 1-3 zile lucrătoare
                  </span>
                </div>
              ) : (
                <div className="text-red-600 font-medium">
                  Momentan indisponibil
                </div>
              )}
              {product.stock > 0 && product.stock <= 5 && (
                <p className="text-sm text-orange-600 mt-1">
                  Ultimele {product.stock} bucăți în stoc
                </p>
              )}
            </div>

            {/* Add to Cart */}
            <div className="mb-8">
              <AddToCartButton product={product} />
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-secondary-50 rounded-xl">
              <div className="flex items-center gap-3 text-sm text-secondary-700">
                <Truck className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span>Livrare în 1-3 zile lucrătoare</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-secondary-700">
                <CreditCard className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span>Plată ramburs sau card</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-secondary-700">
                <RotateCcw className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span>Retur gratuit în 14 zile</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-secondary-700">
                <FileText className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span>Factură fiscală inclusă</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <ProductTabs
          description={product.description}
          benefits={product.benefits}
          specs={product.specs}
        />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">
              Produse similare
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
