import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    TYPHOON_API_KEY: z.string(),
  },
  client: {},
  runtimeEnv: {
    TYPHOON_API_KEY: process.env.TYPHOON_API_KEY,
  },
})
