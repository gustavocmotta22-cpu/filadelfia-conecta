'use client'
// app/admin/dashboard/page.tsx
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface Admin { firstName: string; lastName: string; role: string; fullName: string }

const ROLE_LABEL: Record<string, string> = {
  MASTER: '🔑 Master', PASTOR: '✝ Pastor', COUNCIL: '🏛 Conselho',
  SECRETARY: '📋 Secretário', EDITOR: '✏️ Editor',
}

const MENU = [
  { href: '/admin/devocionais', icon: '📖', label: 'Devocionais' },
  { href: '/admin/avisos',      icon: '📢', label: 'Avisos' },
  { href: '/admin/agenda',      icon: '📅', label: 'Agenda' },
  { href: '/admin/oracao',      icon: '🙏', label: 'Orações' },
  { href: '/admin/admins',      icon: '👥', label: 'Admins' },
  { href: '/admin/config',      icon: '⚙️', label: 'Config' },
]

export default function DashboardPage() {
  const router = useRouter()
  const [admin, setAdmin] = useState<Admin | null>(null)

  useEffect(() => {
    const u = localStorage.getItem('admin_user')
    if (!u) { router.push('/admin/login'); return }
    setAdmin(JSON.parse(u))
  }, [router])

  function logout() {
    localStorage.removeItem('admin_user')
    router.push('/admin/login')
  }

  if (!admin) return <div className="min-h-screen bg-[#0F4D3A] flex items-center justify-center"><div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" /></div>

  return (
    <div className="min-h-screen bg-[#F5F6F7]">

      {/* Header */}
      <header className="bg-[#0F4D3A] px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-xl p-1">
            <Image src="/images/logo-ipf.jpg" alt="IPF" width={28} height={28} style={{ objectFit: 'contain' }} />
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">Filadélfia Conecta</p>
            <p className="text-white/50 text-[10px]">Painel Admin</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#2D7A5F] text-white text-xs font-semibold px-2.5 py-1 rounded-lg">{ROLE_LABEL[admin.role]}</div>
          <button onClick={logout} className="text-white/60 text-xs p-2">Sair</button>
        </div>
      </header>

      <div className="px-4 pt-5 space-y-5">

        {/* Saudação */}
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <p className="text-[#0F4D3A] font-bold text-lg">Olá, {admin.firstName}! 👋</p>
          <p className="text-gray-400 text-xs mt-1">
            Suas edições serão registradas como{' '}
            <span className="font-semibold text-[#0F4D3A]">{admin.fullName}</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Membros',     value: '247', delta: '↑ 12',  bg: 'bg-[#0F4D3A]/5 border-[#0F4D3A]/10' },
            { label: 'Devocionais', value: '18',  delta: '3 agend.', bg: 'bg-amber-50 border-amber-100' },
            { label: 'Orações',     value: '31',  delta: '8 pend.',  bg: 'bg-rose-50 border-rose-100' },
            { label: 'Avisos',      value: '5',   delta: 'ativos',   bg: 'bg-blue-50 border-blue-100' },
          ].map(s => (
            <div key={s.label} className={`${s.bg} border rounded-2xl p-4`}>
              <p className="text-[#0F4D3A] text-2xl font-bold">{s.value}</p>
              <p className="text-gray-500 text-xs">{s.label}</p>
              <p className="text-green-500 text-[10px] font-semibold mt-1">{s.delta}</p>
            </div>
          ))}
        </div>

        {/* Menu rápido */}
        <div>
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Gerenciar</p>
          <div className="grid grid-cols-3 gap-3">
            {MENU.map(({ href, icon, label }) => (
              <Link key={href} href={href}
                className="bg-white rounded-2xl p-4 shadow-card flex flex-col items-center gap-2 card-hover">
                <span className="text-2xl">{icon}</span>
                <span className="text-[#0F4D3A] font-semibold text-xs text-center">{label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Upload logo */}
        <LogoUpload adminName={admin.fullName} />

        {/* Link app */}
        <Link href="/home" className="bg-[#0F4D3A] text-white rounded-2xl py-3.5 flex items-center justify-center gap-2 font-semibold text-sm active:scale-95 transition-all">
          ↗ Ver App ao Vivo
        </Link>

      </div>
    </div>
  )
}

function LogoUpload({ adminName }: { adminName: string }) {
  const [preview, setPreview] = useState('/images/logo-ipf.jpg')
  const [ok, setOk] = useState(false)

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]; if (!f) return
    const r = new FileReader()
    r.onload = ev => {
      const src = ev.target?.result as string
      localStorage.setItem('ipf_logo_custom', src)
      localStorage.setItem('ipf_logo_by', adminName)
      setPreview(src); setOk(true)
      setTimeout(() => setOk(false), 3000)
    }
    r.readAsDataURL(f)
  }

  return (
    <div className="bg-white rounded-2xl p-4 shadow-card border border-[#0F4D3A]/10">
      <p className="text-[#0F4D3A] font-bold text-sm mb-3">🖼️ Logo da Igreja</p>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 border-2 border-[#0F4D3A]/20 rounded-xl p-1.5">
          <Image src={preview} alt="Logo" width={52} height={52} style={{ objectFit: 'contain', width: 52, height: 52 }} />
        </div>
        <div className="flex-1">
          <label className="bg-[#0F4D3A] text-white text-xs font-semibold px-4 py-2.5 rounded-xl cursor-pointer inline-block active:scale-95 transition-all">
            📁 Alterar Logo
            <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
          </label>
          {ok && <p className="text-green-500 text-xs mt-1.5 font-semibold">✅ Salvo por {adminName}</p>}
        </div>
      </div>
    </div>
  )
}
