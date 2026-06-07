'use client'
// app/mais/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import BottomNav from '@/components/layout/BottomNav'
import { ChevronRight, Info, MapPin, Heart, Users, BookOpen, Shield, Settings } from 'lucide-react'

const SECOES = [
  {
    titulo: 'Igreja',
    items: [
      { href: '/quem-somos',    icon: Info,      label: 'Quem Somos',           desc: 'Nossa história e fé' },
      { href: '/comunidade',    icon: Users,     label: 'Comunidade',           desc: 'Ministérios e sociedades' },
      { href: '/localizacao',   icon: MapPin,    label: 'Localização',          desc: 'Como nos encontrar' },
    ]
  },
  {
    titulo: 'Espiritual',
    items: [
      { href: '/devocional',    icon: BookOpen,  label: 'Devocional',           desc: 'Devocional do dia' },
      { href: '/oracao',        icon: Heart,     label: 'Pedido de Oração',     desc: 'Envie seu pedido' },
    ]
  },
  {
    titulo: 'Suporte',
    items: [
      { href: '/contribuicoes', icon: Heart,     label: 'Contribuições',        desc: 'Dízimos e ofertas' },
      { href: '/admin/login',   icon: Settings,  label: 'Painel Administrativo',desc: 'Acesso restrito' },
    ]
  },
]

export default function MaisPage() {
  return (
    <div className="min-h-screen bg-[#F5F6F7] pb-24">

      {/* Header */}
      <div className="bg-[#0F4D3A] px-4 pt-12 pb-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #fff, transparent 60%)' }} />
        <div className="flex items-center gap-3 relative">
          <div className="w-14 h-14 rounded-2xl bg-white p-2 shadow-lg">
            <Image src="/images/logo-ipf.jpg" alt="IPF" width={44} height={44} style={{ objectFit: 'contain' }} />
          </div>
          <div>
            <p className="text-white/60 text-xs tracking-wider uppercase">Igreja Presbiteriana</p>
            <h1 className="text-white font-bold text-xl">Filadélfia</h1>
            <p className="text-white/50 text-xs">Nova Cidade · São Gonçalo, RJ</p>
          </div>
        </div>
      </div>

      <div className="px-4 pt-5 space-y-5">
        {SECOES.map(({ titulo, items }) => (
          <div key={titulo}>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2 px-1">{titulo}</p>
            <div className="bg-white rounded-2xl shadow-card overflow-hidden divide-y divide-gray-50">
              {items.map(({ href, icon: Icon, label, desc }) => (
                <Link key={href} href={href}
                  className="flex items-center gap-3 px-4 py-3.5 active:bg-gray-50 transition-colors">
                  <div className="w-9 h-9 bg-[#0F4D3A]/8 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#0F4D3A]" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#1A1A1A] font-medium text-sm">{label}</p>
                    <p className="text-gray-400 text-xs">{desc}</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-300" />
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Versão */}
        <div className="text-center pb-2">
          <p className="text-gray-300 text-xs">Filadélfia Conecta v2.0</p>
          <p className="text-gray-300 text-xs mt-0.5">Soli Deo Gloria</p>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
