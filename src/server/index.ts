import express, { Application } from "express"
import dotenv from "dotenv"
dotenv.config()
//Routes
import addUserRoutes from "../routes/PQUserRoutes/PQMainUserRoute"

const server : Application = express()

addUserRoutes(server)

//connect to mongodb
import '../client/mongoDB/index'

export { server }