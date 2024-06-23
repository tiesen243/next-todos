import { Inter } from 'next/font/google'

import { Header } from '@/components/header'
import { Provider } from '@/components/provider'
import { Toaster } from '@/components/ui/sonner'
import { siteConfig } from '@/lib/site'

export const metadata = siteConfig.meta

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

import './globals.css'
const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={`${inter.variable} flex flex-col gap-4 font-sans`}>
      <Provider>
        <Header />
        <main className="container">{children}</main>
        <Toaster />
      </Provider>
    </body>
  </html>
)

export default RootLayout
