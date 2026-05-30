import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TEST12345',
  description: '창원 상남동 프라이빗 라운지 DOPAMINE',
  verification: {
    google: 'LDwYM7oVAEBKoyeylK2ww0wGyjd0gwQcB4XgPqfvwZQ',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={geist.className}>
      <body>{children}</body>
    </html>
  )
}
