import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Go4Digital',
  description: 'A Go4 Digital é uma empresa especializada no desenvolvimento de soluções digitais voltadas para a Gestão de Ativos e nasceu da união de experientes profissionais do segmento de gestão de frotas.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/static/images/logotipo-go4-bg-white.png',
        href: '/static/images/logotipo-go4-bg-white.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/static/images/logotipo-go4-bg-white.png',
        href: '/static/images/logotipo-go4-bg-white.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={inter.className }>
        {children}
      </body>
    </html>
  )
}
