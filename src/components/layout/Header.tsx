'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteConfig, mainNavigation } from '@/lib/config'
import { useCartStore } from '@/lib/store/cart'
import { Menu, X, ShoppingCart, User, Search, ChevronDown } from 'lucide-react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { getItemCount } = useCartStore()
  
  const itemCount = getItemCount()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-secondary-200">
      {/* Top Bar */}
      <div className="bg-secondary-900 text-white">
        <div className="container mx-auto px-4 py-2.5 text-center">
          <p className="text-sm sm:text-base font-medium tracking-wide">
            🚚 Livrare rapidă în toată România • Suport telefonic
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary-600">
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-secondary-700 hover:text-primary-600 transition-colors"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-secondary-200 rounded-lg shadow-lg py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
                      >
                        {child.name}
                      </Link>
                    ))}
                    <div className="border-t border-secondary-100 mt-2 pt-2">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-primary-600 font-medium hover:bg-primary-50"
                      >
                        Vezi toate →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Caută"
              className="p-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/contul-meu"
              aria-label="Contul meu"
              className="p-2 text-secondary-600 hover:text-primary-600 transition-colors hidden sm:block"
            >
              <User className="w-5 h-5" />
            </Link>
            <Link
              href="/cos"
              aria-label="Coș de cumpărături"
              className="relative p-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Meniu"
              className="lg:hidden p-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-secondary-200 bg-white">
          <nav className="container mx-auto px-4 py-4">
            {mainNavigation.map((item) => (
              <div key={item.name} className="border-b border-secondary-100 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-secondary-900 font-medium"
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 pb-3 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 text-secondary-600 hover:text-primary-600"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                href="/contul-meu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-secondary-700"
              >
                Contul Meu
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-secondary-700"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
