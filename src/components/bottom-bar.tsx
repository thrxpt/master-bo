'use client'

import { type FC } from 'react'
import { toast } from 'sonner'

const BottomBar: FC = () => {
  const whyPressThisButton = () => {
    toast('กดไม่ได้นะจ๊ะ')
  }

  return (
    <div className="flex mt-6 gap-2 items-center mx-auto text-center justify-center">
      <button
        onClick={whyPressThisButton}
        className="bg-[#303134] rounded-[4px] px-4 text-[#e8eaed] text-sm py-2"
      >
        ปุ่มธรรมดา
      </button>
      <button
        onClick={whyPressThisButton}
        className="bg-[#303134] rounded-[4px] px-4 text-[#e8eaed] text-sm py-2"
      >
        I&apos;m Feeling โบ๋
      </button>
    </div>
  )
}

export { BottomBar }
