'use client'
// components/layout/PageHeader.tsx
import { useRouter } from 'next/navigation'
import { ArrowLeft, Share2 } from 'lucide-react'

interface Props {
  title: string
  subtitle?: string
  showBack?: boolean
  showShare?: boolean
  dark?: boolean
  onShare?: () => void
}

export default function PageHeader({ title, subtitle, showBack = true, showShare = false, dark = false, onShare }: Props) {
  const router = useRouter()

  const bg   = dark ? 'bg-[#0F4D3A]' : 'bg-white border-b border-gray-100'
  const text = dark ? 'text-white' : 'text-[#0F4D3A]'
  const sub  = dark ? 'text-white/60' : 'text-gray-400'
  const btn  = dark ? 'text-white/80 hover:text-white' : 'text-[#0F4D3A]'

  return (
    <header className={`${bg} sticky top-0 z-40 px-4 py-3 flex items-center gap-3`}>
      {showBack && (
        <button onClick={() => router.back()} className={`${btn} p-2 -ml-2 rounded-xl transition-colors`}>
          <ArrowLeft size={22} />
        </button>
      )}
      <div className="flex-1">
        <h1 className={`${text} font-bold text-lg leading-tight`}>{title}</h1>
        {subtitle && <p className={`${sub} text-xs`}>{subtitle}</p>}
      </div>
      {showShare && (
        <button onClick={onShare} className={`${btn} p-2 rounded-xl`}>
          <Share2 size={20} />
        </button>
      )}
    </header>
  )
}
