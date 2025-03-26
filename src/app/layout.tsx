import { Inter } from 'next/font/google'
import Script from 'next/script' // Importa o componente Script do Next.js
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
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T8MQPPD9');`}
        </Script>
      </head>

      <body className={inter.className}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8MQPPD9"
            height="0" width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  )
}
