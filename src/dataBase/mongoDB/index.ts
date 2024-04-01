import mongoose from 'mongoose'
import envs from '@app/config/envVars'

export default function mongoInit (): void {
  if (envs.ATLAS_URI) {
    mongoose
      .connect(envs.ATLAS_URI)
      .then(() => {
        console.log('Connected to the database!')
      })
      .catch(err => {
        console.log('Cannot connect to the database!', err)
        process.exit()
      })
  } else {
    console.error('ATLAS_URI not defined')
    process.exit()
  }
}
