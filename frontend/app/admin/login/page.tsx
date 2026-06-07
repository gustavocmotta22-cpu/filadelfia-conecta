'use client'
// app/admin/login/page.tsx
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [showPwd,  setShowPwd]  = useState(false)
  const [error,    setError]    = useState('')
  const [loading,  setLoading]  = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError(''); setLoading(true)
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password)
      const snap = await getDoc(doc(db, 'admins', cred.user.uid))
      if (!snap.exists() || !snap.data().active) throw new Error('Acesso não autorizado')
      const admin = snap.data()
      localStorage.setItem('admin_user', JSON.stringify({
        uid: cred.user.uid,
        firstName: admin.firstName,
        lastName:  admin.lastName,
        email:     admin.email,
        role:      admin.role,
        fullName:  `ADM ${admin.firstName} ${admin.lastName}`,
      }))
      router.push('/admin/dashboard')
    } catch (err: any) {
      setError('E-mail ou senha incorretos. Verifique seus dados.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col"
      style={{ background: 'linear-gradient(160deg, #0F4D3A 0%, #1a6b50 60%, #2D7A5F 100%)' }}>
      <div className="flex-1 flex flex-col items-center justify-center px-6">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-white rounded-2xl p-2.5 shadow-2xl mb-4">
            <Image src="/images/logo-ipf.jpg" alt="IPF" width={60} height={60} style={{ objectFit: 'contain' }} />
          </div>
          <h1 className="text-white text-xl font-bold text-center">Igreja Presbiteriana Filadélfia</h1>
          <p className="text-white/60 text-sm mt-1">Painel Administrativo</p>
        </div>

        {/* Form */}
        <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl">
          <h2 className="text-[#0F4D3A] font-bold text-lg mb-5">Entrar no Painel</h2>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl p-3 mb-4">⚠️ {error}</div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-[#0F4D3A] text-xs font-semibold uppercase tracking-wide block mb-1.5">E-mail</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                  placeholder="seu@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#0F4D3A] focus:ring-1 focus:ring-[#0F4D3A]/20" />
              </div>
            </div>
            <div>
              <label className="text-[#0F4D3A] text-xs font-semibold uppercase tracking-wide block mb-1.5">Senha</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                <input type={showPwd ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#0F4D3A] focus:ring-1 focus:ring-[#0F4D3A]/20" />
                <button type="button" onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3.5 top-3 text-gray-400">
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-[#0F4D3A] text-white font-bold py-3.5 rounded-xl text-sm disabled:opacity-60 active:scale-95 transition-all mt-2"
              style={{ boxShadow: '0 8px 24px rgba(15,77,58,0.3)' }}>
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" /> : '🔐 Entrar'}
            </button>
          </form>

          <div className="mt-4 bg-[#0F4D3A]/5 rounded-xl p-3 border border-[#0F4D3A]/10">
            <p className="text-[10px] font-bold text-[#0F4D3A] uppercase tracking-wide mb-1">Acesso Padrão</p>
            <p className="text-xs text-gray-500 font-mono">admin@filadelfia.app</p>
            <p className="text-xs text-gray-500 font-mono">FiladelfiaCristo2026!</p>
            <p className="text-[10px] text-red-400 mt-1">⚠️ Troque após o primeiro acesso</p>
          </div>
        </div>
      </div>
    </div>
  )
}
