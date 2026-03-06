import { packages } from '@/lib/packages'
import PackageCard from '@/components/PackageCard'

export const metadata = { title: '@mosta — All Packages' }

const categories = [
  { label: 'Core', description: 'Foundation modules for data, auth, and configuration.', pkgs: ['@mostajs/orm', '@mostajs/auth', '@mostajs/rbac', '@mostajs/audit', '@mostajs/settings', '@mostajs/setup'] },
  { label: 'Features', description: 'Domain-specific modules for ticketing, biometrics, scanning, and media.', pkgs: ['@mostajs/ticketing', '@mostajs/face', '@mostajs/scan', '@mostajs/media'] },
  { label: 'Tooling', description: 'UI components, navigation, and code generation.', pkgs: ['@mostajs/ui', '@mostajs/menu', '@mostajs/init'] },
]

export default function PackagesIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold">All Packages</h1>
      <p className="mt-3 text-lg text-gray-500">13 packages that work together seamlessly.</p>

      {categories.map((cat) => (
        <section key={cat.label} className="mt-12">
          <h2 className="text-2xl font-bold">{cat.label}</h2>
          <p className="mt-1 text-gray-500">{cat.description}</p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cat.pkgs.map((npm) => {
              const pkg = packages.find((p) => p.npm === npm)
              return pkg ? <PackageCard key={npm} pkg={pkg} /> : null
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
