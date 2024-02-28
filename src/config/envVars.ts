interface IAppEnvs extends NodeJS.ProcessEnv {
    MONGO_URI?: string
    HASH_KEY?: string
    PORT?: string
}

const envs: IAppEnvs = process.env

export default envs