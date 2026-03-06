import { databases } from '@/lib/packages'
import CodeBlock from '@/components/CodeBlock'

export const metadata = { title: 'Dialects — @mosta' }

export default function DialectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Database Dialects</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        @mostajs/orm supports 13 databases. Install the driver, set the env vars, done.
      </p>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="px-3 py-2 text-left">Database</th>
              <th className="px-3 py-2 text-left">DB_DIALECT</th>
              <th className="px-3 py-2 text-left">Driver Package</th>
              <th className="px-3 py-2 text-left">Category</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-700">
            {databases.map((db) => (
              <tr key={db.name}>
                <td className="px-3 py-2">{db.icon} {db.name}</td>
                <td className="px-3 py-2 font-mono text-xs">{db.name.toLowerCase().replace(/\s+/g, '')}</td>
                <td className="px-3 py-2 font-mono text-xs">{db.driver}</td>
                <td className="px-3 py-2 text-gray-500">{db.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 text-2xl font-bold">Connection Examples</h2>

      <h3 className="mt-8 text-lg font-semibold">MongoDB</h3>
      <div className="mt-2">
        <CodeBlock lang="bash" code={`DB_DIALECT=mongodb
SGBD_URI=mongodb://user:password@localhost:27017/mydb`} />
      </div>

      <h3 className="mt-8 text-lg font-semibold">SQLite</h3>
      <div className="mt-2">
        <CodeBlock lang="bash" code={`DB_DIALECT=sqlite
SGBD_URI=./data/myapp.db`} />
      </div>

      <h3 className="mt-8 text-lg font-semibold">PostgreSQL</h3>
      <div className="mt-2">
        <CodeBlock lang="bash" code={`DB_DIALECT=postgres
SGBD_URI=postgresql://user:password@localhost:5432/mydb`} />
      </div>

      <h3 className="mt-8 text-lg font-semibold">MySQL</h3>
      <div className="mt-2">
        <CodeBlock lang="bash" code={`DB_DIALECT=mysql
SGBD_URI=mysql://user:password@localhost:3306/mydb`} />
      </div>

      <h3 className="mt-8 text-lg font-semibold">Oracle</h3>
      <div className="mt-2">
        <CodeBlock lang="bash" code={`DB_DIALECT=oracle
SGBD_URI=oracle://user:password@localhost:1521/ORCL`} />
      </div>

      <h3 className="mt-8 text-lg font-semibold">SQL Server</h3>
      <div className="mt-2">
        <CodeBlock lang="bash" code={`DB_DIALECT=mssql
SGBD_URI=mssql://user:password@localhost:1433/mydb`} />
      </div>

      <h2 className="mt-12 text-2xl font-bold">Schema Strategies</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b dark:border-gray-700"><th className="px-3 py-2 text-left">Strategy</th><th className="px-3 py-2 text-left">Behavior</th><th className="px-3 py-2 text-left">Use Case</th></tr></thead>
          <tbody className="divide-y dark:divide-gray-700">
            <tr><td className="px-3 py-2 font-mono">validate</td><td className="px-3 py-2">Check tables exist, throw if missing</td><td className="px-3 py-2">Production</td></tr>
            <tr><td className="px-3 py-2 font-mono">update</td><td className="px-3 py-2">Create missing tables/indexes</td><td className="px-3 py-2">Development</td></tr>
            <tr><td className="px-3 py-2 font-mono">create</td><td className="px-3 py-2">Create tables if not exist</td><td className="px-3 py-2">First run</td></tr>
            <tr><td className="px-3 py-2 font-mono">create-drop</td><td className="px-3 py-2">Drop and recreate all tables</td><td className="px-3 py-2">Testing only</td></tr>
            <tr><td className="px-3 py-2 font-mono">none</td><td className="px-3 py-2">No schema management</td><td className="px-3 py-2">External migrations</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
