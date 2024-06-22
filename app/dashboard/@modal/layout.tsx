'use client'

import { XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Card } from '@/components/ui/card'

const Modal: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  return (
    <div className="fixed inset-0 grid h-dvh w-svw place-items-center ">
      <div
        onClick={() => router.back()}
        className="absolute h-full w-full bg-background/50 backdrop-blur-xl backdrop-saturate-150"
      />
      <Card className="z-20 w-svw max-w-screen-md">
        <XIcon
          onClick={() => router.back()}
          className="absolute right-2 top-2 z-10 cursor-pointer"
        />
        {children}
      </Card>
    </div>
  )
}

export default Modal
