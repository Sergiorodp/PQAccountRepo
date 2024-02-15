import { z } from 'zod'

export const UserSchema = z.object({
    userName: z.string({
        required_error: "userName is required",
        invalid_type_error: "userName must be a string",
      }),
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      }),
    password: z.string({
        required_error: "password is required",
        invalid_type_error: "password must be a string",
      }),
    email: z.string().email({ message: "Invalid email address" }),
    MFA: z.boolean().optional(),
})

export type PQUser = z.infer<typeof UserSchema>

