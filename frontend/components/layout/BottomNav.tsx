'use client'
// components/layout/BottomNav.tsx
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Church, Users, BookOpen, Menu } from 'lucide-react'

const NAV = [
  { href: '/home',       icon: Home,     label: 'Início' },
  { href: '/cultos',     icon: Church,   label: 'Cultos' },
  { href: '/comunidade', icon: Users,    label: 'Comunidade' },
  { href: '/recursos',   icon: BookOpen, label: 'Recursos' },
  { href: '/mais',       icon: Menu,     label: 'Mais' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50"
      style={{ boxShadow: '0 -4px 20px rgba(0,0,0,0.08)' }}>
      <div className="bg-white border-t border-gray-100 flex items-center justify-around px-2 pb-safe"
        style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
        {NAV.map(({ href, icon: Icon, label }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link key={href} href={href}
              className={`flex flex-col items-center gap-0.5 py-2 px-3 rounded-2xl transition-all duration-200 min-w-[56px]
                ${active ? 'text-[#0F4D3A]' : 'text-gray-400'}`}>
              <div className={`p-1.5 rounded-xl transition-all duration-200 ${active ? 'bg-[#0F4D3A]/10' : ''}`}>
                <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
              </div>
              <span className={`text-[10px] font-medium ${active ? 'font-semibold' : ''}`}>{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
