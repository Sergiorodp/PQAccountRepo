import { type TPQUserRequest, type IPQUserResponse } from '@app/models/PQUserModel'
import { MongoUsersRepository as userRepository } from './mongoDB/CRUD/PQ_CRUD_Users'
import { type ProjectionType } from 'mongoose'

// #region CREATE USER
export async function createNewPQUserRepoV1 (user: TPQUserRequest): Promise<IPQUserResponse> {
  try {
    const newUserResponse = await userRepository.getInstance().create(user)
    const userData: IPQUserResponse = {
      userName: newUserResponse.userName,
      name: newUserResponse.name,
      password: '***********',
      email: newUserResponse.email
    }
    return userData
  } catch (e) {
    return await Promise.reject(e)
  }
}
// #endregion

// #region GET USER
export async function getPQUserByIdRepoV1 (id: string): Promise<IPQUserResponse> {
  try {
    return await userRepository.getInstance().getById(id)
  } catch (e) {
    return await Promise.reject(e)
  }
}
// #endregion

// #region GET USER
export async function getPQUserByEmailRepoV1 (email: string, projection: ProjectionType<IPQUserResponse> = {}): Promise<IPQUserResponse> {
  try {
    return await userRepository.getInstance().getByEmail(email, projection)
  } catch (e) {
    return await Promise.reject(e)
  }
}
// #endregion

export default { createNewPQUserRepoV1, getPQUserByIdRepoV1, getPQUserByEmailRepoV1 }
