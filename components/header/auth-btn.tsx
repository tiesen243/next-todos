'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'

export const AuthBtn: React.FC = () => (
  <>
    <SignedOut>
      <Button variant="ghost" size="sm" asChild>
        <SignInButton />
      </Button>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </>
)
