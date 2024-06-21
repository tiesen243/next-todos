'use client'

import { TRPCReactProvider } from '@/lib/trpc/react'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes'

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <NextThemeProvider defaultTheme="dark" attribute="class" disableTransitionOnChange>
    {children}
  </NextThemeProvider>
)

const BaseProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme()
  return (
    <ClerkProvider appearance={theme === 'dark' ? { baseTheme: dark } : {}}>
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </ClerkProvider>
  )
}

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider>
    <BaseProvider>{children}</BaseProvider>
  </ThemeProvider>
)
