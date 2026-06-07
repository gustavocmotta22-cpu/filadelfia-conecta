'use client'
// app/oracao/page.tsx
import { useState } from 'react'
import PageHeader from '@/components/layout/PageHeader'
import BottomNav from '@/components/layout/BottomNav'
import { Heart, Lock, Globe, Send, CheckCircle } from 'lucide-react'

const TIPOS = [
  { value: 'oracao',         label: '🙏 Oração',          desc: 'Pedido de intercessão' },
  { value: 'visita',         label: '🏠 Visita Pastoral',  desc: 'Solicitar visita do pastor' },
  { value: 'aconselhamento', label: '💬 Aconselhamento',   desc: 'Conversa com o pastor' },
  { value: 'gracas',         label: '🎉 Ação de Graças',   desc: 'Compartilhar uma bênção' },
]

export default function OracaoPage() {
  const [nome,       setNome]       = useState('')
  const [pedido,     setPedido]     = useState('')
  const [tipo,       setTipo]       = useState('oracao')
  const [sigiloso,   setSigiloso]   = useState(false)
  const [enviado,    setEnviado]    = useState(false)
  const [enviando,   setEnviando]   = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!pedido.trim()) return
    setEnviando(true)
    await new Promise(r => setTimeout(r, 1200))
    setEnviando(false)
    setEnviado(true)
  }

  if (enviado) return (
    <div className="min-h-screen bg-[#F5F6F7] flex flex-col">
      <PageHeader title="Pedido de Oração" dark />
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 bg-[#0F4D3A]/10 rounded-full flex items-center justify-center mb-5">
          <CheckCircle size={40} className="text-[#0F4D3A]" />
        </div>
        <h2 className="text-[#0F4D3A] font-bold text-2xl mb-2">Pedido Enviado!</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Seu pedido foi recebido. Estaremos orando por você. "A oração do justo pode muito em seus efeitos." — Tiago 5:16
        </p>
        <button onClick={() => { setEnviado(false); setNome(''); setPedido(''); }}
          className="bg-[#0F4D3A] text-white font-semibold px-8 py-3.5 rounded-2xl active:scale-95 transition-all">
          Fazer Novo Pedido
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#F5F6F7] pb-24">
      <PageHeader title="Pedido de Oração" dark />

      {/* Versículo */}
      <div className="bg-[#0F4D3A] px-5 pb-5">
        <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
          <p className="text-white text-sm italic leading-relaxed text-center">
            "Não andeis ansiosos de coisa alguma; antes em tudo sejam os vossos pedidos conhecidos diante de Deus pela oração e súplica, com ações de graças."
          </p>
          <p className="text-white/60 text-xs text-center mt-1.5 font-medium">Filipenses 4:6</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-4 pt-5 space-y-4">

        {/* Tipo */}
        <div>
          <label className="text-[#0F4D3A] font-semibold text-sm block mb-2">Tipo do Pedido</label>
          <div className="grid grid-cols-2 gap-2">
            {TIPOS.map(t => (
              <button key={t.value} type="button" onClick={() => setTipo(t.value)}
                className={`p-3 rounded-2xl border text-left transition-all ${tipo === t.value ? 'bg-[#0F4D3A] border-[#0F4D3A]' : 'bg-white border-gray-100'}`}>
                <p className={`text-sm font-semibold ${tipo === t.value ? 'text-white' : 'text-[#1A1A1A]'}`}>{t.label}</p>
                <p className={`text-xs mt-0.5 ${tipo === t.value ? 'text-white/70' : 'text-gray-400'}`}>{t.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Nome */}
        <div>
          <label className="text-[#0F4D3A] font-semibold text-sm block mb-2">Seu Nome (opcional)</label>
          <input
            value={nome} onChange={e => setNome(e.target.value)}
            placeholder="Como podemos te chamar?"
            className="w-full bg-white border border-gray-100 rounded-2xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#0F4D3A] focus:ring-1 focus:ring-[#0F4D3A]/20 transition-all"
          />
        </div>

        {/* Pedido */}
        <div>
          <label className="text-[#0F4D3A] font-semibold text-sm block mb-2">Seu Pedido *</label>
          <textarea
            value={pedido} onChange={e => setPedido(e.target.value)}
            placeholder="Escreva aqui o seu pedido de oração. Deus ouve cada palavra do seu coração..."
            rows={5}
            required
            className="w-full bg-white border border-gray-100 rounded-2xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#0F4D3A] focus:ring-1 focus:ring-[#0F4D3A]/20 transition-all resize-none"
          />
        </div>

        {/* Sigiloso */}
        <button type="button" onClick={() => setSigiloso(!sigiloso)}
          className={`w-full flex items-center gap-3 p-4 rounded-2xl border transition-all ${sigiloso ? 'bg-[#0F4D3A]/5 border-[#0F4D3A]/20' : 'bg-white border-gray-100'}`}>
          <div className={`p-2.5 rounded-xl ${sigiloso ? 'bg-[#0F4D3A]/10 text-[#0F4D3A]' : 'bg-gray-50 text-gray-400'}`}>
            {sigiloso ? <Lock size={18} /> : <Globe size={18} />}
          </div>
          <div className="flex-1 text-left">
            <p className={`font-semibold text-sm ${sigiloso ? 'text-[#0F4D3A]' : 'text-[#1A1A1A]'}`}>
              {sigiloso ? '🔒 Pedido Sigiloso' : '🌐 Pedido Público'}
            </p>
            <p className="text-gray-400 text-xs mt-0.5">
              {sigiloso ? 'Apenas o pastor e o conselho verão' : 'Visível para a comunidade intercessora'}
            </p>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${sigiloso ? 'bg-[#0F4D3A] border-[#0F4D3A]' : 'border-gray-300'}`}>
            {sigiloso && <div className="w-2 h-2 bg-white rounded-full" />}
          </div>
        </button>

        {/* Botão enviar */}
        <button type="submit" disabled={enviando || !pedido.trim()}
          className="w-full bg-[#0F4D3A] disabled:opacity-50 text-white font-bold text-base py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg"
          style={{ boxShadow: '0 8px 24px rgba(15,77,58,0.3)' }}>
          {enviando ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Heart size={20} fill="white" />
              Enviar Pedido de Oração
            </>
          )}
        </button>
      </form>
      <BottomNav />
    </div>
  )
}
