import { Application } from "express";

import pucServices from "@app/controllers/PQPUCController";


export default function addUserRoutes(app : Application) {
    app.use('/api/puc/v1', pucServices)
    app.use('/api/client/v1')
    app.use('/api/providers/v1')
    app.use('/api/workers/v1')
    app.use('(/api/mypyme/v1')
    app.use('/api/users/', )
}