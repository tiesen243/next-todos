'use client'

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const AuthBtn: React.FC = () => (
  <>
    <SignedOut>
      <Button variant="ghost" size="sm" asChild>
        <Link href="/sign-in">Sign in</Link>
      </Button>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </>
)
