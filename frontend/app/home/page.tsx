'use client'
// app/home/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import BottomNav from '@/components/layout/BottomNav'
import { Bell, MapPin, Play, ChevronRight, Heart, MessageCircle, Users, BookOpen, Calendar, Megaphone, Video, Cross } from 'lucide-react'

const QUICK_ACCESS = [
  { href: '/oracao',      icon: Heart,          label: 'Pedido de Oração',    color: 'bg-rose-50 text-rose-600',    border: 'border-rose-100' },
  { href: '/pastor',      icon: MessageCircle,  label: 'Fale com o Pastor',   color: 'bg-emerald-50 text-emerald-700', border: 'border-emerald-100' },
  { href: '/conselho',    icon: Users,          label: 'Fale com o Conselho', color: 'bg-blue-50 text-blue-600',    border: 'border-blue-100' },
  { href: '/devocional',  icon: BookOpen,       label: 'Devocional do Dia',   color: 'bg-amber-50 text-amber-600',  border: 'border-amber-100' },
  { href: '/agenda',      icon: Calendar,       label: 'Agenda da Igreja',    color: 'bg-purple-50 text-purple-600', border: 'border-purple-100' },
  { href: '/avisos',      icon: Megaphone,      label: 'Avisos e Notícias',   color: 'bg-orange-50 text-orange-600', border: 'border-orange-100' },
  { href: '/localizacao', icon: MapPin,         label: 'Localização',         color: 'bg-teal-50 text-teal-600',    border: 'border-teal-100' },
  { href: '/cultos',      icon: Video,          label: 'Cultos Online',       color: 'bg-indigo-50 text-indigo-600', border: 'border-indigo-100' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F6F7] pb-24">

      {/* ── HEADER ─────────────────────────────────────────── */}
      <header className="bg-[#0F4D3A] px-4 pt-12 pb-6 relative overflow-hidden">
        {/* Decoração */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #ffffff, transparent)', transform: 'translate(40%, -40%)' }} />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #ffffff, transparent)', transform: 'translate(-30%, 30%)' }} />

        <div className="relative flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white p-1.5 shadow-lg flex-shrink-0">
              <Image src="/images/logo-ipf.jpg" alt="IPF" width={40} height={40} style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <p className="text-white/60 text-[10px] tracking-[2px] uppercase">Igreja Presbiteriana</p>
              <h2 className="text-white font-bold text-base">FILADÉLFIA</h2>
            </div>
          </div>
          <button className="relative p-2.5 bg-white/10 rounded-2xl border border-white/20">
            <Bell size={20} className="text-white" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-400 rounded-full" />
          </button>
        </div>

        <div className="relative mt-5">
          <h1 className="text-white text-2xl font-bold leading-tight">Bem-vindo(a)! 🙏</h1>
          <p className="text-white/65 text-sm mt-1.5 leading-relaxed">
            Somos uma igreja cristã reformada que ama a Deus acima de todas as coisas e ao próximo como a si mesmo.
          </p>
        </div>
      </header>

      <div className="px-4 space-y-5 pt-5">

        {/* ── PRÓXIMO CULTO ───────────────────────────────── */}
        <div className="relative rounded-3xl overflow-hidden shadow-card"
          style={{ background: 'linear-gradient(135deg, #0F4D3A 0%, #2D7A5F 100%)' }}>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #fff, transparent)', transform: 'translate(20%, -20%)' }} />
          <div className="p-5 relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/70 text-xs font-medium tracking-wider uppercase">Próximo Culto</span>
            </div>
            <p className="text-white/80 text-sm mb-1">Domingo • 10h15</p>
            <h3 className="text-white text-2xl font-bold mb-4">Culto de Adoração</h3>
            <div className="flex items-center gap-3">
              <Link href="/cultos"
                className="flex-1 bg-white text-[#0F4D3A] font-semibold text-sm py-3 rounded-2xl text-center transition-all active:scale-95">
                Ver Todos os Cultos
              </Link>
              <Link href="/cultos#online"
                className="p-3 bg-white/10 border border-white/20 rounded-2xl transition-all active:scale-95">
                <Play size={18} className="text-white" fill="white" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── ACESSO RÁPIDO ───────────────────────────────── */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[#0F4D3A] font-bold text-base">Acesso Rápido</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {QUICK_ACCESS.map(({ href, icon: Icon, label, color, border }, i) => (
              <Link key={href} href={href}
                className={`bg-white rounded-2xl p-4 border ${border} shadow-sm card-hover flex items-center gap-3 animate-slide-up stagger-${Math.min(i+1, 8)}`}>
                <div className={`${color} p-2.5 rounded-xl flex-shrink-0`}>
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <span className="text-[#1A1A1A] font-medium text-sm leading-tight">{label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── FRASE INSTITUCIONAL ─────────────────────────── */}
        <div className="bg-white rounded-3xl p-5 shadow-card border border-gray-50">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#0F4D3A]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
              <Cross size={16} className="text-[#0F4D3A]" />
            </div>
            <div>
              <p className="text-[#0F4D3A] font-semibold text-base italic leading-relaxed">
                "Nossa missão é glorificar a Deus, fazendo discípulos de Jesus Cristo."
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
                {['Sola Scriptura','Sola Fide','Sola Gratia','Solus Christus','Soli Deo Gloria'].map(s => (
                  <span key={s} className="text-[10px] text-[#2D7A5F] font-semibold tracking-wide">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── ENDEREÇO ────────────────────────────────────── */}
        <Link href="/localizacao"
          className="bg-white rounded-2xl p-4 shadow-card border border-gray-50 flex items-center gap-3 card-hover">
          <div className="w-10 h-10 bg-[#0F4D3A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <MapPin size={20} className="text-[#0F4D3A]" />
          </div>
          <div className="flex-1">
            <p className="text-[#0F4D3A] font-semibold text-sm">Rua Vicente de Lima Cleto, 250</p>
            <p className="text-gray-400 text-xs">Nova Cidade · São Gonçalo – RJ</p>
          </div>
          <ChevronRight size={16} className="text-gray-300" />
        </Link>

      </div>

      <BottomNav />
    </div>
  )
}
