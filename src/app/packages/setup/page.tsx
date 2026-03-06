import { packages } from '@/lib/packages'
import PackagePage from '@/components/PackagePage'

export const metadata = { title: '@mostajs/setup — Setup Wizard' }

export default function SetupPage() {
  return (
    <PackagePage
      pkg={packages[4]}
      quickStart={`import { createStatusHandler, createTestDbHandler, createInstallHandler } from '@mostajs/setup'
import { needsSetup } from '@mostajs/setup'
import type { MostaSetupConfig } from '@mostajs/setup'

// 1. Define setup config
const config: MostaSetupConfig = {
  appName: 'MyApp',
  defaultPort: 3000,
  seedRBAC: async () => { /* seed roles */ },
  createAdmin: async ({ email, hashedPassword }) => { /* create admin */ },
}

// 2. Create API routes
// GET /api/setup/status
export const { GET } = createStatusHandler(() => needsSetup(countUsers))

// POST /api/setup/test-db
export const { POST } = createTestDbHandler(() => needsSetup(countUsers))

// POST /api/setup/install
export const { POST } = createInstallHandler(() => needsSetup(countUsers), config)`}
      apiRows={[
        ['needsSetup(countFn)', 'Check if app needs initial setup'],
        ['runInstall(config)', 'Full installation flow'],
        ['testDbConnection(params)', 'Test DB connection'],
        ['composeDbUri(dialect, config)', 'Build connection URI from parts'],
        ['writeEnvLocal(vars)', 'Write/update .env.local'],
        ['DIALECT_INFO', 'Metadata for all 13 dialects'],
        ['ALL_DIALECTS', 'Array of all dialect type strings'],
        ['createStatusHandler(guard)', 'GET /setup/status factory'],
        ['createTestDbHandler(guard)', 'POST /setup/test-db factory'],
        ['createInstallHandler(guard, config)', 'POST /setup/install factory'],
      ]}
    />
  )
}
