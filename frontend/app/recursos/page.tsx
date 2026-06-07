'use client'
// app/recursos/page.tsx
import Link from 'next/link'
import BottomNav from '@/components/layout/BottomNav'
import { BookOpen, ScrollText, FileText, Music, Heart, ChevronRight } from 'lucide-react'

const RECURSOS = [
  { href: '/devocional',   icon: BookOpen,   label: 'Devocional do Dia',         desc: 'Meditação diária na Palavra', cor: 'bg-amber-50 text-amber-600 border-amber-100' },
  { href: '/agenda',       icon: ScrollText, label: 'Agenda',                     desc: 'Calendário de eventos',       cor: 'bg-purple-50 text-purple-600 border-purple-100' },
  { href: '/avisos',       icon: FileText,   label: 'Avisos e Notícias',           desc: 'Comunicados da igreja',       cor: 'bg-orange-50 text-orange-600 border-orange-100' },
  { href: '/contribuicoes',icon: Heart,      label: 'Contribuições',               desc: 'Dízimos e ofertas via PIX',   cor: 'bg-rose-50 text-rose-600 border-rose-100' },
  { href: '/quem-somos',  icon: BookOpen,   label: 'Nossa Fé',                    desc: 'Confissão de Westminster',    cor: 'bg-teal-50 text-teal-600 border-teal-100' },
]

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-[#F5F6F7] pb-24">
      <div className="bg-[#0F4D3A] px-4 pt-12 pb-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #fff, transparent 60%)' }} />
        <p className="text-white/60 text-xs tracking-wider uppercase relative">Ferramentas</p>
        <h1 className="text-white text-2xl font-bold relative">Recursos</h1>
        <p className="text-white/60 text-sm mt-1 relative">Tudo o que você precisa em um lugar</p>
      </div>
      <div className="px-4 pt-5 space-y-3">
        {RECURSOS.map(({ href, icon: Icon, label, desc, cor }) => (
          <Link key={href} href={href}
            className={`bg-white rounded-2xl p-4 border shadow-sm card-hover flex items-center gap-3 ${cor.split(' ')[2]}`}>
            <div className={`${cor.split(' ')[0]} ${cor.split(' ')[1]} p-3 rounded-xl flex-shrink-0`}>
              <Icon size={22} strokeWidth={1.8} />
            </div>
            <div className="flex-1">
              <p className="text-[#1A1A1A] font-semibold text-sm">{label}</p>
              <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
            </div>
            <ChevronRight size={16} className="text-gray-300" />
          </Link>
        ))}
      </div>
      <BottomNav />
    </div>
  )
}
