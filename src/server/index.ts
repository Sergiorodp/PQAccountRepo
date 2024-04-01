import express, { type Application } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
// Routes
import addRoutes from '@app/routes/index'
// connect to mongodb
import mongoInit from '@app/dataBase/mongoDB'
import { swaggerApiDocs } from '@app/config/swaggerConfig'

dotenv.config()
mongoInit()
const server: Application = express()

// middlewares
server.use(express.json())
server.use(morgan('tiny'))

// routes
addRoutes(server)

// docs
swaggerApiDocs(server)

export { server }
