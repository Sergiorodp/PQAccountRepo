import { Application } from "express";
import pucServices from "@app/controllers/PQPUCController";

export default function addUserRoutes(app : Application) {
    app.use('/api/v1/puc', pucServices)
    app.use('/api/v1/client')
    app.use('/api/v1/providers')
    app.use('/api/v1/workers')
}