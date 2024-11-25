'use client'

import { ClipboardCopy, X } from 'lucide-react'
import { useEffect, useState, type FC } from 'react'
import { toast } from 'sonner'

const SearchBar: FC = () => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')
  const [placeholder, setPlaceholder] = useState('')
  const [loadingText, setLoadingText] = useState('')

  const whyPressThisButton = () => {
    toast('กดไม่ได้นะจ๊ะ')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return

    try {
      setLoading(true)
      setResponse('')

      const loadingTexts = [
        'กำลังคิดอยู่นะ รอแป๊บ...',
        'ขอเวลาคิดหน่อย...',
        'รอก่อนนะ กำลังหาคำตอบ...',
        'ใจเย็นๆ กำลังคิดให้...',
        'อดใจรอแป๊บ...',
      ]

      const interval = setInterval(() => {
        const randomText =
          loadingTexts[Math.floor(Math.random() * loadingTexts.length)]
        setLoadingText(randomText)
      }, 1000)

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: search }),
      })

      clearInterval(interval)

      const data = await response.json()
      setResponse(data.response)
    } catch (error) {
      console.error(error)
      setResponse('ตอบไม่ได้อะ ลองคิดเองบ้างสิ 🤔')
    } finally {
      setLoading(false)
      setLoadingText('')
    }
  }

  useEffect(() => {
    const placeholder = [
      'ทำไมนัดแปดครึ่งแล้ว 10 โมงยังไม่มา',
      'ทำไมชอบบิด',
      'ทำไมขาดประชุม',
      'ทำไมไม่ออกกำลังกาย',
      'ทำไมกินข้าวไม่หมด',
      'ทำไมไม่กินผัก',
      'ทำไมใส่เสื้อตัวเดิม',
      'ทำไมไม่ตื่นเช้า',
      'ทำไมไม่เก็บที่นอน',
      'ทำไมไม่ส่งรายงาน',
      'ทำไมมาสาย',
      'ทำไมไม่ยอมอ่านหนังสือ',
      'ทำไมกินข้าวหก',
      'ทำไมไม่ทำความสะอาดห้อง',
      'ทำไมไม่ทำการบ้าน',
      'ทำไมไม่ล้างจาน',
      'ทำไมไม่รีดผ้า',
      'ทำไมไม่ส่งงาน',
      'ทำไมไม่ทำงานบ้าน',
      'ทำไมไม่ล้างรถ',
      'ทำไมไม่ซักผ้า',
      'ทำไมไม่ทำงาน',
      'ทำไมไม่ตอบข้อความ',
      'ทำไมไม่เก็บของ',
      'ทำไมไม่ทำความสะอาดห้องน้ำ',
    ]
    const randomPlaceholder = Math.floor(Math.random() * placeholder.length)
    setPlaceholder(placeholder[randomPlaceholder])
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('ก๊อปปี้ ทู คลิปบอร์ด ซัคเซสฟูลลี่')
  }

  const clearInput = () => {
    setSearch('')
    setResponse('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setResponse('')
  }

  return (
    <div className="flex flex-col items-center gap-4 max-w-[584px] w-full mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-[#4d5156] hover:bg-[#575b61] h-[44px] rounded-full border border-transparent w-full flex items-center"
      >
        <div className="flex items-center px-4 w-full">
          <div className="flex items-center gap-2 w-full">
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#9aa0a6"
              className="size-5"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <input
              type="text"
              className="flex-1 bg-transparent outline-none text-gray-100 placeholder:text-[#9aa0a6]"
              value={search}
              onChange={handleInputChange}
              placeholder={placeholder}
              disabled={loading}
            />
            <div className="flex items-center gap-4 mr-1">
              {search && (
                <button
                  type="button"
                  onClick={clearInput}
                  className="text-[#9aa0a6] hover:text-gray-100"
                  disabled={loading}
                >
                  <X className="size-5" />
                </button>
              )}
              <button
                type="button"
                onClick={whyPressThisButton}
                disabled={loading}
              >
                <svg
                  className="size-5"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#4285f4"
                    d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                  ></path>
                  <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                  <path
                    fill="#fbbc04"
                    d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                onClick={whyPressThisButton}
                disabled={loading}
              >
                <svg
                  className="size-5"
                  focusable="false"
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="none" height="192" width="192"></rect>
                  <g>
                    <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
                    <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
                    <path
                      fill="#ea4335"
                      d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
                    ></path>
                    <path
                      fill="#fbbc04"
                      d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>

      {loading && (
        <div className="bg-[#4d5156] rounded-xl p-4 w-full">
          <div className="flex justify-between items-start gap-4">
            <p className="text-gray-100 animate-pulse">
              {loadingText || 'กำลังคิดอยู่นะ รอแป๊บ...'}
            </p>
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-[#575b61] rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {response && !loading && (
        <div className="bg-[#4d5156] rounded-xl p-4 w-full">
          <div className="flex justify-between items-start gap-4">
            <p className="text-gray-100">{response}</p>
            <button
              onClick={() => copyToClipboard(response)}
              className="shrink-0 text-[#9aa0a6] hover:text-gray-100"
            >
              <ClipboardCopy className="size-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export { SearchBar }
