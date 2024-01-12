import express, { Application } from "express"

//Routes
import addMainRoutes from "../routes/mainRoute"

const server : Application = express()

addMainRoutes(server)

export { server }