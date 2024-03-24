import { z } from 'zod'

export enum ERoles {
  ADMIN = 'admin',
  USER = 'user'
}

export const UserSchema = z.object({
  userName: z.string({
    required_error: 'userName is required',
    invalid_type_error: 'userName must be a string'
  }),
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string'
  }),
  password: z.string({
    required_error: 'password is required',
    invalid_type_error: 'password must be a string'
  }),
  email: z.string().email({ message: 'Invalid email address' }),
  role: z.nativeEnum(ERoles).default(ERoles.USER),
  MFA: z.boolean().optional()
})

export type TPQUserRequest = z.infer<typeof UserSchema>

export interface TPQUserResponse {
  userName?: string
  name?: string
  password?: string
  email?: string
  role?: string
  MFA?: boolean
}
export interface IPQUserResponse extends TPQUserResponse {
  id?: string
}
