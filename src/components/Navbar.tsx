'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Menu, X, Github, Package, ChevronDown } from 'lucide-react'
import { packages } from '@/lib/packages'

const categories = [
  { label: 'Core', pkgs: ['@mostajs/orm', '@mostajs/auth', '@mostajs/rbac', '@mostajs/audit', '@mostajs/settings', '@mostajs/setup'] },
  { label: 'Features', pkgs: ['@mostajs/ticketing', '@mostajs/face', '@mostajs/scan', '@mostajs/media'] },
  { label: 'Tooling', pkgs: ['@mostajs/ui', '@mostajs/menu', '@mostajs/init'] },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pkgOpen, setPkgOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPkgOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Package className="h-6 w-6 text-blue-600" />
          <span>@mosta</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/docs" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Docs
          </Link>

          {/* Packages dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setPkgOpen(!pkgOpen)}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Packages <ChevronDown className={`h-3.5 w-3.5 transition-transform ${pkgOpen ? 'rotate-180' : ''}`} />
            </button>
            {pkgOpen && (
              <div className="absolute right-0 top-full mt-2 w-[560px] rounded-xl border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-gray-900">
                <div className="grid grid-cols-3 gap-4">
                  {categories.map((cat) => (
                    <div key={cat.label}>
                      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {cat.label}
                      </div>
                      <div className="space-y-1">
                        {cat.pkgs.map((npm) => {
                          const pkg = packages.find((p) => p.npm === npm)
                          if (!pkg) return null
                          return (
                            <Link
                              key={npm}
                              href={pkg.href}
                              onClick={() => setPkgOpen(false)}
                              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                              <span>{pkg.icon}</span>
                              <div>
                                <div className="font-medium text-gray-900 dark:text-white">{pkg.name}</div>
                                <div className="text-xs text-gray-500 line-clamp-1">{pkg.description.split(' — ')[0]}</div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="https://github.com/apolocine" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <Github className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 px-4 pb-4 md:hidden dark:border-gray-800">
          <Link href="/docs" className="block py-2 text-sm text-gray-600 dark:text-gray-400" onClick={() => setMobileOpen(false)}>
            Docs
          </Link>
          {categories.map((cat) => (
            <div key={cat.label} className="mt-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">{cat.label}</div>
              {cat.pkgs.map((npm) => {
                const pkg = packages.find((p) => p.npm === npm)
                if (!pkg) return null
                return (
                  <Link
                    key={npm}
                    href={pkg.href}
                    className="flex items-center gap-2 py-1.5 text-sm text-gray-600 dark:text-gray-400"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{pkg.icon}</span> {pkg.name}
                  </Link>
                )
              })}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
