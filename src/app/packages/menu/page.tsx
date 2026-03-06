import { packages } from '@/lib/packages'
import PackagePage from '@/components/PackagePage'

export const metadata = { title: '@mostajs/menu — Dashboard Sidebar' }

export default function MenuPage() {
  return (
    <PackagePage
      pkg={packages[9]}
      quickStart={`import { DashboardSidebar } from '@mostajs/menu'
import type { MenuConfig, MenuItem, MenuGroup, SidebarUser } from '@mostajs/menu'
import { LayoutDashboard, Users, Settings, Shield, Ticket, Scan } from 'lucide-react'

// ── 1. Define menu structure ──────────────────────────────
const menuConfig: MenuConfig = {
  // Top-level direct links (always visible, no nesting)
  items: [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  ],

  // Collapsible groups (auto-expand when a child route is active)
  groups: [
    {
      label: 'Administration',
      icon: Shield,
      items: [
        // permission? — if set, item hidden when user lacks this permission
        { label: 'Users',    href: '/dashboard/users',    icon: Users,    permission: 'USER_VIEW' },
        { label: 'Settings', href: '/dashboard/settings', icon: Settings, permission: 'SETTINGS_VIEW' },
      ],
    },
    {
      label: 'Ticketing',
      icon: Ticket,
      items: [
        { label: 'Tickets', href: '/dashboard/tickets', icon: Ticket, permission: 'TICKET_VIEW' },
        { label: 'Scanner', href: '/dashboard/scan',    icon: Scan,   permission: 'SCAN_USE' },
      ],
    },
  ],
}

// ── 2. Use in your dashboard layout ──────────────────────
// app/dashboard/layout.tsx
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { DashboardSidebar } from '@mostajs/menu'
import { signOut } from 'next-auth/react'

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions)

  return (
    <div className="flex h-screen">
      <DashboardSidebar
        {/* ─── Required props ─── */}
        config={menuConfig}
        user={{
          name: session?.user?.name,       // displayed in footer avatar
          role: session?.user?.role,        // displayed under name
          permissions: session?.user?.perms // string[] used by hasPermission
        }}

        {/* ─── Optional props ─── */}
        appName="SecuAccessPro"           // header brand name (default: "App")
        appIcon={Shield}                  // header icon component (default: Shield)

        // Translation function — called for every label.
        // Default: identity (key => key). Integrate with next-intl, i18next, etc.
        t={(key) => translations[key] ?? key}

        // Permission checker — controls which menu items are visible.
        // Receives user.permissions[] and the item's required permission string.
        // Default: () => true (show everything)
        hasPermission={(userPerms, required) => userPerms.includes(required)}

        // Logout callback — shows logout button in footer when provided.
        // Omit to hide the logout button entirely.
        onLogout={() => signOut({ callbackUrl: '/login' })}
      />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}`}
      apiRows={[
        ['DashboardSidebar', 'Main sidebar component — fully configurable via props'],
        ['config: MenuConfig', 'Required. { items: MenuItem[], groups: MenuGroup[] }'],
        ['config.items', 'Top-level links, always visible (no nesting)'],
        ['config.groups', 'Collapsible groups, auto-expand when child route is active'],
        ['user: SidebarUser', 'Required. { name?, role?, permissions?: string[] }'],
        ['user.name', 'Displayed in footer avatar (initials) + name label'],
        ['user.role', 'Displayed under name, translated via t("auth.roles.{role}")'],
        ['user.permissions', 'String array passed to hasPermission() for filtering'],
        ['appName?: string', 'Header brand name (default: "App")'],
        ['appIcon?: ElementType', 'Header icon — any lucide-react or custom component'],
        ['t?: (key) => string', 'Translation function for i18n (default: identity)'],
        ['hasPermission?: (perms, required) => boolean', 'Permission checker (default: () => true)'],
        ['onLogout?: () => void', 'Logout callback — omit to hide logout button'],
        ['MenuItem', 'Type: { label, href, icon: ElementType, permission?: string }'],
        ['MenuGroup', 'Type: { label, icon: ElementType, items: MenuItem[] }'],
        ['MenuConfig', 'Type: { items: MenuItem[], groups: MenuGroup[] }'],
        ['SidebarUser', 'Type: { name?: string, role?: string, permissions?: string[] }'],
      ]}
    />
  )
}
