import express, { Application } from "express"
import dotenv from "dotenv"
import swaggerUi from "swagger-ui-express"
import swaggerJson from "swagger-jsdoc"
import { options } from "@app/config/swaggerConfig"
dotenv.config()
//Routes
import addRoutes from "@app/routes/index"

const specs = swaggerJson(options)
const server : Application = express()
server.use(express.json())
server.use('api/v1/docs', swaggerUi.serve, swaggerUi.setup(specs))
addRoutes(server)

//connect to mongodb
import '@app/dataBase/mongoDB/index'

export { server }