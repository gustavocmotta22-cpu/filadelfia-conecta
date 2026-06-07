'use client'
// app/admin/admins/page.tsx
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Plus, Shield } from 'lucide-react'

const ROLES = [
  { value: 'MASTER',    label: '🔑 Master',       desc: 'Acesso total + criar admins' },
  { value: 'PASTOR',    label: '✝ Pastor',         desc: 'Devocionais, avisos, agenda' },
  { value: 'COUNCIL',   label: '🏛 Conselho',      desc: 'Mensagens + pedidos privados' },
  { value: 'SECRETARY', label: '📋 Secretário',    desc: 'Avisos, agenda, membros' },
  { value: 'EDITOR',    label: '✏️ Editor',        desc: 'Conteúdo geral' },
]

export default function AdminsPage() {
  const router = useRouter()
  const [me, setMe]           = useState<any>(null)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm]        = useState({ firstName: '', lastName: '', email: '', password: '', role: 'EDITOR' })
  const [saved, setSaved]      = useState('')

  const isMaster = me?.role === 'MASTER'

  useEffect(() => {
    const u = localStorage.getItem('admin_user')
    if (!u) { router.push('/admin/login'); return }
    setMe(JSON.parse(u))
  }, [router])

  function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    setSaved(`✅ ADM ${form.firstName} ${form.lastName} criado por ${me?.fullName}`)
    setShowForm(false)
    setForm({ firstName: '', lastName: '', email: '', password: '', role: 'EDITOR' })
    setTimeout(() => setSaved(''), 4000)
  }

  return (
    <div className="min-h-screen bg-[#F5F6F7]">
      <header className="bg-[#0F4D3A] px-4 py-4 flex items-center gap-3">
        <Link href="/admin/dashboard" className="text-white/70 p-2 -ml-2"><ArrowLeft size={20} /></Link>
        <h1 className="text-white font-bold text-lg">Administradores</h1>
      </header>

      <div className="px-4 pt-5 space-y-4">

        {/* Info de auditoria */}
        <div className="bg-[#0F4D3A]/5 border border-[#0F4D3A]/10 rounded-2xl p-4 flex gap-3">
          <Shield size={20} className="text-[#0F4D3A] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-[#0F4D3A] font-semibold text-sm">Rastreabilidade de Edições</p>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">
              Cada conteúdo criado aparece identificado com o nome do admin.
              Você aparecerá como <strong className="text-[#0F4D3A]">{me?.fullName}</strong>.
            </p>
          </div>
        </div>

        {saved && <div className="bg-green-50 border border-green-100 text-green-700 text-sm rounded-xl p-3">{saved}</div>}

        {/* Admins atuais */}
        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-50">
            <p className="text-[#0F4D3A] font-bold text-sm">Administradores Ativos</p>
            {isMaster && (
              <button onClick={() => setShowForm(!showForm)}
                className="bg-[#0F4D3A] text-white text-xs font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1 active:scale-95">
                <Plus size={14} /> Novo
              </button>
            )}
          </div>
          {[
            { first: 'Administrador', last: 'Master', email: 'admin@filadelfia.app', role: 'MASTER' },
            { first: 'Pastor',       last: 'Rafael',  email: 'pastor@filadelfia.app', role: 'PASTOR' },
          ].map(a => {
            const rl = ROLES.find(r => r.value === a.role)
            return (
              <div key={a.email} className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-50 last:border-0">
                <div className="w-10 h-10 bg-[#0F4D3A] text-white rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {a.first[0]}{a.last[0]}
                </div>
                <div className="flex-1">
                  <p className="text-[#1A1A1A] font-semibold text-sm">{a.first} {a.last}</p>
                  <p className="text-gray-400 text-xs">{a.email}</p>
                  <p className="text-[#2D7A5F] text-[10px] font-semibold mt-0.5">
                    Aparece como: ADM {a.first} {a.last}
                  </p>
                </div>
                <span className="text-xs bg-[#0F4D3A]/10 text-[#0F4D3A] px-2 py-0.5 rounded-lg font-semibold">
                  {rl?.label}
                </span>
              </div>
            )
          })}
        </div>

        {/* Formulário novo admin */}
        {isMaster && showForm && (
          <div className="bg-white rounded-2xl shadow-card p-5">
            <p className="text-[#0F4D3A] font-bold text-sm mb-1">Criar Novo Administrador</p>
            <p className="text-gray-400 text-xs mb-4">Criado por: <strong className="text-[#0F4D3A]">{me?.fullName}</strong></p>
            <form onSubmit={handleCreate} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-[#0F4D3A] uppercase tracking-wide block mb-1">Nome *</label>
                  <input value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})}
                    placeholder="Gustavo" required
                    className="w-full border border-gray-100 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#0F4D3A]" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-[#0F4D3A] uppercase tracking-wide block mb-1">Sobrenome *</label>
                  <input value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})}
                    placeholder="Motta" required
                    className="w-full border border-gray-100 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#0F4D3A]" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-[#0F4D3A] uppercase tracking-wide block mb-1">E-mail *</label>
                <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="nome@filadelfia.app" required
                  className="w-full border border-gray-100 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#0F4D3A]" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-[#0F4D3A] uppercase tracking-wide block mb-1">Senha inicial *</label>
                <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})}
                  placeholder="Mínimo 8 caracteres" required minLength={8}
                  className="w-full border border-gray-100 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#0F4D3A]" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-[#0F4D3A] uppercase tracking-wide block mb-2">Perfil *</label>
                <div className="space-y-2">
                  {ROLES.map(r => (
                    <label key={r.value}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${form.role === r.value ? 'border-[#0F4D3A] bg-[#0F4D3A]/5' : 'border-gray-100'}`}>
                      <input type="radio" name="role" value={r.value} checked={form.role === r.value}
                        onChange={e => setForm({...form, role: e.target.value})} className="accent-[#0F4D3A]" />
                      <div>
                        <p className="text-sm font-semibold text-[#1A1A1A]">{r.label}</p>
                        <p className="text-xs text-gray-400">{r.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {form.firstName && form.lastName && (
                <div className="bg-[#0F4D3A]/5 rounded-xl p-3 border border-[#0F4D3A]/10">
                  <p className="text-xs text-[#0F4D3A]">Aparecerá como: <strong>ADM {form.firstName} {form.lastName}</strong></p>
                </div>
              )}
              <div className="flex gap-3">
                <button type="submit"
                  className="flex-1 bg-[#0F4D3A] text-white font-semibold py-3 rounded-xl text-sm active:scale-95 transition-all">
                  ✅ Criar Admin
                </button>
                <button type="button" onClick={() => setShowForm(false)}
                  className="px-5 bg-gray-100 text-gray-500 font-semibold py-3 rounded-xl text-sm active:scale-95">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {!isMaster && (
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-xs text-amber-700">
            ⚠️ Apenas o Administrador Master pode criar novos administradores.
          </div>
        )}
      </div>
    </div>
  )
}
