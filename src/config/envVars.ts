interface IAppEnvs extends NodeJS.ProcessEnv {
  MONGO_URI?: string
  HASH_KEY?: string
  PORT?: string
  JWT_SECRET?: string // 256 rand bits
}

const envs: IAppEnvs = process.env

export default envs
