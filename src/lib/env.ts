import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    TYPHON_API_KEY: z.string(),
  },
  client: {},
  runtimeEnv: {
    TYPHON_API_KEY: process.env.TYPHON_API_KEY,
  },
})
