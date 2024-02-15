import { z } from 'zod'

export const UserSchema = z.object({
    userName: z.string(),
    name: z.string(),
    password: z.string(),
    mail: z.string(),
    MFA: z.boolean(),
})

export type PQUser = z.infer<typeof UserSchema>

