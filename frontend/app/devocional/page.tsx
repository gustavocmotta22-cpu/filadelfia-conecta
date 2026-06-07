'use client'
// app/devocional/page.tsx
import PageHeader from '@/components/layout/PageHeader'
import BottomNav from '@/components/layout/BottomNav'
import { Share2, Bookmark, BookOpen } from 'lucide-react'

export default function DevocionalPage() {
  const hoje = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

  function share() {
    if (navigator.share) {
      navigator.share({ title: 'Devocional — IPF', text: '"Confie no Senhor de todo o seu coração." — Provérbios 3:5', url: window.location.href })
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F6F7] pb-24">
      <PageHeader title="Devocional do Dia" showShare onShare={share} dark />

      {/* Cover */}
      <div className="bg-[#0F4D3A] px-5 pb-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #fff, transparent 60%)' }} />
        <p className="text-white/50 text-xs capitalize relative">{hoje}</p>
        <h2 className="text-white text-xl font-bold mt-1 relative leading-snug">
          Confiança em Deus em Todos os Caminhos
        </h2>
        <div className="mt-3 bg-white/10 rounded-2xl p-4 border border-white/20 relative">
          <p className="text-white text-base italic leading-relaxed">
            "Confie no Senhor de todo o seu coração e não se apóie em seu próprio entendimento; reconheça-o em todos os seus caminhos, e ele aplainará as suas veredas."
          </p>
          <p className="text-white/60 text-sm font-semibold mt-2">Provérbios 3:5-6</p>
        </div>
      </div>

      <div className="px-4 pt-5 space-y-4">

        {/* Reflexão */}
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-amber-50 rounded-lg flex items-center justify-center">
              <BookOpen size={14} className="text-amber-600" />
            </div>
            <h3 className="text-[#0F4D3A] font-bold text-sm uppercase tracking-wide">Reflexão</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Vivemos em um mundo que nos pede para depender de nossa própria inteligência, experiências e capacidades. Mas Deus nos convida a uma vida radicalmente diferente — uma vida de confiança plena n'Ele.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mt-3">
            "Confiar no Senhor de todo o coração" implica uma entrega completa, sem reservas. Não é uma confiança parcial, reservando uma parte para nós mesmos. É uma confiança que reconhece que Deus é soberano sobre cada detalhe da nossa vida.
          </p>
        </div>

        {/* Aplicação */}
        <div className="bg-[#0F4D3A]/5 border border-[#0F4D3A]/10 rounded-2xl p-5">
          <h3 className="text-[#0F4D3A] font-bold text-sm uppercase tracking-wide mb-3">✋ Aplicação Prática</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Hoje, quando você se deparar com uma decisão difícil ou uma situação que está além do seu controle, pause e ore: "Senhor, confio em Ti". Pratique reconhecê-Lo em cada escolha que fizer.
          </p>
        </div>

        {/* Oração */}
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <h3 className="text-[#0F4D3A] font-bold text-sm uppercase tracking-wide mb-3">🙏 Oração</h3>
          <p className="text-gray-500 text-sm leading-relaxed italic">
            "Pai celestial, perdoa-me pelas vezes em que me apoiei em meu próprio entendimento. Hoje, escolho confiar em Ti completamente. Guia os meus passos e faça-me reconhecer Tua presença em cada momento. Em nome de Jesus, amém."
          </p>
        </div>

        {/* Compartilhar */}
        <button onClick={share}
          className="w-full bg-[#0F4D3A] text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all">
          <Share2 size={18} />
          Compartilhar Devocional
        </button>
      </div>

      <BottomNav />
    </div>
  )
}
