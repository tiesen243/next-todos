import type { Metadata } from 'next'

type SiteConfig = {
  meta: Metadata
}
export const siteConfig: SiteConfig = {
  meta: {
    title: {
      default: 'Todo List',
      template: '%s | Todo List',
    },
    description: 'A simple todo list app to help you stay organized and productive.',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
    openGraph: { images: ['/og'] },
  },
}
