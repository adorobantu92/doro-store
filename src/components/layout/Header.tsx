'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { siteConfig, mainNavigation } from '@/lib/config'
import { useCartStore } from '@/lib/store/cart'
import { Menu, X, ShoppingCart, User, Search, ChevronDown } from 'lucide-react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isClient, setIsClient] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { getItemCount } = useCartStore()
  
  const itemCount = getItemCount()

  // Prevent hydration mismatch - only show cart count after client mount
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Minimal, Confident */}
      <div className="bg-secondary-950 text-secondary-300">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs sm:text-sm">
          <span className="hidden sm:inline">Firmă română • CUI: RO12345678</span>
          <span className="sm:hidden">Firmă română verificată</span>
          <span>Livrare 1-3 zile lucrătoare</span>
        </div>
      </div>

      {/* Main Header - Bold, Dark */}
      <div className="bg-secondary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Strong Typography */}
            <Link href="/" className="text-2xl md:text-3xl font-black tracking-tight text-white hover:text-primary-400 transition-colors">
              {siteConfig.name}
            </Link>

            {/* Desktop Navigation - Clean, Minimal */}
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
                    className="flex items-center gap-1 px-4 py-2 text-secondary-200 hover:text-white font-medium transition-colors"
                  >
                    {item.name}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.name && (
                    <div className="absolute top-full left-0 w-56 bg-white border border-secondary-200 rounded-lg shadow-2xl py-2 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-secondary-700 hover:bg-secondary-50 hover:text-secondary-900"
                        >
                          {child.name}
                        </Link>
                      ))}
                      <div className="border-t border-secondary-100 mt-2 pt-2">
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-primary-700 font-semibold hover:bg-primary-50"
                        >
                          Vezi toate →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions - Clean Icons */}
            <div className="flex items-center gap-1">
              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  aria-label="Caută"
                  className="p-2.5 text-secondary-300 hover:text-white transition-colors"
                >
                  {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
                </button>
                
                {/* Search Input */}
                {isSearchOpen && (
                  <form
                    onSubmit={handleSearchSubmit}
                    className="absolute right-0 top-full mt-2 w-72 sm:w-80"
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearchKeyDown}
                      placeholder="Caută produse..."
                      className="w-full px-4 py-3 bg-white text-secondary-900 border-0 rounded-lg shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </form>
                )}
              </div>
              <Link
                href="/contul-meu"
                aria-label="Contul meu"
                className="p-2.5 text-secondary-300 hover:text-white transition-colors hidden sm:block"
              >
                <User className="w-5 h-5" />
              </Link>
              <Link
                href="/cos"
                aria-label="Coș de cumpărături"
                className="relative p-2.5 text-secondary-300 hover:text-white transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {isClient && itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary-500 text-secondary-900 text-xs font-bold rounded-full flex items-center justify-center">
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Meniu"
                className="lg:hidden p-2.5 text-secondary-300 hover:text-white transition-colors"
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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-secondary-900 border-t border-secondary-800">
          <nav className="container mx-auto px-4 py-4">
            {mainNavigation.map((item) => (
              <div key={item.name} className="border-b border-secondary-800 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-white font-medium"
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
                        className="block py-1 text-secondary-400 hover:text-white"
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
                className="block py-2 text-secondary-400 hover:text-white"
              >
                Contul Meu
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-secondary-400 hover:text-white"
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
