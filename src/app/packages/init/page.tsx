import { packages } from '@/lib/packages'
import PackagePage from '@/components/PackagePage'

export const metadata = { title: '@mostajs/init — CLI & Codegen' }

export default function InitPage() {
  return (
    <PackagePage
      pkg={packages[11]}
      quickStart={`# CLI — Module discovery and report
npx @mostajs/init --report
npx @mostajs/init --json

# Generate registry and DAL service
npx @mostajs/init --generate

# Install all discovered @mostajs modules
npx @mostajs/init --install

# Reverse-engineer existing database into EntitySchema
npx @mostajs/init --reverse-engineer

# Generate CRUD pages from EntitySchema
npx @mostajs/init --crud

# ─── React components ───
import { SchemaDesigner } from '@mostajs/init/components/SchemaDesigner'
import { PageDesigner } from '@mostajs/init/components/PageDesigner'

// Visual schema builder (drag-and-drop entities, fields, relations)
<SchemaDesigner
  initialSchemas={[]}
  onExport={(schemas) => saveSchemas(schemas)}
/>

// Visual page builder (layout, components, property panel)
<PageDesigner
  schemas={schemas}
  onExport={(code) => savePageCode(code)}
/>`}
      apiRows={[
        ['npx @mostajs/init --report', 'Discover modules and print Markdown report'],
        ['npx @mostajs/init --json', 'Output report as JSON'],
        ['npx @mostajs/init --generate', 'Generate registry.ts + dal-service.ts'],
        ['npx @mostajs/init --install', 'npm install all discovered modules'],
        ['npx @mostajs/init --reverse-engineer', 'Introspect DB and generate EntitySchema'],
        ['npx @mostajs/init --crud', 'Generate CRUD list + form pages + API routes'],
        ['SchemaDesigner', 'Visual EntitySchema builder (React component)'],
        ['PageDesigner', 'Visual page layout builder (React component)'],
        ['discoverModules(root)', 'Programmatic module discovery'],
        ['generateCrud(schema, options)', 'Programmatic CRUD code generation'],
        ['reverseEngineerMongo(db)', 'Reverse-engineer MongoDB collections'],
        ['reverseEngineerSQL(query, schema)', 'Reverse-engineer SQL tables'],
      ]}
    />
  )
}
