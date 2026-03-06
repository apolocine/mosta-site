import { packages } from '@/lib/packages'
import PackagePage from '@/components/PackagePage'

export const metadata = { title: '@mostajs/rbac — Role-Based Access Control' }

export default function RbacPage() {
  return (
    <PackagePage
      pkg={packages[6]}
      quickStart={`import { createUsersHandler, createRolesHandler, createSeedHandler, createMatrixHandler } from '@mostajs/rbac'

// API routes — app/api/users/route.ts
const usersHandler = createUsersHandler(dialect)
export const GET = usersHandler.list
export const POST = usersHandler.create

// API routes — app/api/roles/route.ts
const rolesHandler = createRolesHandler(dialect)
export const GET = rolesHandler.list
export const POST = rolesHandler.create

// Seed RBAC — app/api/seed/route.ts
const seedHandler = createSeedHandler(dialect, {
  permissions: [
    { code: 'USER_VIEW', category: 'users', label: 'View users' },
    { code: 'USER_EDIT', category: 'users', label: 'Edit users' },
  ],
  roles: [
    { name: 'admin', permissions: ['USER_VIEW', 'USER_EDIT'] },
    { name: 'viewer', permissions: ['USER_VIEW'] },
  ],
})
export const POST = seedHandler.seed

// Permission matrix — app/api/matrix/route.ts
const matrixHandler = createMatrixHandler(dialect)
export const GET = matrixHandler.get
export const PUT = matrixHandler.update`}
      apiRows={[
        ['createUsersHandler(dialect)', 'CRUD route factory for users'],
        ['createRolesHandler(dialect)', 'CRUD route factory for roles'],
        ['createSeedHandler(dialect, config)', 'Seed permissions + roles + admin user'],
        ['createMatrixHandler(dialect)', 'Get/update role-permission matrix'],
        ['PermissionCategory', 'Type for permission grouping'],
        ['RoleSeedConfig', 'Type for role seed configuration'],
      ]}
    />
  )
}
