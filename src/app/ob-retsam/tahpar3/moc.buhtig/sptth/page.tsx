import type { Metadata } from 'next'
import { type FC } from 'react'

export const metadata: Metadata = {
  title: 'บัดโจ๋',
}

const Page: FC = () => {
  return (
    <iframe
      className="min-h-screen w-full scale-x-[-1]"
      src="/api/github-proxy"
    />
  )
}

export default Page
