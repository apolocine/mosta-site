import { packages } from '@/lib/packages'
import PackagePage from '@/components/PackagePage'

export const metadata = { title: '@mostajs/orm — Multi-dialect ORM' }

export default function OrmPage() {
  return (
    <PackagePage
      pkg={packages[0]}
      quickStart={`import { createConnection, registerSchema, BaseRepository } from '@mostajs/orm'
import type { EntitySchema, IDialect } from '@mostajs/orm'

const UserSchema: EntitySchema = {
  name: 'User',
  collection: 'users',
  timestamps: true,
  fields: {
    email: { type: 'string', required: true, unique: true },
    role:  { type: 'string', default: 'user' },
  },
  relations: {},
  indexes: [],
}

registerSchema(UserSchema)
const dialect = await createConnection()

class UserRepo extends BaseRepository<any> {
  constructor(d: IDialect) { super(UserSchema, d) }
}

const users = new UserRepo(dialect)
await users.create({ email: 'alice@example.com' })
const all = await users.findAll({ role: 'admin' })`}
      apiRows={[
        ['createConnection(config?)', 'Connect to database, returns IDialect'],
        ['getDialect()', 'Get active dialect singleton'],
        ['registerSchema(schema)', 'Register entity schema'],
        ['registerSchemas(schemas[])', 'Register multiple schemas'],
        ['BaseRepository<T>', 'Generic CRUD repository class'],
        ['EntitySchema', 'Schema definition interface'],
        ['IDialect', 'Database dialect interface'],
        ['FilterQuery', 'Query filter type'],
        ['QueryOptions', 'Sort, skip, limit, select options'],
        ['testConnection(config)', 'Test a connection'],
        ['disconnectDialect()', 'Close active connection'],
      ]}
    />
  )
}
