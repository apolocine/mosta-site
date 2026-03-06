import { packages } from '@/lib/packages'
import PackagePage from '@/components/PackagePage'

export const metadata = { title: '@mostajs/audit — Audit Logging' }

export default function AuditPage() {
  return (
    <PackagePage
      pkg={packages[2]}
      quickStart={`import { logAudit, getAuditUser, AuditLogSchema } from '@mostajs/audit'
import { registerSchema } from '@mostajs/orm'

// 1. Register schema
registerSchema(AuditLogSchema)

// 2. Log an audit event (fire-and-forget)
await logAudit({
  userId: session.user.id,
  userName: session.user.name,
  userRole: 'admin',
  action: 'create',
  module: 'users',
  resource: 'User',
  resourceId: newUser.id,
})

// 3. Or use the helper to extract user info from session
await logAudit({
  ...getAuditUser(session),
  action: 'delete',
  module: 'posts',
  resource: 'Post',
  resourceId: postId,
})`}
      apiRows={[
        ['logAudit(params)', 'Fire-and-forget audit entry'],
        ['getAuditUser(session)', 'Extract user info from NextAuth session'],
        ['AuditLogRepository', 'Repository with findPaginated, findByResource, deleteOlderThan'],
        ['AuditLogSchema', 'Entity schema for registration'],
        ['createAuditHandlers(perm, check)', 'API route factory for paginated consultation'],
      ]}
    />
  )
}
