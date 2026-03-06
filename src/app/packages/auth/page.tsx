import { packages } from '@/lib/packages'
import PackagePage from '@/components/PackagePage'

export const metadata = { title: '@mostajs/auth — Authentication & RBAC' }

export default function AuthPage() {
  return (
    <PackagePage
      pkg={packages[1]}
      quickStart={`import { createAuthHandlers, createAuthChecks, seedRBAC } from '@mostajs/auth'
import { registerSchemas } from '@mostajs/orm'
import { UserSchema, RoleSchema, PermissionSchema, PermissionCategorySchema } from '@mostajs/auth'

// 1. Register schemas
registerSchemas([UserSchema, RoleSchema, PermissionSchema, PermissionCategorySchema])

// 2. Create auth handlers
const ROLE_PERMS = { admin: ['*'], editor: ['dashboard:view'] }
const { handlers, auth } = createAuthHandlers(ROLE_PERMS)
const { checkPermission } = createAuthChecks(auth, ROLE_PERMS)

// 3. Protect a route
export async function GET() {
  const { error, session } = await checkPermission('user:view')
  if (error) return error
  return Response.json({ user: session.user })
}`}
      apiRows={[
        ['createAuthHandlers(roleMap, config?)', 'Create NextAuth handlers'],
        ['createAuthChecks(auth, fallback?)', 'Create checkAuth/checkPermission'],
        ['createAuthMiddleware(options?)', 'Next.js route protection middleware'],
        ['seedRBAC(options)', 'Idempotent seed categories/permissions/roles'],
        ['hashPassword(plain)', 'bcryptjs hash wrapper'],
        ['comparePassword(plain, hash)', 'bcryptjs compare wrapper'],
        ['hasPermission(perms, required)', 'Check permission (client-safe)'],
        ['usePermissions()', 'React hook for permission checking'],
        ['PermissionGuard', 'Conditional render component'],
        ['SessionProvider', 'NextAuth session wrapper'],
        ['UserRepository', 'User database repository'],
        ['RoleRepository', 'Role database repository'],
      ]}
    />
  )
}
