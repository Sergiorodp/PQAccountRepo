import express, { Application } from "express"
import dotenv from "dotenv"
dotenv.config()

//Routes
import addRoutes from "@app/routes/index.ts";

const server : Application = express()
server.use(express.json())
addRoutes(server)

//connect to mongodb
import '@app/dataBase/mongoDB/index'

export { server }