'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CodeBlock({ code, lang = 'typescript' }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative rounded-lg border border-gray-200 bg-gray-950 dark:border-gray-700">
      <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2">
        <span className="text-xs text-gray-400">{lang}</span>
        <button onClick={copy} className="text-gray-400 hover:text-white">
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-gray-300">
        <code>{code}</code>
      </pre>
    </div>
  )
}
