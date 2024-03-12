import { z } from 'zod'

export const LogInSchema = z.object({
    userName: z.string({
        required_error: "userName is required",
        invalid_type_error: "userName must be a string",
      }).optional(),
    password: z.string({
        required_error: "password is required",
        invalid_type_error: "password must be a string",
      }),
    email: z.string().email({ message: "Invalid email address" }).optional(),
})

export type TPQLogIn = z.infer<typeof LogInSchema>