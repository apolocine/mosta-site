import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export const metadata = { title: 'API Reference — @mosta' }

export default function ApiReferencePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">API Reference</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Complete reference for all @mostajs/orm exports.
      </p>

      <h2 className="mt-12 text-2xl font-bold">Connection</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b dark:border-gray-700"><th className="px-3 py-2 text-left">Function</th><th className="px-3 py-2 text-left">Description</th></tr></thead>
          <tbody className="divide-y dark:divide-gray-700">
            <tr><td className="px-3 py-2 font-mono text-sm">createConnection(config?)</td><td className="px-3 py-2">Connect to database, returns IDialect</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">getDialect()</td><td className="px-3 py-2">Get the active dialect singleton</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">disconnectDialect()</td><td className="px-3 py-2">Close the active connection</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">registerSchema(schema)</td><td className="px-3 py-2">Register a single entity schema</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">registerSchemas(schemas[])</td><td className="px-3 py-2">Register multiple schemas at once</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">testConnection(config)</td><td className="px-3 py-2">Test a connection without saving</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 text-2xl font-bold">BaseRepository&lt;T&gt;</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b dark:border-gray-700"><th className="px-3 py-2 text-left">Method</th><th className="px-3 py-2 text-left">Returns</th></tr></thead>
          <tbody className="divide-y dark:divide-gray-700">
            <tr><td className="px-3 py-2 font-mono text-sm">findAll(filter?, options?)</td><td className="px-3 py-2">Promise&lt;T[]&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">findOne(filter, options?)</td><td className="px-3 py-2">Promise&lt;T | null&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">findById(id, options?)</td><td className="px-3 py-2">Promise&lt;T | null&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">findByIdWithRelations(id, relations?)</td><td className="px-3 py-2">Promise&lt;T | null&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">findWithRelations(filter?, relations?)</td><td className="px-3 py-2">Promise&lt;T[]&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">create(data)</td><td className="px-3 py-2">Promise&lt;T&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">update(id, data)</td><td className="px-3 py-2">Promise&lt;T | null&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">updateMany(filter, data)</td><td className="px-3 py-2">Promise&lt;number&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">delete(id)</td><td className="px-3 py-2">Promise&lt;boolean&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">deleteMany(filter)</td><td className="px-3 py-2">Promise&lt;number&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">upsert(filter, data)</td><td className="px-3 py-2">Promise&lt;T&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">count(filter?)</td><td className="px-3 py-2">Promise&lt;number&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">distinct(field, filter?)</td><td className="px-3 py-2">Promise&lt;unknown[]&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">search(query, options?)</td><td className="px-3 py-2">Promise&lt;T[]&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">increment(id, field, amount?)</td><td className="px-3 py-2">Promise&lt;T | null&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">addToSet(id, field, value)</td><td className="px-3 py-2">Promise&lt;T | null&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">pull(id, field, value)</td><td className="px-3 py-2">Promise&lt;T | null&gt;</td></tr>
            <tr><td className="px-3 py-2 font-mono text-sm">aggregate&lt;R&gt;(stages)</td><td className="px-3 py-2">Promise&lt;R[]&gt;</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 text-2xl font-bold">FilterQuery Operators</h2>
      <div className="mt-4">
        <CodeBlock code={`// Equality
{ status: 'active' }

// Comparison
{ score: { $gt: 100 } }
{ score: { $gte: 0, $lte: 1000 } }
{ age: { $lt: 18 } }
{ name: { $ne: 'anonymous' } }

// Array membership
{ status: { $in: ['active', 'pending'] } }
{ role: { $nin: ['banned'] } }

// Regex
{ email: { $regex: '@gmail\\\\.com$' } }

// Logical
{ $or: [{ role: 'admin' }, { score: { $gt: 9000 } }] }`} />
      </div>

      <h2 className="mt-12 text-2xl font-bold">EntitySchema</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b dark:border-gray-700"><th className="px-3 py-2 text-left">Field Type</th><th className="px-3 py-2 text-left">SQL</th><th className="px-3 py-2 text-left">MongoDB</th></tr></thead>
          <tbody className="divide-y dark:divide-gray-700">
            <tr><td className="px-3 py-2 font-mono">string</td><td className="px-3 py-2">TEXT</td><td className="px-3 py-2">String</td></tr>
            <tr><td className="px-3 py-2 font-mono">number</td><td className="px-3 py-2">REAL</td><td className="px-3 py-2">Number</td></tr>
            <tr><td className="px-3 py-2 font-mono">boolean</td><td className="px-3 py-2">INTEGER(0/1)</td><td className="px-3 py-2">Boolean</td></tr>
            <tr><td className="px-3 py-2 font-mono">date</td><td className="px-3 py-2">TEXT (ISO)</td><td className="px-3 py-2">Date</td></tr>
            <tr><td className="px-3 py-2 font-mono">json</td><td className="px-3 py-2">TEXT (JSON)</td><td className="px-3 py-2">Mixed</td></tr>
            <tr><td className="px-3 py-2 font-mono">array</td><td className="px-3 py-2">TEXT (JSON)</td><td className="px-3 py-2">Array</td></tr>
          </tbody>
        </table>
      </div>

      <div className="mt-12">
        <Link href="/docs/dialects" className="text-blue-600 hover:underline">Dialects Configuration Guide →</Link>
      </div>
    </div>
  )
}
