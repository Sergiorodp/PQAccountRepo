import { z } from 'zod'

export const LogInSchema = z.object({
  password: z.string({
    required_error: 'password is required',
    invalid_type_error: 'password must be a string'
  }),
  email: z.string().email({ message: 'Invalid email address' })
})

export type TPQLogIn = z.infer<typeof LogInSchema>
