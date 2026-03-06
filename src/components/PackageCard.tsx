import Link from 'next/link'
import type { PackageInfo } from '@/lib/packages'

export default function PackageCard({ pkg }: { pkg: PackageInfo }) {
  return (
    <Link
      href={pkg.href}
      className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:hover:border-gray-700"
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{pkg.icon}</span>
        <div>
          <h3 className="font-bold group-hover:text-blue-600">{pkg.npm}</h3>
          <p className="text-xs text-gray-500">v1.0.0</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{pkg.description}</p>
      <div className="mt-4 flex flex-wrap gap-1">
        {pkg.exports.slice(0, 3).map((e) => (
          <span key={e} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-mono text-gray-600 dark:bg-gray-800 dark:text-gray-400">
            {e}
          </span>
        ))}
        {pkg.exports.length > 3 && (
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-800">
            +{pkg.exports.length - 3}
          </span>
        )}
      </div>
    </Link>
  )
}
