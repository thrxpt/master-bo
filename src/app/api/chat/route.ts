import { env } from '@/env'
import { systemPrompt } from '@/lib/prompt'
import OpenAI from 'openai'

export async function POST(req: Request) {
  const { message } = await req.json()

  const client = new OpenAI({
    apiKey: env.TYPHOON_API_KEY,
    baseURL: 'https://api.opentyphoon.ai/v1',
  })

  const chatCompletion = await client.chat.completions.create({
    model: 'typhoon-v2.1-12b-instruct',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message },
    ],
  })

  return Response.json({
    response: chatCompletion.choices[0].message.content,
  })
}
