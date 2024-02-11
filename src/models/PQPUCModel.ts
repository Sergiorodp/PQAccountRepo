import { z } from 'zod'


export const PucShema = z.object({
    class: z.string(),
    code: z.string(),
    description: z.string()
})

export type PUC = z.infer<typeof PucShema> 