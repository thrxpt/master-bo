import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'

const sdRangver = localFont({
  src: '../fonts/SdRangver.ttf',
  variable: '--font-sd-rangver',
})

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'โบ๋จัด',
  description: 'โบ๋จัด is a search engine for โบ๋',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'font-sans antialiased',
          sdRangver.variable,
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Toaster
          theme="dark"
          position="top-center"
          toastOptions={{
            style: {
              background: '#171717',
              color: '#e8eaed',
            },
          }}
        />
        {children}
      </body>
    </html>
  )
}
