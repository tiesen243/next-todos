'use client'

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

import { Button } from '@ui/button'

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
