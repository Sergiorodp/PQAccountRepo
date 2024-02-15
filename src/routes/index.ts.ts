import { Application } from "express";

import pucServices from "@app/controllers/PQPUCController";
import userServices from "@app/controllers/PQUserController";


export default function addRoutes(app : Application) {
    app.use('/api/puc/v1', pucServices)
    app.use('/api/v1/users/', userServices)
    /*
    app.use('/api/client/v1', () => {})
    app.use('/api/providers/v1', () => {})
    app.use('/api/workers/v1', () => {})
    app.use('(/api/mypyme/v1', () => {})
    */
}