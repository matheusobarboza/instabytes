import z from 'zod'

const envSchema = z.object({
  DB_URL: z.string().url(),
  PORT: z.coerce.number(),
})

export const env = envSchema.parse(process.env)