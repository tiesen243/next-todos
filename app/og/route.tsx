import { siteConfig } from '@/lib/site'
import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

interface Props {
  params: {
    title?: string
    desc?: string
  }
}

export const runtime = 'edge'

export const GET = async (_: NextRequest, { params }: Props): Promise<ImageResponse> => {
  const dotBg = {
    backgroundImage:
      'radial-gradient(circle at 25px 25px, #2F3947 2%, transparent 0%), radial-gradient(circle at 75px 75px, #2F3947 2%, transparent 0%)',
    backgroundSize: '100px 100px',
  }

  const title = params.title ?? siteConfig.meta.title.default
  const description = params.desc ?? siteConfig.meta.description

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full text-white p-20 items-center justify-center bg-black"
        style={dotBg}
      >
        <div tw="flex flex-col items-center w-full">
          <h2 tw="text-5xl font-bold capitalize">{title}</h2>
          <p tw="text-2xl mt-4">{description}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
