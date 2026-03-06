import CodeBlock from '@/components/CodeBlock'
import InstallCommand from '@/components/InstallCommand'
import Link from 'next/link'

export const metadata = { title: 'Getting Started — @mosta' }

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Getting Started</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Get up and running with the @mosta suite in minutes.
      </p>

      <h2 className="mt-12 text-2xl font-bold">1. Install the ORM</h2>
      <div className="mt-4">
        <InstallCommand pkg="@mostajs/orm" />
      </div>

      <h2 className="mt-10 text-2xl font-bold">2. Install a database driver</h2>
      <div className="mt-4">
        <CodeBlock lang="bash" code={`# Pick one:
npm install better-sqlite3   # SQLite (development)
npm install pg               # PostgreSQL (production)
npm install mongoose          # MongoDB (cloud)`} />
      </div>

      <h2 className="mt-10 text-2xl font-bold">3. Configure environment</h2>
      <div className="mt-4">
        <CodeBlock lang="bash" code={`# .env
DB_DIALECT=sqlite
SGBD_URI=./myapp.db`} />
      </div>

      <h2 className="mt-10 text-2xl font-bold">4. Define a schema</h2>
      <div className="mt-4">
        <CodeBlock code={`import type { EntitySchema } from '@mostajs/orm'

export const TaskSchema: EntitySchema = {
  name: 'Task',
  collection: 'tasks',
  timestamps: true,
  fields: {
    title:  { type: 'string', required: true },
    done:   { type: 'boolean', default: false },
    dueAt:  { type: 'date' },
  },
  relations: {},
  indexes: [],
}`} />
      </div>

      <h2 className="mt-10 text-2xl font-bold">5. Create a repository and use it</h2>
      <div className="mt-4">
        <CodeBlock code={`import { createConnection, registerSchema, BaseRepository } from '@mostajs/orm'
import type { IDialect } from '@mostajs/orm'

registerSchema(TaskSchema)
const dialect = await createConnection()

class TaskRepo extends BaseRepository<any> {
  constructor(d: IDialect) { super(TaskSchema, d) }
}

const tasks = new TaskRepo(dialect)
await tasks.create({ title: 'Read the docs' })
const all = await tasks.findAll()`} />
      </div>

      <h2 className="mt-10 text-2xl font-bold">Next steps</h2>
      <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
        <li><Link href="/docs/tutorial" className="text-blue-600 hover:underline">Full Tutorial</Link> — Build a complete app step by step</li>
        <li><Link href="/docs/api-reference" className="text-blue-600 hover:underline">API Reference</Link> — All exports documented</li>
        <li><Link href="/docs/dialects" className="text-blue-600 hover:underline">Dialects Guide</Link> — Configure all 13 databases</li>
        <li><Link href="/packages/auth" className="text-blue-600 hover:underline">@mostajs/auth</Link> — Add authentication & RBAC</li>
      </ul>
    </div>
  )
}
