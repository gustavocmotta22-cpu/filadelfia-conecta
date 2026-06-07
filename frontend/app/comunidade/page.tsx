'use client'
// app/comunidade/page.tsx
import PageHeader from '@/components/layout/PageHeader'
import BottomNav from '@/components/layout/BottomNav'
import { ChevronRight } from 'lucide-react'

const MINISTERIOS = [
  { emoji: '👩', nome: 'SAF', titulo: 'Sociedade Auxiliadora Feminina', desc: 'Serviço, comunhão e apoio entre as irmãs da igreja.', cor: 'bg-rose-50 border-rose-100 text-rose-600' },
  { emoji: '👨', nome: 'UPH', titulo: 'União Presbiteriana dos Homens', desc: 'Fraternidade masculina para crescimento espiritual.', cor: 'bg-blue-50 border-blue-100 text-blue-600' },
  { emoji: '🎯', nome: 'UMP', titulo: 'União da Mocidade Presbiteriana', desc: 'Jovens comprometidos com o evangelho.', cor: 'bg-purple-50 border-purple-100 text-purple-600' },
  { emoji: '🌱', nome: 'UPA', titulo: 'União Presbiteriana dos Adolescentes', desc: 'Formação cristã para adolescentes.', cor: 'bg-green-50 border-green-100 text-green-600' },
  { emoji: '⭐', nome: 'UCP', titulo: 'União das Crianças Presbiterianas', desc: 'Educação cristã para crianças.', cor: 'bg-amber-50 border-amber-100 text-amber-600' },
  { emoji: '📖', nome: 'EBD', titulo: 'Escola Bíblica Dominical', desc: 'Estudo sistemático da Palavra para todas as idades.', cor: 'bg-teal-50 border-teal-100 text-teal-600' },
  { emoji: '🎵', nome: 'Coral', titulo: 'Ministério de Louvor e Música', desc: 'Adoração por meio da música e do canto.', cor: 'bg-indigo-50 border-indigo-100 text-indigo-600' },
  { emoji: '🌍', nome: 'Missões', titulo: 'Ministério de Missões', desc: 'Evangelismo local e apoio a missionários.', cor: 'bg-orange-50 border-orange-100 text-orange-600' },
]

export default function ComunidadePage() {
  return (
    <div className="min-h-screen bg-[#F5F6F7] pb-24">
      <div className="bg-[#0F4D3A] px-4 pt-12 pb-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #fff, transparent 60%)' }} />
        <p className="text-white/60 text-xs tracking-wider uppercase relative">Nossa</p>
        <h1 className="text-white text-2xl font-bold relative">Comunidade</h1>
        <p className="text-white/60 text-sm mt-1 relative">Ministérios e sociedades internas</p>
      </div>

      <div className="px-4 pt-5 space-y-3">
        {MINISTERIOS.map(({ emoji, nome, titulo, desc, cor }) => (
          <div key={nome} className={`bg-white rounded-2xl p-4 border shadow-sm card-hover flex items-center gap-3 ${cor.split(' ')[2]}`}>
            <div className={`w-12 h-12 ${cor.split(' ')[0]} ${cor.split(' ')[1]} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 border`}>
              {emoji}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold ${cor.split(' ')[2]}`}>{nome}</span>
              </div>
              <p className="text-[#1A1A1A] font-semibold text-sm">{titulo}</p>
              <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{desc}</p>
            </div>
            <ChevronRight size={16} className="text-gray-300" />
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  )
}
