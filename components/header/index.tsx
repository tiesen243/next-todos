import Image from 'next/image'
import Link from 'next/link'

import { AuthBtn } from './auth-btn'
import { ThemeBtn } from './theme-btn'

export const Header: React.FC = () => {
  return (
    <header className="sticky inset-0 z-50 border-b bg-background/70 py-2 backdrop-blur-xl backdrop-saturate-150">
      <div className="container flex items-center justify-between gap-4">
        <Link href="/" className="size-8">
          <Image src="/logo.svg" alt="logo" className="dark:invert" fill />
        </Link>

        <div className="flex items-center gap-4">
          <AuthBtn />
          <ThemeBtn />
        </div>
      </div>
    </header>
  )
}
