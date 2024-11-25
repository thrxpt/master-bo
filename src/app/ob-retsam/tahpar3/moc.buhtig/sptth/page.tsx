import type { Metadata } from 'next'
import { type FC } from 'react'

export const metadata: Metadata = {
  title: 'บัดโจ๋',
}

const Page: FC = () => {
  return (
    <iframe
      className="min-h-screen w-full scale-x-[-1]"
      src="https://github.com/3raphat/master-bo"
    />
  )
}

export default Page
