import { SignIn } from '@clerk/nextjs'

const Page: React.FC = () => (
  <div className="grid h-[80dvh] place-items-center">
    <SignIn path="/sign-in" />
  </div>
)

export default Page
