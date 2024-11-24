import { env } from '@/lib/env'
import { systemPrompt } from '@/lib/prompt'
import OpenAI from 'openai'

export async function POST(req: Request) {
  const { message } = await req.json()

  const client = new OpenAI({
    apiKey: env.TYPHON_API_KEY,
    baseURL: 'https://api.opentyphoon.ai/v1',
  })

  const chatCompletion = await client.chat.completions.create({
    model: 'typhoon-v1.5x-70b-instruct',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message },
    ],
  })

  return Response.json({
    response: chatCompletion.choices[0].message.content,
  })
}
