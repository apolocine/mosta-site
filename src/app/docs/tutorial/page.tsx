import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export const metadata = { title: 'Tutorial — @mosta' }

export default function TutorialPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Tutorial: Blog API</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Build a complete blog REST API with @mostajs/orm in 10 minutes.
      </p>

      <h2 className="mt-12 text-2xl font-bold">Step 1: Project setup</h2>
      <div className="mt-4">
        <CodeBlock lang="bash" code={`mkdir blog-api && cd blog-api
npm init -y
npm install @mostajs/orm better-sqlite3 express
npm install -D typescript @types/express @types/better-sqlite3`} />
      </div>

      <h2 className="mt-10 text-2xl font-bold">Step 2: Define schemas</h2>
      <div className="mt-4">
        <CodeBlock code={`// schemas/post.schema.ts
import type { EntitySchema } from '@mostajs/orm'

export const PostSchema: EntitySchema = {
  name: 'Post',
  collection: 'posts',
  timestamps: true,
  fields: {
    title:  { type: 'string', required: true },
    slug:   { type: 'string', required: true, unique: true },
    body:   { type: 'string', required: true },
    status: { type: 'string', enum: ['draft', 'published'], default: 'draft' },
    views:  { type: 'number', default: 0 },
  },
  relations: {
    author: { target: 'User', type: 'many-to-one', required: true },
  },
  indexes: [
    { fields: { slug: 'asc' }, unique: true },
    { fields: { status: 'asc' } },
  ],
}`} />
      </div>

      <h2 className="mt-10 text-2xl font-bold">Step 3: Create repositories</h2>
      <div className="mt-4">
        <CodeBlock code={`// repositories/post.repository.ts
import { BaseRepository } from '@mostajs/orm'
import type { IDialect } from '@mostajs/orm'
import { PostSchema } from '../schemas/post.schema'

export class PostRepository extends BaseRepository<any> {
  constructor(dialect: IDialect) { super(PostSchema, dialect) }

  async findPublished() {
    return this.findAll({ status: 'published' }, { sort: { createdAt: -1 } })
  }

  async incrementViews(id: string) {
    return this.increment(id, 'views', 1)
  }
}`} />
      </div>

      <h2 className="mt-10 text-2xl font-bold">Step 4: Wire up Express routes</h2>
      <div className="mt-4">
        <CodeBlock code={`// index.ts
import express from 'express'
import { createConnection, registerSchema } from '@mostajs/orm'
import { PostSchema } from './schemas/post.schema'
import { PostRepository } from './repositories/post.repository'

registerSchema(PostSchema)
const dialect = await createConnection()
const posts = new PostRepository(dialect)

const app = express()
app.use(express.json())

app.get('/posts', async (_, res) => {
  res.json(await posts.findPublished())
})

app.post('/posts', async (req, res) => {
  res.json(await posts.create(req.body))
})

app.listen(3000, () => console.log('Running on :3000'))`} />
      </div>

      <h2 className="mt-10 text-2xl font-bold">Step 5: Switch databases</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Change your <code>.env</code> and restart — no code changes needed:
      </p>
      <div className="mt-4">
        <CodeBlock lang="bash" code={`# Development
DB_DIALECT=sqlite
SGBD_URI=./blog.db

# Production — just change these two lines
DB_DIALECT=postgres
SGBD_URI=postgresql://user:pass@localhost:5432/blog`} />
      </div>

      <div className="mt-12 flex gap-4">
        <Link href="/docs/api-reference" className="text-blue-600 hover:underline">API Reference →</Link>
        <Link href="/docs/dialects" className="text-blue-600 hover:underline">Dialects Guide →</Link>
      </div>
    </div>
  )
}
