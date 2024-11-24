import { type FC } from 'react'

const Banner: FC = () => {
  return (
    <div className="font-sd-rangver justify-center flex gap-1 items-center mb-1">
      <span className="text-[#eb552f] text-9xl [text-shadow:10px_10px_#000000]">
        โบ๋
      </span>
      <span className="text-[#e9ff25] text-9xl [text-shadow:10px_10px_#000000]">
        จัด
      </span>
    </div>
  )
}

export { Banner }
