import { z } from 'zod'

export const ProviderZSchema = z.object({
    name: z.string(),
    NIT: z.string(),
    code: z.string()
})