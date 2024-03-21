import envs from '@app/config/envVars'

export const argonOptions = {
  secret: Buffer.from(envs.HASH_KEY ?? '')
}
