import { type FC } from 'react'

const Footer: FC = () => {
  return (
    <div className="bg-[#171717] text-[#e8e8e8]">
      <div className="text-[15px] border-b border-[#313335] py-[15px] px-[30px]">
        Thailand dan of smile
      </div>
      <div className="text-sm flex flex-wrap lg:justify-between justify-evenly px-4">
        <div className="p-[15px]">
          The Stupid Hackathon Thailand X KMUTT ครั้งที่ 8.125
        </div>
        <div className="flex flex-wrap items-center">
          <a
            className="p-[15px] hover:underline"
            href="https://github.com/3raphat/master-bo"
          >
            GitHub
          </a>
          <a
            className="p-[15px] hover:underline"
            href="ob-retsam/tahpar3/moc.buhtig//:sptth"
          >
            GubHit
          </a>
        </div>
      </div>
    </div>
  )
}

export { Footer }
