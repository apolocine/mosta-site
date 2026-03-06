import { packages } from '@/lib/packages'
import PackagePage from '@/components/PackagePage'

export const metadata = { title: '@mostajs/ticketing — Ticket Generation & Scan Validation' }

export default function TicketingPage() {
  return (
    <PackagePage
      pkg={packages[7]}
      quickStart={`import { createTicketsHandler, createScanHandler } from '@mostajs/ticketing'

// API routes — app/api/tickets/route.ts
const ticketsHandler = createTicketsHandler(dialect)
export const GET = ticketsHandler.list
export const POST = ticketsHandler.create

// Scan validation — app/api/scan/route.ts
const scanHandler = createScanHandler(dialect)
export const POST = scanHandler.validate

// The 8-step scan pipeline:
// 1. Parse Wiegand 24-bit ticket number
// 2. Lookup ticket in database
// 3. Check ticket status (active/suspended/expired)
// 4. Check validity period (start/end dates)
// 5. Check validity mode (day_reentry, single_use, time_slot)
// 6. Check quota remaining
// 7. Record scan entry
// 8. Return access decision (granted/denied/reentry)`}
      apiRows={[
        ['createTicketsHandler(dialect)', 'CRUD route factory for tickets'],
        ['createScanHandler(dialect)', 'Scan validation route factory'],
        ['TicketRepository', 'Repository for ticket CRUD operations'],
        ['processScan(ticket, options)', 'Core 8-step validation pipeline'],
        ['generateWiegand24()', 'Generate Wiegand 24-bit ticket number'],
        ['ValidityMode', 'Type: day_reentry | single_use | time_slot'],
      ]}
    />
  )
}
