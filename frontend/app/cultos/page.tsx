'use client'
// app/cultos/page.tsx
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import BottomNav from '@/components/layout/BottomNav'
import { MapPin, ExternalLink, Clock, Users } from 'lucide-react'

const CULTOS = [
  {
    dia: 'Domingo', abrev: 'DOM',
    servicos: [
      { hora: '09h00', nome: 'Escola Bíblica Dominical', desc: 'Estudo bíblico para todas as idades', icone: '📖' },
      { hora: '10h15', nome: 'Culto de Adoração',        desc: 'Culto principal da manhã',            icone: '✝️' },
      { hora: '18h30', nome: 'Culto de Adoração',        desc: 'Culto da tarde/noite',                icone: '✝️' },
    ]
  },
  {
    dia: 'Terça-feira', abrev: 'TER',
    servicos: [
      { hora: '19h00', nome: 'Culto de Oração', desc: 'Reunião de oração e intercessão', icone: '🙏' },
    ]
  },
  {
    dia: 'Quinta-feira', abrev: 'QUI',
    servicos: [
      { hora: '19h00', nome: 'Estudo Bíblico', desc: 'Aprofundamento na Palavra de Deus', icone: '📚' },
    ]
  },
  {
    dia: 'Sábado', abrev: 'SÁB',
    servicos: [
      { hora: '08h00', nome: 'Consagração', desc: 'Momento de oração e consagração', icone: '🕊️' },
    ]
  },
]

export default function CultosPage() {
  return (
    <div className="min-h-screen bg-[#F5F6F7] pb-24">
      <div className="bg-[#0F4D3A] px-4 pt-12 pb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #fff, transparent)', transform: 'translate(30%,-30%)' }} />
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/60 text-xs tracking-wider uppercase">Programação Semanal</span>
        </div>
        <h1 className="text-white text-2xl font-bold relative">Cultos & Reuniões</h1>
        <p className="text-white/60 text-sm mt-1 relative">Rua Vicente de Lima Cleto, 250 — São Gonçalo</p>
      </div>

      <div className="px-4 pt-5 space-y-4">
        {CULTOS.map(({ dia, abrev, servicos }) => (
          <div key={dia} className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-50 flex items-center gap-2">
              <div className="bg-[#0F4D3A] text-white text-xs font-bold px-2.5 py-1 rounded-lg">{abrev}</div>
              <h3 className="text-[#0F4D3A] font-semibold text-sm">{dia}</h3>
            </div>
            <div className="divide-y divide-gray-50">
              {servicos.map((s, i) => (
                <div key={i} className="px-4 py-3.5 flex items-start gap-3">
                  <span className="text-2xl">{s.icone}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-[#2D7A5F]" />
                      <span className="text-[#2D7A5F] font-bold text-sm">{s.hora}</span>
                    </div>
                    <p className="text-[#1A1A1A] font-semibold text-sm mt-0.5">{s.nome}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Botões de ação */}
        <div className="grid grid-cols-2 gap-3 pb-2">
          <Link href="/localizacao"
            className="bg-[#0F4D3A] text-white rounded-2xl py-3.5 flex items-center justify-center gap-2 font-semibold text-sm active:scale-95 transition-all">
            <MapPin size={18} />
            Como Chegar
          </Link>
          <a href="https://youtube.com" target="_blank"
            className="bg-white text-[#0F4D3A] border border-[#0F4D3A]/20 rounded-2xl py-3.5 flex items-center justify-center gap-2 font-semibold text-sm active:scale-95 transition-all">
            <ExternalLink size={18} />
            Assistir Online
          </a>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
