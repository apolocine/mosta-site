'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Github, Package } from 'lucide-react'

const links = [
  { href: '/docs', label: 'Docs' },
  { href: '/packages/orm', label: 'Packages' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Package className="h-6 w-6 text-blue-600" />
          <span>@mosta</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              {l.label}
            </Link>
          ))}
          <a href="https://github.com/apolocine" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <Github className="h-5 w-5" />
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 px-4 pb-4 md:hidden dark:border-gray-800">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block py-2 text-sm text-gray-600 dark:text-gray-400" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
