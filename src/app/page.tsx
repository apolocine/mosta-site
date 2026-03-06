import { packages, databases } from '@/lib/packages'
import PackageCard from '@/components/PackageCard'
import InstallCommand from '@/components/InstallCommand'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

const quickStartCode = `import { createConnection, registerSchema, BaseRepository } from '@mostajs/orm'
import type { EntitySchema, IDialect } from '@mostajs/orm'

// 1. Define schema
const UserSchema: EntitySchema = {
  name: 'User',
  collection: 'users',
  timestamps: true,
  fields: {
    email:    { type: 'string', required: true, unique: true },
    username: { type: 'string', required: true },
    role:     { type: 'string', enum: ['user', 'admin'], default: 'user' },
  },
  relations: {},
  indexes: [{ fields: { email: 'asc' }, unique: true }],
}

// 2. Create repository
class UserRepository extends BaseRepository<any> {
  constructor(dialect: IDialect) { super(UserSchema, dialect) }
}

// 3. Connect and use
registerSchema(UserSchema)
const dialect = await createConnection()
const users = new UserRepository(dialect)

await users.create({ email: 'alice@example.com', username: 'alice' })
const found = await users.findAll({ role: 'admin' })`

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 py-24 dark:from-gray-900 dark:to-gray-950">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            One API. <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">13 Databases.</span>
            <br />Zero Lock-in.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            <strong>@mosta</strong> is a complete application toolkit for Node.js and Next.js.
            Multi-dialect ORM, authentication, RBAC, audit logging, ticketing, face recognition, media capture, UI components, and more — 13 packages, one ecosystem.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <InstallCommand pkg="@mostajs/orm" />
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/docs" className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
              Get Started
            </Link>
            <a href="https://github.com/apolocine" className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Database Grid */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">13 Databases. One Repository.</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            Switch from SQLite (dev) to PostgreSQL (prod) to MongoDB (cloud) — zero code change.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {databases.map((db) => (
              <div key={db.name} className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-sm dark:border-gray-800">
                <span className="text-xl">{db.icon}</span>
                <div>
                  <div className="font-medium">{db.name}</div>
                  <div className="text-xs text-gray-400">{db.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold">Why @mostajs/orm?</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="px-4 py-3 text-left"></th>
                  <th className="px-4 py-3 text-center">Prisma</th>
                  <th className="px-4 py-3 text-center">TypeORM</th>
                  <th className="px-4 py-3 text-center">Sequelize</th>
                  <th className="px-4 py-3 text-center font-bold text-blue-600">@mostajs/orm</th>
                </tr>
              </thead>
              <tbody className="divide-y dark:divide-gray-700">
                {[
                  ['Databases', '6', '9', '6', '13'],
                  ['MongoDB', 'Y', 'Y', '-', 'Y'],
                  ['Oracle', '-', 'Y', 'Y', 'Y'],
                  ['SAP HANA', '-', '-', '-', 'Y'],
                  ['Google Spanner', '-', '-', '-', 'Y'],
                  ['Repository pattern', '-', 'Y', '-', 'Y'],
                  ['No code-gen', '-', 'Y', 'Y', 'Y'],
                  ['Dialect switching', '-', '~', '~', 'Y'],
                  ['Lazy driver loading', '-', '-', '-', 'Y'],
                ].map(([feature, ...values]) => (
                  <tr key={feature}>
                    <td className="px-4 py-2 font-medium">{feature}</td>
                    {values.map((v, i) => (
                      <td key={i} className={`px-4 py-2 text-center ${i === 3 ? 'font-bold text-blue-600' : ''}`}>
                        {v === 'Y' ? '✅' : v === '-' ? '❌' : v === '~' ? '⚠️' : v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">The @mosta Ecosystem</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            13 packages that work together seamlessly.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.npm} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Quick Start</h2>
          <p className="mt-3 text-center text-gray-500">Define your schema, create a repository, connect and use.</p>
          <div className="mt-8">
            <CodeBlock code={quickStartCode} />
          </div>
          <div className="mt-6 text-center">
            <Link href="/docs" className="text-blue-600 hover:underline">
              Read the full tutorial →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
