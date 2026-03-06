'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const managers = [
  { label: 'npm', cmd: 'npm install' },
  { label: 'pnpm', cmd: 'pnpm add' },
  { label: 'yarn', cmd: 'yarn add' },
]

export default function InstallCommand({ pkg }: { pkg: string }) {
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)

  const command = `${managers[active].cmd} ${pkg}`

  const copy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-950 dark:border-gray-700">
      <div className="flex items-center gap-1 border-b border-gray-800 px-3 py-2">
        {managers.map((m, i) => (
          <button
            key={m.label}
            onClick={() => setActive(i)}
            className={`rounded px-2 py-1 text-xs ${
              i === active ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {m.label}
          </button>
        ))}
        <button onClick={copy} className="ml-auto text-gray-400 hover:text-white">
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="px-4 py-3 text-sm text-green-400">
        <code>$ {command}</code>
      </pre>
    </div>
  )
}
