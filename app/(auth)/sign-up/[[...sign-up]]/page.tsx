import { SignUp } from '@clerk/nextjs'
import type { NextPage } from 'next'

const Page: NextPage = () => (
  <div className="grid h-[80dvh] place-items-center">
    <SignUp path="/sign-up" />
  </div>
)

export default Page
