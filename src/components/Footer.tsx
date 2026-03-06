import { Package } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold">
              <Package className="h-5 w-5 text-blue-600" />
              @mosta
            </div>
            <p className="mt-2 text-sm text-gray-500">
              A complete application toolkit for Node.js and Next.js.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Packages</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li><Link href="/packages/orm" className="hover:text-gray-900 dark:hover:text-white">@mostajs/orm</Link></li>
              <li><Link href="/packages/auth" className="hover:text-gray-900 dark:hover:text-white">@mostajs/auth</Link></li>
              <li><Link href="/packages/audit" className="hover:text-gray-900 dark:hover:text-white">@mostajs/audit</Link></li>
              <li><Link href="/packages/settings" className="hover:text-gray-900 dark:hover:text-white">@mostajs/settings</Link></li>
              <li><Link href="/packages/setup" className="hover:text-gray-900 dark:hover:text-white">@mostajs/setup</Link></li>
              <li><Link href="/packages/face" className="hover:text-gray-900 dark:hover:text-white">@mostajs/face</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Docs</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li><Link href="/docs" className="hover:text-gray-900 dark:hover:text-white">Getting Started</Link></li>
              <li><Link href="/docs/tutorial" className="hover:text-gray-900 dark:hover:text-white">Tutorial</Link></li>
              <li><Link href="/docs/api-reference" className="hover:text-gray-900 dark:hover:text-white">API Reference</Link></li>
              <li><Link href="/docs/dialects" className="hover:text-gray-900 dark:hover:text-white">Dialects</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Links</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li><a href="https://github.com/apolocine" className="hover:text-gray-900 dark:hover:text-white">GitHub</a></li>
              <li><a href="https://www.npmjs.com/org/mosta" className="hover:text-gray-900 dark:hover:text-white">npm</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500 dark:border-gray-800">
          MIT License — Dr Hamid MADANI &lt;drmdh@msn.com&gt;
        </div>
      </div>
    </footer>
  )
}
