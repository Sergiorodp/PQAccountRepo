import { type TPQCreateUserRequest, type PQUserRepoResponse } from '@app/models/PQUserModel'
import { MongoUsersRepository as userRepository } from './mongoDB/CRUD/PQ_CRUD_Users'

// #region CREATE USER
export async function createNewPQUserRepoV1 (user: TPQCreateUserRequest): Promise<PQUserRepoResponse> {
  try {
    const newUserResponse = await userRepository.getInstance().create(user)
    const userData: PQUserRepoResponse = {
      userName: newUserResponse.userName,
      name: newUserResponse.name,
      password: '***********',
      email: newUserResponse.email,
      id: newUserResponse.id
    }
    return userData
  } catch (e) {
    return await Promise.reject(e)
  }
}
// #endregion

// #region GET USER
export async function getPQUserByIdRepoV1 (id: string): Promise<PQUserRepoResponse> {
  try {
    return await userRepository.getInstance().getById(id)
  } catch (e) {
    return await Promise.reject(e)
  }
}
// #endregion

// #region GET USER
export async function getPQUserByEmailRepoV1 (email: string): Promise<PQUserRepoResponse> {
  try {
    return await userRepository.getInstance().getByEmail(email)
  } catch (e) {
    return await Promise.reject(e)
  }
}
// #endregion
