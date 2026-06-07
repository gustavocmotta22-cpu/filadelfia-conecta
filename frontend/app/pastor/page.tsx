'use client'
// app/pastor/page.tsx
import Image from 'next/image'
import PageHeader from '@/components/layout/PageHeader'
import BottomNav from '@/components/layout/BottomNav'
import { MessageCircle, Phone, Home, Heart, ExternalLink } from 'lucide-react'

const ACOES = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    desc: 'Envie uma mensagem direta',
    color: 'bg-green-50 text-green-600 border-green-100',
    href: 'https://wa.me/5521987361216?text=Olá%20Pastor%20Rafael,%20gostaria%20de%20falar%20com%20o%20senhor.',
    external: true,
  },
  {
    icon: Phone,
    label: 'Ligar',
    desc: 'Fale diretamente por telefone',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    href: 'tel:+5521987361216',
    external: false,
  },
  {
    icon: Home,
    label: 'Solicitar Visita',
    desc: 'Peça uma visita pastoral',
    color: 'bg-amber-50 text-amber-600 border-amber-100',
    href: 'https://wa.me/5521987361216?text=Pastor%20Rafael,%20gostaria%20de%20solicitar%20uma%20visita%20pastoral.',
    external: true,
  },
  {
    icon: Heart,
    label: 'Aconselhamento',
    desc: 'Solicite aconselhamento pastoral',
    color: 'bg-rose-50 text-rose-600 border-rose-100',
    href: 'https://wa.me/5521987361216?text=Pastor%20Rafael,%20gostaria%20de%20solicitar%20um%20aconselhamento%20pastoral.',
    external: true,
  },
]

export default function PastorPage() {
  return (
    <div className="min-h-screen bg-[#F5F6F7] pb-24">
      <PageHeader title="Fale com o Pastor" dark />

      <div className="px-4 pt-6 space-y-5">

        {/* Card do Pastor */}
        <div className="bg-white rounded-3xl shadow-card overflow-hidden">
          <div className="bg-[#0F4D3A] h-24 relative">
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #fff 0%, transparent 60%)' }} />
          </div>
          <div className="px-5 pb-5 -mt-12">
            <div className="flex items-end gap-4 mb-4">
              <div className="w-24 h-24 rounded-2xl border-4 border-white shadow-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/images/pastor-rafael.jpg"
                  alt="Pastor Rafael Ribeiro"
                  width={96}
                  height={96}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="pb-1">
                <h2 className="text-[#0F4D3A] font-bold text-xl">Rev. Rafael Ribeiro</h2>
                <p className="text-gray-500 text-sm">Pastor Titular</p>
                <p className="text-[#2D7A5F] text-xs font-medium mt-0.5">Igreja Presbiteriana Filadélfia</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              "O pastor está disponível para ouvir, aconselhar e interceder por cada membro e visitante da nossa comunidade. Entre em contato a qualquer momento."
            </p>
          </div>
        </div>

        {/* Ações */}
        <div>
          <h3 className="text-[#0F4D3A] font-bold text-base mb-3">Como Posso Ajudar?</h3>
          <div className="space-y-3">
            {ACOES.map(({ icon: Icon, label, desc, color, href, external }) => (
              <a key={label} href={href} target={external ? '_blank' : undefined}
                className={`bg-white rounded-2xl p-4 border shadow-sm flex items-center gap-3 card-hover ${color.split(' ')[2]}`}>
                <div className={`${color.split(' ')[0]} ${color.split(' ')[1]} p-3 rounded-xl flex-shrink-0`}>
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div className="flex-1">
                  <p className="text-[#1A1A1A] font-semibold text-sm">{label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                </div>
                {external && <ExternalLink size={14} className="text-gray-300" />}
              </a>
            ))}
          </div>
        </div>

        {/* Versículo */}
        <div className="bg-[#0F4D3A]/5 border border-[#0F4D3A]/10 rounded-2xl p-4">
          <p className="text-[#0F4D3A] text-sm italic leading-relaxed text-center">
            "Cuidai do rebanho de Deus que está entre vós."
          </p>
          <p className="text-[#2D7A5F] text-xs font-semibold text-center mt-1">1 Pedro 5:2</p>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
