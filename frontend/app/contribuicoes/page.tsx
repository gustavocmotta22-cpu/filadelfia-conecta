'use client'
// app/contribuicoes/page.tsx
import { useState } from 'react'
import PageHeader from '@/components/layout/PageHeader'
import BottomNav from '@/components/layout/BottomNav'
import { Copy, CheckCircle, Heart, QrCode } from 'lucide-react'

export default function ContribuicoesPage() {
  const [copiado, setCopiado] = useState(false)
  const PIX_KEY = 'filadelfia@ipf.org.br' // substituir pela chave real

  function copiarPix() {
    navigator.clipboard?.writeText(PIX_KEY).then(() => {
      setCopiado(true)
      setTimeout(() => setCopiado(false), 3000)
    })
  }

  return (
    <div className="min-h-screen bg-[#F5F6F7] pb-24">
      <PageHeader title="Contribuições" dark />

      <div className="bg-[#0F4D3A] px-5 pb-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #fff, transparent 60%)' }} />
        <p className="text-white/60 text-sm relative leading-relaxed">
          "Cada um dê conforme propôs no seu coração, não com tristeza ou por necessidade; porque Deus ama ao que dá com alegria." — 2 Coríntios 9:7
        </p>
      </div>

      <div className="px-4 pt-5 space-y-4">

        {/* QR Code */}
        <div className="bg-white rounded-3xl p-6 shadow-card text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <QrCode size={20} className="text-[#0F4D3A]" />
            <h3 className="text-[#0F4D3A] font-bold">QR Code PIX</h3>
          </div>
          {/* QR Code placeholder — em produção gerar QR real */}
          <div className="w-48 h-48 mx-auto bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center mb-4">
            <QrCode size={64} className="text-[#0F4D3A]/30 mb-2" />
            <p className="text-xs text-gray-400">QR Code PIX</p>
            <p className="text-xs text-gray-300">Configure no painel admin</p>
          </div>
          <p className="text-gray-400 text-xs">Aponte a câmera do celular para o QR Code</p>
        </div>

        {/* Chave PIX */}
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <p className="text-[#0F4D3A] font-bold text-sm mb-3">Chave PIX</p>
          <div className="bg-[#F5F6F7] rounded-xl p-3.5 flex items-center gap-3">
            <div className="flex-1">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">E-mail</p>
              <p className="text-[#0F4D3A] font-semibold text-sm">{PIX_KEY}</p>
            </div>
            <button onClick={copiarPix}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all active:scale-95 ${copiado ? 'bg-green-500 text-white' : 'bg-[#0F4D3A] text-white'}`}>
              {copiado ? <><CheckCircle size={16} /> Copiado!</> : <><Copy size={16} /> Copiar</>}
            </button>
          </div>
        </div>

        {/* Beneficiário */}
        <div className="bg-[#0F4D3A]/5 border border-[#0F4D3A]/10 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <Heart size={18} className="text-[#0F4D3A] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[#0F4D3A] font-semibold text-sm">Como sua oferta é usada</p>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                As contribuições sustentam o ministério da Igreja Presbiteriana Filadélfia, incluindo missões, atividades sociais, manutenção e evangelismo.
              </p>
            </div>
          </div>
        </div>

        {/* Dados bancários */}
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <p className="text-[#0F4D3A] font-bold text-sm mb-3">Dados para Transferência</p>
          <div className="space-y-2 text-sm">
            {[
              ['Beneficiário', 'Igreja Presbiteriana Filadélfia'],
              ['CNPJ',         'Configurar no painel admin'],
              ['Banco',        'Configurar no painel admin'],
              ['Agência',      'Configurar no painel admin'],
              ['Conta',        'Configurar no painel admin'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-gray-400 text-xs w-28 flex-shrink-0">{label}</span>
                <span className="text-[#1A1A1A] font-medium text-xs">{value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
      <BottomNav />
    </div>
  )
}
