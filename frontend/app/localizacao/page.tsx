'use client'
// app/localizacao/page.tsx
import PageHeader from '@/components/layout/PageHeader'
import BottomNav from '@/components/layout/BottomNav'
import { MapPin, Navigation, Phone, Clock, ExternalLink } from 'lucide-react'

export default function LocalizacaoPage() {
  const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Rua+Vicente+de+Lima+Cleto+250+Nova+Cidade+São+Gonçalo+RJ'

  return (
    <div className="min-h-screen bg-[#F5F6F7] pb-24">
      <PageHeader title="Localização" dark />

      <div className="px-4 pt-5 space-y-4">

        {/* Mapa embed */}
        <div className="bg-white rounded-3xl shadow-card overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675!2d-43.0!3d-22.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUyJzEyLjAiUyA0M8KwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#0F4D3A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-[#0F4D3A]" />
              </div>
              <div>
                <p className="text-[#0F4D3A] font-bold text-base">Igreja Presbiteriana Filadélfia</p>
                <p className="text-gray-500 text-sm mt-0.5">Rua Vicente de Lima Cleto, 250</p>
                <p className="text-gray-500 text-sm">Nova Cidade — São Gonçalo, RJ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botão Google Maps */}
        <a href={MAPS_URL} target="_blank"
          className="bg-[#0F4D3A] text-white rounded-2xl py-4 flex items-center justify-center gap-2 font-semibold active:scale-95 transition-all shadow-lg"
          style={{ boxShadow: '0 8px 24px rgba(15,77,58,0.3)' }}>
          <Navigation size={20} />
          Abrir no Google Maps
          <ExternalLink size={16} />
        </a>

        {/* Horários */}
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={18} className="text-[#0F4D3A]" />
            <h3 className="text-[#0F4D3A] font-bold text-sm">Horários de Funcionamento</h3>
          </div>
          <div className="space-y-2">
            {[
              ['Domingo',       '09h00 – 21h00'],
              ['Terça-feira',   '19h00 – 21h00'],
              ['Quinta-feira',  '19h00 – 21h00'],
              ['Sábado',        '08h00 – 10h00'],
            ].map(([dia, hora]) => (
              <div key={dia} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <span className="text-gray-600 text-sm">{dia}</span>
                <span className="text-[#0F4D3A] font-semibold text-sm">{hora}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transporte */}
        <div className="bg-white rounded-2xl p-5 shadow-card">
          <h3 className="text-[#0F4D3A] font-bold text-sm mb-3">🚌 Como Chegar</h3>
          <div className="space-y-2 text-sm text-gray-500">
            <p>• Ônibus: linhas com destino a Nova Cidade, São Gonçalo</p>
            <p>• Metro: estação mais próxima + ônibus</p>
            <p>• Carro: estacionamento disponível nas proximidades</p>
          </div>
        </div>

      </div>
      <BottomNav />
    </div>
  )
}
