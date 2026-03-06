import { packages } from '@/lib/packages'
import PackagePage from '@/components/PackagePage'

export const metadata = { title: '@mostajs/ui — Shared UI Components' }

export default function UiPage() {
  return (
    <PackagePage
      pkg={packages[8]}
      quickStart={`import { Button, Card, CardHeader, CardTitle, CardContent } from '@mostajs/ui'
import { Input } from '@mostajs/ui'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@mostajs/ui'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@mostajs/ui'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@mostajs/ui'
import { Badge } from '@mostajs/ui'
import { cn } from '@mostajs/ui'

// Usage
<Card>
  <CardHeader>
    <CardTitle>Users</CardTitle>
  </CardHeader>
  <CardContent>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell><Badge>Admin</Badge></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </CardContent>
</Card>`}
      apiRows={[
        ['Button', 'Primary button with variants (default, outline, ghost, destructive)'],
        ['Card, CardHeader, CardTitle, CardContent', 'Card container components'],
        ['Dialog, DialogContent, DialogHeader, DialogTitle', 'Modal dialog (Radix)'],
        ['Table, TableHeader, TableBody, TableRow, TableCell', 'Styled table components'],
        ['Select, SelectContent, SelectItem, SelectTrigger', 'Dropdown select (Radix)'],
        ['Input', 'Styled text input'],
        ['Label', 'Form label'],
        ['Badge', 'Status badge with variants'],
        ['Checkbox', 'Checkbox input (Radix)'],
        ['Switch', 'Toggle switch (Radix)'],
        ['Tabs, TabsList, TabsTrigger, TabsContent', 'Tab navigation (Radix)'],
        ['Tooltip, TooltipProvider, TooltipTrigger, TooltipContent', 'Tooltip (Radix)'],
        ['AlertDialog', 'Confirmation dialog (Radix)'],
        ['DropdownMenu', 'Context/dropdown menu (Radix)'],
        ['Popover', 'Popover overlay (Radix)'],
        ['Separator', 'Visual separator'],
        ['Toaster', 'Toast notifications (sonner)'],
        ['cn()', 'Tailwind class merge utility'],
      ]}
    />
  )
}
