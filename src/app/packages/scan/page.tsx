import { packages } from '@/lib/packages'
import PackagePage from '@/components/PackagePage'

export const metadata = { title: '@mostajs/scan — QR/Barcode Scanner UI' }

export default function ScanPage() {
  return (
    <PackagePage
      pkg={packages[10]}
      quickStart={`import { ScannerView, ScanResultCard, ScanEmptyState, useScan } from '@mostajs/scan'
import { playGranted, playDenied } from '@mostajs/scan'

// ── Option 1: Full component (zero config) ──────────────
<ScannerView
  apiEndpoint="/api/scan"               // POST endpoint for scan validation
  onResult={(data) => console.log(data)} // called after each scan
  title="Scan Ticket"                    // header title
/>

// ── Option 2: useScan hook (custom UI) ──────────────────
function MyScanPage() {
  const {
    scanning,      // boolean — scanner is active
    result,        // ScanResultData | null — last scan result
    startScanner,  // () => void — start camera + QR detection
    stopScanner,   // () => void — stop scanner
  } = useScan({
    apiEndpoint: '/api/scan',            // Required — POST endpoint
    onResult: (data) => {                // Called on successful scan
      console.log('Status:', data.status) // 'granted' | 'denied' | 'reentry'
      console.log('Ticket:', data.ticket)
    },
    onError: (msg) => toast.error(msg),  // Called on scanner/API error
    playAudio: true,                     // Play granted/denied beep (default: true)
  })

  return (
    <div>
      {/* Required: div with id="qr-reader" for html5-qrcode */}
      <div id="qr-reader" style={{ width: 400 }} />

      <button onClick={scanning ? stopScanner : startScanner}>
        {scanning ? 'Stop' : 'Start Scanner'}
      </button>

      {result ? (
        <ScanResultCard result={result} />  // Styled result card
      ) : (
        <ScanEmptyState />                  // "No scan yet" placeholder
      )}
    </div>
  )
}

// ── Audio feedback ──────────────────────────────────────
import { playBeep, playGranted, playDenied } from '@mostajs/scan'
playGranted()   // ascending tone — access granted
playDenied()    // descending tone — access denied
playBeep()      // neutral beep`}
      apiRows={[
        ['ScannerView', 'Props: apiEndpoint, onResult, title — self-contained scanner component'],
        ['ScanResultCard', 'Props: result: ScanResultData — styled card (granted/denied/reentry)'],
        ['ScanEmptyState', 'Empty state placeholder before first scan'],
        ['useScan(options)', 'Hook — returns { scanning, result, startScanner, stopScanner }'],
        ['UseScanOptions.apiEndpoint', 'Required. POST endpoint that receives { code: string }'],
        ['UseScanOptions.onResult', 'Callback: (data: ScanResultData) => void'],
        ['UseScanOptions.onError', 'Callback: (message: string) => void'],
        ['UseScanOptions.playAudio', 'Enable audio feedback (default: true)'],
        ['ScanResultData', 'Type: { status, message, ticket?, client?, timestamp }'],
        ['playBeep()', 'Neutral beep sound (Web Audio API)'],
        ['playGranted()', 'Access granted ascending tone'],
        ['playDenied()', 'Access denied descending tone'],
      ]}
    />
  )
}
