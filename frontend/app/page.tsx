'use client'
// app/page.tsx — Splash Screen
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function SplashPage() {
  const router = useRouter()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(() => router.push('/home'), 400)
    }, 2200)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 transition-opacity duration-500"
      style={{
        background: 'linear-gradient(160deg, #0F4D3A 0%, #1a6b50 50%, #2D7A5F 100%)',
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Círculos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      {/* Logo */}
      <div className="flex flex-col items-center animate-fade-in">
        <div className="w-28 h-28 rounded-full bg-white shadow-2xl flex items-center justify-center mb-6 p-3"
          style={{ boxShadow: '0 0 60px rgba(255,255,255,0.2)' }}>
          <Image
            src="/images/logo-ipf.jpg"
            alt="Igreja Presbiteriana Filadélfia"
            width={88}
            height={88}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        <p className="text-white/70 text-xs tracking-[4px] uppercase font-light mb-1">Igreja Presbiteriana</p>
        <h1 className="text-white text-3xl font-bold tracking-wider">FILADÉLFIA</h1>

        <div className="w-16 h-0.5 bg-white/30 rounded-full my-6" />

        <p className="text-white/60 text-sm font-light italic">
          Comunhão que edifica. Palavra que transforma.
        </p>
      </div>

      {/* Loading dots */}
      <div className="absolute bottom-16 flex gap-2">
        {[0, 1, 2].map(i => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
    </div>
  )
}
