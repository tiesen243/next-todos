'use server'

import {
  revalidateTag as nextRevalidateTag,
  revalidatePath as nextRevalidatePath,
} from 'next/cache'

export const revalidatePath = async (path: string) => {
  nextRevalidatePath(path)
}

export const revalidateTag = async (tag: string) => {
  nextRevalidateTag(tag)
}
