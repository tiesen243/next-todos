'use client'

import { TRPCReactProvider } from '@/lib/trpc/react'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from 'next-themes'

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider defaultTheme="dark" attribute="class" disableTransitionOnChange>
    <ClerkProvider>
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </ClerkProvider>
  </ThemeProvider>
)
