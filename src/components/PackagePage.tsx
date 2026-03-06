import type { PackageInfo } from '@/lib/packages'
import InstallCommand from './InstallCommand'
import CodeBlock from './CodeBlock'
import Link from 'next/link'

interface Props {
  pkg: PackageInfo
  quickStart: string
  apiRows: [string, string][]
}

export default function PackagePage({ pkg, quickStart, apiRows }: Props) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Hero */}
      <div className="flex items-center gap-4">
        <span className="text-5xl">{pkg.icon}</span>
        <div>
          <h1 className="text-4xl font-bold">{pkg.npm}</h1>
          <p className="mt-1 text-gray-500">v1.0.0</p>
        </div>
      </div>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{pkg.description}</p>

      {/* Install */}
      <div className="mt-8">
        <InstallCommand pkg={pkg.npm + (pkg.dependencies.length ? ' ' + pkg.dependencies.join(' ') : '')} />
      </div>

      {/* Features */}
      <h2 className="mt-12 text-2xl font-bold">Features</h2>
      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="text-green-500">✓</span> {f}
          </li>
        ))}
      </ul>

      {/* Quick Start */}
      <h2 className="mt-12 text-2xl font-bold">Quick Start</h2>
      <div className="mt-4">
        <CodeBlock code={quickStart} />
      </div>

      {/* API Reference */}
      <h2 className="mt-12 text-2xl font-bold">API Reference</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="px-3 py-2 text-left">Export</th>
              <th className="px-3 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-700">
            {apiRows.map(([name, desc]) => (
              <tr key={name}>
                <td className="px-3 py-2 font-mono text-sm">{name}</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Related */}
      {pkg.dependencies.length > 0 && (
        <>
          <h2 className="mt-12 text-2xl font-bold">Dependencies</h2>
          <ul className="mt-4 space-y-1">
            {pkg.dependencies.map((d) => (
              <li key={d}>
                <Link href={`/packages/${d.replace('@mostajs/', '')}`} className="text-blue-600 hover:underline font-mono text-sm">
                  {d}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
