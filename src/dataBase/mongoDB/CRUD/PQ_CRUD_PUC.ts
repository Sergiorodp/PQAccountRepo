import { type PUC } from '@app/models/PQPUCModel'
import PUCConection from '../Schemas/PQPucDbSchemas'
import { type IPucRepository } from '@app/dataBase/repoInterfaces/PQRepositoryInterfaces'

export class MongoPUCRepository implements IPucRepository {
  private static instance: MongoPUCRepository

  private constructor () {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance (): MongoPUCRepository {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!MongoPUCRepository.instance) {
      MongoPUCRepository.instance = new MongoPUCRepository()
    }
    return MongoPUCRepository.instance
  }

  async insert (PUC: PUC): Promise<PUC> {
    await PUCConection.insertMany([PUC])
    return PUC
  }
}
