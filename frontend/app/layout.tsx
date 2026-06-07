// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Igreja Presbiteriana Filadélfia',
  description: 'Somos uma igreja cristã reformada que ama a Deus acima de todas as coisas e ao próximo como a si mesmo.',
  manifest: '/manifest.json',
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'IPF' },
  icons: { icon: '/images/logo-ipf.jpg', apple: '/images/logo-ipf.jpg' },
  openGraph: {
    title: 'Igreja Presbiteriana Filadélfia',
    description: 'Comunhão que edifica. Palavra que transforma.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F4D3A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-[#F5F6F7] max-w-md mx-auto relative min-h-screen">
        {children}
      </body>
    </html>
  )
}
