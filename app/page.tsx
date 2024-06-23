import { buttonVariants } from '@/components/ui/button'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Page: NextPage = async () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              src="/logo.svg"
              alt="Hero"
              className="mx-auto overflow-hidden rounded-xl object-contain dark:invert sm:w-full lg:order-last lg:aspect-square"
              width={200}
              height={200}
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Stay on top of your tasks with our powerful todo app
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Streamline your productivity and never forget a task again with our intuitive and
                  feature-rich todo app.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/sign-in" className={buttonVariants({ className: 'w-36' })}>
                  Sign In
                </Link>
                <Link
                  href="/dashboard"
                  className={buttonVariants({ variant: 'outline', className: 'w-36' })}
                >
                  Try It Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Boost your productivity with our todo app
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our todo app is designed to help you stay organized and focused, with powerful
                features that make managing your tasks a breeze.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Intuitive Interface</h3>
                    <p className="text-muted-foreground">
                      Our clean and user-friendly interface makes it easy to manage your tasks.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Powerful Filtering</h3>
                    <p className="text-muted-foreground">
                      Easily filter and sort your tasks to stay on top of your priorities.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Seamless Collaboration</h3>
                    <p className="text-muted-foreground">
                      Invite team members to collaborate on tasks and stay in sync.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Take control of your tasks with our todo app
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up or try our app today and experience the difference our powerful todo app can
              make in your productivity.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <p className="text-xs text-muted-foreground">
              Sign up to get started with our todo app.{' '}
              <Link href="#" className="underline underline-offset-2" prefetch={false}>
                Terms &amp; Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
      <div className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">&copy; 2024 Todo App. All rights reserved.</p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link href="#" className="text-xs underline-offset-4 hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs underline-offset-4 hover:underline" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Page
